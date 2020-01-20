(() => {
    const vanillaEmotes = { "JKanStyle": { "code": "JKanStyle", "emoticon_set": 0, "id": 15 }, "OptimizePrime": { "code": "OptimizePrime", "emoticon_set": 0, "id": 16 }, "StoneLightning": { "code": "StoneLightning", "emoticon_set": 0, "id": 17 }, "TheRinger": { "code": "TheRinger", "emoticon_set": 0, "id": 18 }, "RedCoat": { "code": "RedCoat", "emoticon_set": 0, "id": 22 }, "Kappa": { "code": "Kappa", "emoticon_set": 0, "id": 25 }, "JonCarnage": { "code": "JonCarnage", "emoticon_set": 0, "id": 26 }, "MrDestructoid": { "code": "MrDestructoid", "emoticon_set": 0, "id": 28 }, "BCWarrior": { "code": "BCWarrior", "emoticon_set": 0, "id": 30 }, "GingerPower": { "code": "GingerPower", "emoticon_set": 0, "id": 32 }, "DansGame": { "code": "DansGame", "emoticon_set": 0, "id": 33 }, "SwiftRage": { "code": "SwiftRage", "emoticon_set": 0, "id": 34 }, "PJSalt": { "code": "PJSalt", "emoticon_set": 0, "id": 36 }, "KevinTurtle": { "code": "KevinTurtle", "emoticon_set": 0, "id": 40 }, "Kreygasm": { "code": "Kreygasm", "emoticon_set": 0, "id": 41 }, "SSSsss": { "code": "SSSsss", "emoticon_set": 0, "id": 46 }, "PunchTrees": { "code": "PunchTrees", "emoticon_set": 0, "id": 47 }, "ArsonNoSexy": { "code": "ArsonNoSexy", "emoticon_set": 0, "id": 50 }, "SMOrc": { "code": "SMOrc", "emoticon_set": 0, "id": 52 }, "FrankerZ": { "code": "FrankerZ", "emoticon_set": 0, "id": 65 }, "OneHand": { "code": "OneHand", "emoticon_set": 0, "id": 66 }, "HassanChop": { "code": "HassanChop", "emoticon_set": 0, "id": 68 }, "BloodTrail": { "code": "BloodTrail", "emoticon_set": 0, "id": 69 }, "DBstyle": { "code": "DBstyle", "emoticon_set": 0, "id": 73 }, "AsianGlow": { "code": "AsianGlow", "emoticon_set": 0, "id": 74 }, "BibleThump": { "code": "BibleThump", "emoticon_set": 0, "id": 86 }, "ShazBotstix": { "code": "ShazBotstix", "emoticon_set": 0, "id": 87 }, "PogChamp": { "code": "PogChamp", "emoticon_set": 0, "id": 88 }, "PMSTwin": { "code": "PMSTwin", "emoticon_set": 0, "id": 92 }, "FUNgineer": { "code": "FUNgineer", "emoticon_set": 0, "id": 244 }, "ResidentSleeper": { "code": "ResidentSleeper", "emoticon_set": 0, "id": 245 }, "4Head": { "code": "4Head", "emoticon_set": 0, "id": 354 }, "HotPokket": { "code": "HotPokket", "emoticon_set": 0, "id": 357 }, "FailFish": { "code": "FailFish", "emoticon_set": 0, "id": 360 }, "DAESuppy": { "code": "DAESuppy", "emoticon_set": 0, "id": 973 }, "WholeWheat": { "code": "WholeWheat", "emoticon_set": 0, "id": 1896 }, "ThunBeast": { "code": "ThunBeast", "emoticon_set": 0, "id": 1898 }, "TF2John": { "code": "TF2John", "emoticon_set": 0, "id": 1899 }, "RalpherZ": { "code": "RalpherZ", "emoticon_set": 0, "id": 1900 }, "Kippa": { "code": "Kippa", "emoticon_set": 0, "id": 1901 }, "Keepo": { "code": "Keepo", "emoticon_set": 0, "id": 1902 }, "BigBrother": { "code": "BigBrother", "emoticon_set": 0, "id": 1904 }, "SoBayed": { "code": "SoBayed", "emoticon_set": 0, "id": 1906 }, "PeoplesChamp": { "code": "PeoplesChamp", "emoticon_set": 0, "id": 3412 }, "GrammarKing": { "code": "GrammarKing", "emoticon_set": 0, "id": 3632 }, "PanicVis": { "code": "PanicVis", "emoticon_set": 0, "id": 3668 }, "ANELE": { "code": "ANELE", "emoticon_set": 0, "id": 3792 }, "BrokeBack": { "code": "BrokeBack", "emoticon_set": 0, "id": 4057 }, "PipeHype": { "code": "PipeHype", "emoticon_set": 0, "id": 4240 }, "YouWHY": { "code": "YouWHY", "emoticon_set": 0, "id": 4337 }, "RitzMitz": { "code": "RitzMitz", "emoticon_set": 0, "id": 4338 }, "EleGiggle": { "code": "EleGiggle", "emoticon_set": 0, "id": 4339 }, "TheThing": { "code": "TheThing", "emoticon_set": 0, "id": 7427 }, "HassaanChop": { "code": "HassaanChop", "emoticon_set": 0, "id": 20225 }, "BabyRage": { "code": "BabyRage", "emoticon_set": 0, "id": 22639 }, "panicBasket": { "code": "panicBasket", "emoticon_set": 0, "id": 22998 }, "PermaSmug": { "code": "PermaSmug", "emoticon_set": 0, "id": 27509 }, "BuddhaBar": { "code": "BuddhaBar", "emoticon_set": 0, "id": 27602 }, "WutFace": { "code": "WutFace", "emoticon_set": 0, "id": 28087 }, "PRChase": { "code": "PRChase", "emoticon_set": 0, "id": 28328 }, "Mau5": { "code": "Mau5", "emoticon_set": 0, "id": 30134 }, "HeyGuys": { "code": "HeyGuys", "emoticon_set": 0, "id": 30259 }, "NotATK": { "code": "NotATK", "emoticon_set": 0, "id": 34875 }, "mcaT": { "code": "mcaT", "emoticon_set": 0, "id": 35063 }, "TTours": { "code": "TTours", "emoticon_set": 0, "id": 38436 }, "PraiseIt": { "code": "PraiseIt", "emoticon_set": 0, "id": 38586 }, "HumbleLife": { "code": "HumbleLife", "emoticon_set": 0, "id": 46881 }, "CorgiDerp": { "code": "CorgiDerp", "emoticon_set": 0, "id": 49106 }, "ArgieB8": { "code": "ArgieB8", "emoticon_set": 0, "id": 51838 }, "ShadyLulu": { "code": "ShadyLulu", "emoticon_set": 0, "id": 52492 }, "KappaPride": { "code": "KappaPride", "emoticon_set": 0, "id": 55338 }, "CoolCat": { "code": "CoolCat", "emoticon_set": 0, "id": 58127 }, "DendiFace": { "code": "DendiFace", "emoticon_set": 0, "id": 58135 }, "NotLikeThis": { "code": "NotLikeThis", "emoticon_set": 0, "id": 58765 }, "riPepperonis": { "code": "riPepperonis", "emoticon_set": 0, "id": 62833 }, "duDudu": { "code": "duDudu", "emoticon_set": 0, "id": 62834 }, "bleedPurple": { "code": "bleedPurple", "emoticon_set": 0, "id": 62835 }, "twitchRaid": { "code": "twitchRaid", "emoticon_set": 0, "id": 62836 }, "SeemsGood": { "code": "SeemsGood", "emoticon_set": 0, "id": 64138 }, "MingLee": { "code": "MingLee", "emoticon_set": 0, "id": 68856 }, "KappaRoss": { "code": "KappaRoss", "emoticon_set": 0, "id": 70433 }, "KappaClaus": { "code": "KappaClaus", "emoticon_set": 0, "id": 74510 }, "OhMyDog": { "code": "OhMyDog", "emoticon_set": 0, "id": 81103 }, "OSFrog": { "code": "OSFrog", "emoticon_set": 0, "id": 81248 }, "SeriousSloth": { "code": "SeriousSloth", "emoticon_set": 0, "id": 81249 }, "KomodoHype": { "code": "KomodoHype", "emoticon_set": 0, "id": 81273 }, "VoHiYo": { "code": "VoHiYo", "emoticon_set": 0, "id": 81274 }, "MikeHogu": { "code": "MikeHogu", "emoticon_set": 0, "id": 81636 }, "KappaWealth": { "code": "KappaWealth", "emoticon_set": 0, "id": 81997 }, "cmonBruh": { "code": "cmonBruh", "emoticon_set": 0, "id": 84608 }, "SmoocherZ": { "code": "SmoocherZ", "emoticon_set": 0, "id": 89945 }, "NomNom": { "code": "NomNom", "emoticon_set": 0, "id": 90075 }, "StinkyCheese": { "code": "StinkyCheese", "emoticon_set": 0, "id": 90076 }, "ChefFrank": { "code": "ChefFrank", "emoticon_set": 0, "id": 90129 }, "FutureMan": { "code": "FutureMan", "emoticon_set": 0, "id": 98562 }, "OpieOP": { "code": "OpieOP", "emoticon_set": 0, "id": 100590 }, "DoritosChip": { "code": "DoritosChip", "emoticon_set": 0, "id": 102242 }, "PJSugar": { "code": "PJSugar", "emoticon_set": 0, "id": 102556 }, "VoteYea": { "code": "VoteYea", "emoticon_set": 0, "id": 106293 }, "VoteNay": { "code": "VoteNay", "emoticon_set": 0, "id": 106294 }, "RuleFive": { "code": "RuleFive", "emoticon_set": 0, "id": 107030 }, "DxCat": { "code": "DxCat", "emoticon_set": 0, "id": 110734 }, "DrinkPurple": { "code": "DrinkPurple", "emoticon_set": 0, "id": 110785 }, "TinyFace": { "code": "TinyFace", "emoticon_set": 0, "id": 111119 }, "PicoMause": { "code": "PicoMause", "emoticon_set": 0, "id": 111300 }, "TheTarFu": { "code": "TheTarFu", "emoticon_set": 0, "id": 111351 }, "DatSheffy": { "code": "DatSheffy", "emoticon_set": 0, "id": 111700 }, "UnSane": { "code": "UnSane", "emoticon_set": 0, "id": 111792 }, "copyThis": { "code": "copyThis", "emoticon_set": 0, "id": 112288 }, "pastaThat": { "code": "pastaThat", "emoticon_set": 0, "id": 112289 }, "imGlitch": { "code": "imGlitch", "emoticon_set": 0, "id": 112290 }, "GivePLZ": { "code": "GivePLZ", "emoticon_set": 0, "id": 112291 }, "TakeNRG": { "code": "TakeNRG", "emoticon_set": 0, "id": 112292 }, "BlargNaut": { "code": "BlargNaut", "emoticon_set": 0, "id": 114738 }, "DogFace": { "code": "DogFace", "emoticon_set": 0, "id": 114835 }, "Jebaited": { "code": "Jebaited", "emoticon_set": 0, "id": 114836 }, "TooSpicy": { "code": "TooSpicy", "emoticon_set": 0, "id": 114846 }, "WTRuck": { "code": "WTRuck", "emoticon_set": 0, "id": 114847 }, "UncleNox": { "code": "UncleNox", "emoticon_set": 0, "id": 114856 }, "RaccAttack": { "code": "RaccAttack", "emoticon_set": 0, "id": 114870 }, "StrawBeary": { "code": "StrawBeary", "emoticon_set": 0, "id": 114876 }, "PrimeMe": { "code": "PrimeMe", "emoticon_set": 0, "id": 115075 }, "BrainSlug": { "code": "BrainSlug", "emoticon_set": 0, "id": 115233 }, "BatChest": { "code": "BatChest", "emoticon_set": 0, "id": 115234 }, "CurseLit": { "code": "CurseLit", "emoticon_set": 0, "id": 116625 }, "Poooound": { "code": "Poooound", "emoticon_set": 0, "id": 117484 }, "FreakinStinkin": { "code": "FreakinStinkin", "emoticon_set": 0, "id": 117701 }, "SuperVinlin": { "code": "SuperVinlin", "emoticon_set": 0, "id": 118772 }, "TriHard": { "code": "TriHard", "emoticon_set": 0, "id": 120232 }, "CoolStoryBob": { "code": "CoolStoryBob", "emoticon_set": 0, "id": 123171 }, "ItsBoshyTime": { "code": "ItsBoshyTime", "emoticon_set": 0, "id": 133468 }, "KAPOW": { "code": "KAPOW", "emoticon_set": 0, "id": 133537 }, "YouDontSay": { "code": "YouDontSay", "emoticon_set": 0, "id": 134254 }, "UWot": { "code": "UWot", "emoticon_set": 0, "id": 134255 }, "RlyTho": { "code": "RlyTho", "emoticon_set": 0, "id": 134256 }, "PartyTime": { "code": "PartyTime", "emoticon_set": 0, "id": 135393 }, "NinjaGrumpy": { "code": "NinjaGrumpy", "emoticon_set": 0, "id": 138325 }, "MVGame": { "code": "MVGame", "emoticon_set": 0, "id": 142140 }, "TBAngel": { "code": "TBAngel", "emoticon_set": 0, "id": 143490 }, "TheIlluminati": { "code": "TheIlluminati", "emoticon_set": 0, "id": 145315 }, "BlessRNG": { "code": "BlessRNG", "emoticon_set": 0, "id": 153556 }, "MorphinTime": { "code": "MorphinTime", "emoticon_set": 0, "id": 156787 }, "ThankEgg": { "code": "ThankEgg", "emoticon_set": 0, "id": 160392 }, "ArigatoNas": { "code": "ArigatoNas", "emoticon_set": 0, "id": 160393 }, "BegWan": { "code": "BegWan", "emoticon_set": 0, "id": 160394 }, "BigPhish": { "code": "BigPhish", "emoticon_set": 0, "id": 160395 }, "InuyoFace": { "code": "InuyoFace", "emoticon_set": 0, "id": 160396 }, "Kappu": { "code": "Kappu", "emoticon_set": 0, "id": 160397 }, "KonCha": { "code": "KonCha", "emoticon_set": 0, "id": 160400 }, "PunOko": { "code": "PunOko", "emoticon_set": 0, "id": 160401 }, "SabaPing": { "code": "SabaPing", "emoticon_set": 0, "id": 160402 }, "TearGlove": { "code": "TearGlove", "emoticon_set": 0, "id": 160403 }, "TehePelo": { "code": "TehePelo", "emoticon_set": 0, "id": 160404 }, "TwitchLit": { "code": "TwitchLit", "emoticon_set": 0, "id": 166263 }, "CarlSmile": { "code": "CarlSmile", "emoticon_set": 0, "id": 166266 }, "CrreamAwk": { "code": "CrreamAwk", "emoticon_set": 0, "id": 191313 }, "Squid1": { "code": "Squid1", "emoticon_set": 0, "id": 191762 }, "Squid2": { "code": "Squid2", "emoticon_set": 0, "id": 191763 }, "Squid3": { "code": "Squid3", "emoticon_set": 0, "id": 191764 }, "Squid4": { "code": "Squid4", "emoticon_set": 0, "id": 191767 }, "TwitchUnity": { "code": "TwitchUnity", "emoticon_set": 0, "id": 196892 }, "TPcrunchyroll": { "code": "TPcrunchyroll", "emoticon_set": 0, "id": 323914 }, "EntropyWins": { "code": "EntropyWins", "emoticon_set": 0, "id": 376765 }, "LUL": { "code": "LUL", "emoticon_set": 0, "id": 425618 }, "PowerUpR": { "code": "PowerUpR", "emoticon_set": 0, "id": 425671 }, "PowerUpL": { "code": "PowerUpL", "emoticon_set": 0, "id": 425688 }, "HSCheers": { "code": "HSCheers", "emoticon_set": 0, "id": 444572 }, "HSWP": { "code": "HSWP", "emoticon_set": 0, "id": 446979 }, "DarkMode": { "code": "DarkMode", "emoticon_set": 0, "id": 461298 }, "TwitchVotes": { "code": "TwitchVotes", "emoticon_set": 0, "id": 479745 }, "TPFufun": { "code": "TPFufun", "emoticon_set": 0, "id": 508650 }, "RedTeam": { "code": "RedTeam", "emoticon_set": 0, "id": 530888 }, "GreenTeam": { "code": "GreenTeam", "emoticon_set": 0, "id": 530890 }, "PurpleStar": { "code": "PurpleStar", "emoticon_set": 0, "id": 624501 }, "FBtouchdown": { "code": "FBtouchdown", "emoticon_set": 0, "id": 626795 }, "PopCorn": { "code": "PopCorn", "emoticon_set": 0, "id": 724216 }, "TombRaid": { "code": "TombRaid", "emoticon_set": 0, "id": 864205 }, "EarthDay": { "code": "EarthDay", "emoticon_set": 0, "id": 959018 }, "PartyHat": { "code": "PartyHat", "emoticon_set": 0, "id": 965738 }, "MercyWing1": { "code": "MercyWing1", "emoticon_set": 0, "id": 1003187 }, "MercyWing2": { "code": "MercyWing2", "emoticon_set": 0, "id": 1003189 }, "PinkMercy": { "code": "PinkMercy", "emoticon_set": 0, "id": 1003190 }, "BisexualPride": { "code": "BisexualPride", "emoticon_set": 0, "id": 1064987 }, "LesbianPride": { "code": "LesbianPride", "emoticon_set": 0, "id": 1064988 }, "GayPride": { "code": "GayPride", "emoticon_set": 0, "id": 1064991 }, "TransgenderPride": { "code": "TransgenderPride", "emoticon_set": 0, "id": 1064995 }, "AsexualPride": { "code": "AsexualPride", "emoticon_set": 0, "id": 1130348 }, "PansexualPride": { "code": "PansexualPride", "emoticon_set": 0, "id": 1130349 }, "TwitchRPG": { "code": "TwitchRPG", "emoticon_set": 0, "id": 1220086 }, "IntersexPride": { "code": "IntersexPride", "emoticon_set": 0, "id": 1221184 }, "MaxLOL": { "code": "MaxLOL", "emoticon_set": 0, "id": 1290325 }, "NonBinaryPride": { "code": "NonBinaryPride", "emoticon_set": 0, "id": 1297279 }, "GenderFluidPride": { "code": "GenderFluidPride", "emoticon_set": 0, "id": 1297281 }, "FBRun": { "code": "FBRun", "emoticon_set": 0, "id": 1441261 }, "FBPass": { "code": "FBPass", "emoticon_set": 0, "id": 1441271 }, "FBSpiral": { "code": "FBSpiral", "emoticon_set": 0, "id": 1441273 }, "FBBlock": { "code": "FBBlock", "emoticon_set": 0, "id": 1441276 }, "FBCatch": { "code": "FBCatch", "emoticon_set": 0, "id": 1441281 }, "FBChallenge": { "code": "FBChallenge", "emoticon_set": 0, "id": 1441285 }, "FBPenalty": { "code": "FBPenalty", "emoticon_set": 0, "id": 1441289 }, "PixelBob": { "code": "PixelBob", "emoticon_set": 0, "id": 1547903 }, "GunRun": { "code": "GunRun", "emoticon_set": 0, "id": 1584743 }, "HolidayCookie": { "code": "HolidayCookie", "emoticon_set": 0, "id": 1713813 }, "HolidayLog": { "code": "HolidayLog", "emoticon_set": 0, "id": 1713816 }, "HolidayOrnament": { "code": "HolidayOrnament", "emoticon_set": 0, "id": 1713818 }, "HolidayPresent": { "code": "HolidayPresent", "emoticon_set": 0, "id": 1713819 }, "HolidaySanta": { "code": "HolidaySanta", "emoticon_set": 0, "id": 1713822 }, "HolidayTree": { "code": "HolidayTree", "emoticon_set": 0, "id": 1713825 }, "SoonerLater": { "code": "SoonerLater", "emoticon_set": 0, "id": 2113050 }, "TwitchSings": { "code": "TwitchSings", "emoticon_set": 0, "id": 300116344 }, "SingsMic": { "code": "SingsMic", "emoticon_set": 0, "id": 300116349 }, "SingsNote": { "code": "SingsNote", "emoticon_set": 0, "id": 300116350 }, "PorscheWIN": { "code": "PorscheWIN", "emoticon_set": 0, "id": 300745158 }, "PartyPoro": { "code": "PartyPoro", "emoticon_set": 0, "id": 300949540 } };
    const bttvEmotes = [{"id":"54fa928f01e468494b85b54f","code":"PedoBear","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fa92ee01e468494b85b553","code":"RebeccaBlack","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fa8f1401e468494b85b537","code":":tf:","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fa8fce01e468494b85b53c","code":"CiGrip","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fa903b01e468494b85b53f","code":"DatSauce","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fa909b01e468494b85b542","code":"ForeverAlone","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fa90ba01e468494b85b543","code":"GabeN","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fa90f201e468494b85b545","code":"HailHelix","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fa913701e468494b85b546","code":"HerbPerve","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fa919901e468494b85b548","code":"iDog","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fa930801e468494b85b554","code":"rStrike","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fa932201e468494b85b555","code":"ShoopDaWhoop","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fa9cc901e468494b85b565","code":"SwedSwag","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fab45f633595ca4c713abc","code":"M&Mjc","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fab7d2633595ca4c713abf","code":"bttvNice","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fa934001e468494b85b556","code":"TopHam","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fa935601e468494b85b557","code":"TwaT","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fa99b601e468494b85b55d","code":"WatChuSay","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54faa50d01e468494b85b578","code":"Blackappa","channel":"night","restrictions":{"channels":[],"games":[],"emoticonSet":"night"},"imageType":"png"},{"id":"54faa52f01e468494b85b579","code":"DogeWitIt","channel":"night","restrictions":{"channels":[],"games":[],"emoticonSet":"night"},"imageType":"png"},{"id":"54faa4f101e468494b85b577","code":"BadAss","channel":"night","restrictions":{"channels":[],"games":[],"emoticonSet":"night"},"imageType":"png"},{"id":"54fb603201abde735115ddb5","code":"SavageJerky","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"5622aaef3286c42e57d8e4ab","code":"Zappa","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"566ca11a65dbbdab32ec0558","code":"tehPoleCat","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"566ca1a365dbbdab32ec055b","code":"AngelThump","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fbf11001abde735115de66","code":"Kaged","channel":"night","restrictions":{"channels":[],"games":[],"emoticonSet":"night"},"imageType":"png"},{"id":"54fbef6601abde735115de57","code":"HHydro","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fbefeb01abde735115de5b","code":"TaxiBro","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fbf00a01abde735115de5c","code":"BroBalt","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fbf02f01abde735115de5d","code":"ButterSauce","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fbf05a01abde735115de5e","code":"BaconEffect","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fbf07e01abde735115de5f","code":"SuchFraud","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fbf09c01abde735115de61","code":"CandianRage","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fbefc901abde735115de5a","code":"She'llBeRight","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"55028cd2135896936880fdd7","code":"D:","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"550352766f86a5b26c281ba2","code":"VisLaud","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"550b225fff8ecee922d2a3b2","code":"(chompy)","channel":"night","restrictions":{"channels":[],"games":[],"emoticonSet":"night"},"imageType":"gif"},{"id":"5514afe362e6bd0027aede8a","code":"SoSerious","channel":"night","restrictions":{"channels":[],"games":[],"emoticonSet":"night"},"imageType":"png"},{"id":"550b6b07ff8ecee922d2a3e7","code":"BatKappa","channel":"night","restrictions":{"channels":[],"games":[],"emoticonSet":"night"},"imageType":"png"},{"id":"550b344bff8ecee922d2a3c1","code":"KaRappa","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"55189a5062e6bd0027aee082","code":"YetiZ","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"552d2fc2236a1aa17a996c5b","code":"miniJulia","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"566ca00f65dbbdab32ec0544","code":"FishMoley","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"566ca02865dbbdab32ec0547","code":"Hhhehehe","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"566ca04265dbbdab32ec054a","code":"KKona","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"566ca09365dbbdab32ec0555","code":"PoleDoge","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"55288e390fa35376704a4c7a","code":"motnahP","channel":"night","restrictions":{"channels":[],"games":[],"emoticonSet":"night"},"imageType":"png"},{"id":"553b48a21f145f087fc15ca6","code":"sosGame","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"55471c2789d53f2d12781713","code":"CruW","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"555015b77676617e17dd2e8e","code":"RarePepe","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"54fbef8701abde735115de58","code":"iamsocal","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"555981336ba1901877765555","code":"haHAA","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"55b6524154eefd53777b2580","code":"FeelsBirthdayMan","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"55f324c47f08be9f0a63cce0","code":"RonSmug","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"560577560874de34757d2dc0","code":"KappaCool","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"566c9fc265dbbdab32ec053b","code":"FeelsBadMan","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"566c9eeb65dbbdab32ec052b","code":"BasedGod","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"566c9f3b65dbbdab32ec052e","code":"bUrself","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"566c9f6365dbbdab32ec0532","code":"ConcernDoge","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"566c9fde65dbbdab32ec053e","code":"FeelsGoodMan","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"566c9ff365dbbdab32ec0541","code":"FireSpeed","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"566ca06065dbbdab32ec054e","code":"NaM","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"566ca38765dbbdab32ec0560","code":"SourPls","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"gif"},{"id":"567b00c61ddbe1786688a633","code":"LuL","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"56901914991f200c34ffa656","code":"SaltyCorn","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"56d937f7216793c63ec140cb","code":"FCreep","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"56e9f494fff3cc5c35e5287e","code":"monkaS","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"56f5be00d48006ba34f530a4","code":"VapeNation","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"56fa09f18eff3b595e93ac26","code":"ariW","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"5709ab688eff3b595e93c595","code":"notsquishY","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"5733ff12e72c3c0814233e20","code":"FeelsAmazingMan","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"573d38b50ffbf6cc5cc38dc9","code":"DuckerZ","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"580e438942170bfd57189866","code":"FeelsPumpkinMan","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"59cf182fcbe2693d59d7bf46","code":"SqShy","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"},{"id":"58d2e73058d8950a875ad027","code":"Wowee","channel":null,"restrictions":{"channels":[],"games":[]},"imageType":"png"}];
    
    let globalId = 0;
    
    let emotes = {};
    let emotesRegex;
    
    const initEmotesPromise = (async () => {
        addVanillaEmotes();
        await addBttvEmotes(["worthlessvoid", "MrTommymxr", "BlatnoyTheBest", "KooriChi", "WeedTooDank", "fREAST", "MashJDW", "KingTheTurtle", "tehMorag", "uhavebadpc", "P3NTAZ", "Rooph1e", "rtainc", "NinjaChris77", "KKomrade", "hewooo", "nl_Kripp", "garych", "skinnedteen", "SarcasmDetected", "Revvlo", "LUUAP", "rynlikesfood", "Seremendal", "adew", "pheomnomnom", "dLited", "Damansnarf", "thiccboisinc", "Lheet", "numrii", "underflowR"]);
        console.log(`${Object.keys(emotes).length} emotes registered`);
        emotesRegex = buildEmotesRegex();
    })();
    
    initEmotesPromise.then(() => {
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
        
        [...document.getElementsByClassName("post-message__text")].forEach(applyEmotes);
    });
    
    function addVanillaEmotes() {
        for (const key in vanillaEmotes) {
            const emote = vanillaEmotes[key];
            emotes[emote.code] = {
                code: emote.code,
                id: emote.id,
                source: "vanilla",
            };
        }
    }
    
    async function addBttvEmotes(extraChannels) {
        bttvEmotes.forEach(emote => {
            emotes[emote.code] = {
                code: emote.code,
                id: emote.id,
                source: "BTTV",
            };
        });
        
        for (const channel of extraChannels) {
            const response = await fetch(`https://api.betterttv.net/2/channels/${channel}`);
            const data = await response.json();
            if (typeof data !== "undefined" && typeof data.emotes !== "undefined") {
                data.emotes.forEach(emote => {
                    emotes[emote.code] = {
                        code: emote.code,
                        id: emote.id,
                        source: "BTTV",
                    };
                });
            } else {
                console.log("Couldn't fetch BTTV channel", channel);
            }
        }
    }
    
    function loadEmoteImage(emoteIndex, emoteId) {
        const emote = emotes[emoteIndex];
        if (typeof emote === "undefined") return;
        
        if (typeof emote.urlPromise === "undefined") {
            console.log(emoteIndex, "Emote not loaded, downloading...");
            emote.urlPromise = downloadEmoteImage(emoteIndex, emoteId);
        }
        
        return emote.urlPromise;
    }

    async function downloadEmoteImage(emoteIndex, emoteId) {
        const emote = emotes[emoteIndex];
        
        let downloadUrl;
        switch (emote.source) {
            case "vanilla":
                downloadUrl = `https://static-cdn.jtvnw.net/emoticons/v1/${emoteId}/1.0`;
                break;
            case "BTTV":
                downloadUrl = `https://cors-anywhere.herokuapp.com/https://cdn.betterttv.net/emote/${emoteId}/1x`;
                break;
        }
        
        console.log(emoteIndex, "DOWNLOADING from " + downloadUrl);
        const response = await fetch(downloadUrl);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        
        console.log(emoteIndex, "Emote downloaded");
        if (typeof emote !== "undefined") {
            emote.urlPromise = { then: callback => callback(url) };
        }

        return url;
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
            instances.push({index: match.index, key: key, code: emote.code, id: emote.id});
        }
        
        return instances;
    }

    function applyEmotes(msgDiv) {
        const emotes = lookupEmotesInString(msgDiv.innerText);
        if (emotes.length == 0) {
            return;
        }

        let i = 0;
        let html = "";
        let emotesToApply = [];

        for (const emote of emotes) {
            html += msgDiv.innerText.slice(i, emote.index);
            html += `<img id="global-id-${globalId}" src="" title="${emote.key}"/>`;
            i = emote.index + emote.code.length;

            emotesToApply.push({ emote: emote, globalId: globalId });
            ++globalId;
        }

        html += msgDiv.innerText.substr(i);
        msgDiv.innerHTML = `<p>${html}</p>`;
        
        emotesToApply.forEach(obj => {
            const emote = obj.emote;
            const id = obj.globalId;
            
            loadEmoteImage(emote.key, emote.id).then(url => {
                const img = document.getElementById(`global-id-${id}`);
                img.setAttribute("src", url);
            });
        });
    }
})();
