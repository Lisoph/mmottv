(() => {
    const emotes = require("./map.json");
    const emotesRegex = buildEmotesRegex();
    //const ssheetPath = "file://C:\Users\hauser.daniel\AppData\Local\Programs\mattermost-desktop\resources\app.asar/assets/ssheet.png";
    const ssheetBase64 = require("./ssheet.json").base64;
    
    setTimeout(() => {
        injectSsheetCss(ssheetBase64);
        console.log("EMOTES READY");
        
        (new MutationObserver(changes => {
            changes.forEach(change => {
                if (change.type !== "childList") return;
                
                if (change.target.matches(".post-list__dynamic > div")) {
                    change.addedNodes.forEach(n => [...n.getElementsByClassName("post-message__text")].forEach(applyEmotes));
                } else if (change.target.matches("#app-content")) {
                    setTimeout(() => {
                        [...document.getElementsByClassName("post-message__text")].forEach(applyEmotes);
                    }, 500);
                }
            });
        }).observe(document.body, {
            childList: true,
            subtree: true,
            attributes: false,
            attributeOldValues: false,
            characterData: false,
            characterDataOldValue: false,
        }));
        
        console.log("OBSERVER RUNNING");
        
        [...document.getElementsByClassName("post-message__text")].forEach(applyEmotes);
    }, 3000);
    
    function injectSsheetCss(b64) {
        const style = document.createElement("style");
        style.classList.add("mmottv-injected-css");
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);
        const css = document.styleSheets[document.styleSheets.length - 1];
        css.insertRule(`:root { --img-ssheet: url(data:null;base64,${b64}); }`, 0);
        css.insertRule(".mmottv-emote { background-image: var(--img-ssheet); background-repeat: no-repeat; display: inline-block; }", 1);
        console.log(`CSS INJECTED with ${b64.length} bytes`);
    }

    function buildEmotesRegex() {
        let regexStr = "\\b(";
        let first = true;
        
        const keys = Object.keys(emotes).sort((a, b) => b.length - a.length);
        for (const key of keys) {
            if (!first) {
                regexStr += '|';
            }
            regexStr += key;
            first = false;
        }
        
        regexStr += ")\\b";
        
        return new RegExp(regexStr, "g");
    }

    function lookupEmotesInString(string) {
        emotesRegex.lastIndex = 0;
        let instances = [];
        
        for (;;) {
            const match = emotesRegex.exec(string);
            if (match == null) break;
            
            const key = match[1];
            const emote = emotes[key];
            instances.push({index: match.index, key: key, code: emote.code, id: emote.id, rect: emote.rect});
        }
        
        return instances;
    }

    function applyEmotes(msgDiv) {
        const emotes = lookupEmotesInString(msgDiv.innerText);
        if (emotes.length == 0) {
            return;
        }

        const innerText = msgDiv.innerText;
        let i = 0;
        msgDiv.innerHTML = "";
        
        const addText = text => msgDiv.appendChild(document.createTextNode(text));

        for (const emote of emotes) {
            addText(innerText.slice(i, emote.index));
            
            const imgDiv = document.createElement("div");
            imgDiv.classList.add("mmottv-emote");
            imgDiv.style.backgroundPosition = `${-emote.rect.x}px ${-emote.rect.y}px`;
            imgDiv.style.width = `${emote.rect.w}px`;
            imgDiv.style.height = `${emote.rect.h}px`;
            msgDiv.appendChild(imgDiv);
            
            i = emote.index + emote.code.length;
        }

        addText(innerText.substr(i));
    }
})();
