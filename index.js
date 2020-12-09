var answer;
var answerBtn; // 儲存正確答案的按鈕
var points = 0;
var dict=[
    {
        "zh": "一個",
        "en": "a（an）"
    },
    {
        "zh": "一些",
        "en": "a few"
    },
    {
        "zh": "一些",
        "en": "a little"
    },
    {
        "zh": "很多",
        "en": "a lot"
    },
    {
        "zh": "能夠",
        "en": "able"
    },
    {
        "zh": "大約",
        "en": "about"
    },
    {
        "zh": "於..之上",
        "en": "above"
    },
    {
        "zh": "害怕",
        "en": "afraid"
    },
    {
        "zh": "在..之後",
        "en": "after"
    },
    {
        "zh": "下午",
        "en": "afternoon"
    },
    {
        "zh": "再一次",
        "en": "again"
    },
    {
        "zh": "年紀",
        "en": "age"
    },
    {
        "zh": "以前",
        "en": "ago"
    },
    {
        "zh": "同意",
        "en": "agree"
    },
    {
        "zh": "空氣",
        "en": "air"
    },
    {
        "zh": "飛機",
        "en": "airplane"
    },
    {
        "zh": "飛機場",
        "en": "airport"
    },
    {
        "zh": "全部",
        "en": "all"
    },
    {
        "zh": "幾乎",
        "en": "almost"
    },
    {
        "zh": "沿著",
        "en": "along"
    },
    {
        "zh": "已經",
        "en": "already"
    },
    {
        "zh": "也",
        "en": "also"
    },
    {
        "zh": "總是",
        "en": "always"
    },
    {
        "zh": "上午",
        "en": "a.m."
    },
    {
        "zh": "美國",
        "en": "America"
    },
    {
        "zh": "美國人",
        "en": "American"
    },
    {
        "zh": "和",
        "en": "and"
    },
    {
        "zh": "生氣",
        "en": "angry"
    },
    {
        "zh": "動物",
        "en": "animal"
    },
    {
        "zh": "另一個",
        "en": "another"
    },
    {
        "zh": "回答",
        "en": "answer"
    },
    {
        "zh": "任何",
        "en": "any"
    },
    {
        "zh": "任何人",
        "en": "anyone"
    },
    {
        "zh": "任何東西",
        "en": "anything"
    },
    {
        "zh": "公寓",
        "en": "apartment"
    },
    {
        "zh": "出現",
        "en": "appear"
    },
    {
        "zh": "蘋果",
        "en": "apple"
    },
    {
        "zh": "四月",
        "en": "April"
    },
    {
        "zh": "手臂",
        "en": "arm"
    },
    {
        "zh": "環繞",
        "en": "around"
    },
    {
        "zh": "到達",
        "en": "arrive"
    },
    {
        "zh": "藝術",
        "en": "art"
    },
    {
        "zh": "如同",
        "en": "as"
    },
    {
        "zh": "問、要求",
        "en": "ask"
    },
    {
        "zh": "在..",
        "en": "at"
    },
    {
        "zh": "八月",
        "en": "August"
    },
    {
        "zh": "伯母",
        "en": "aunt"
    },
    {
        "zh": "秋天",
        "en": "autumn"
    },
    {
        "zh": "遠離",
        "en": "away"
    },
    {
        "zh": "嬰兒",
        "en": "baby"
    },
    {
        "zh": "後面",
        "en": "back"
    },
    {
        "zh": "壞的",
        "en": "bad"
    },
    {
        "zh": "袋子",
        "en": "bag"
    },
    {
        "zh": "麵包店",
        "en": "bakery"
    },
    {
        "zh": "球",
        "en": "ball"
    },
    {
        "zh": "香蕉",
        "en": "banana"
    },
    {
        "zh": "樂團",
        "en": "band"
    },
    {
        "zh": "銀行",
        "en": "bank"
    },
    {
        "zh": "棒球",
        "en": "baseball"
    },
    {
        "zh": "籃子",
        "en": "basket"
    },
    {
        "zh": "籃球",
        "en": "basketball"
    },
    {
        "zh": "沐浴",
        "en": "bath"
    },
    {
        "zh": "浴室",
        "en": "bathroom"
    },
    {
        "zh": "是",
        "en": "be、am、is"
    },
    {
        "zh": "海邊",
        "en": "beach"
    },
    {
        "zh": "熊",
        "en": "bear"
    },
    {
        "zh": "美麗的",
        "en": "beautiful"
    },
    {
        "zh": "因為",
        "en": "because"
    },
    {
        "zh": "變成",
        "en": "become"
    },
    {
        "zh": "床",
        "en": "bed"
    },
    {
        "zh": "臥室",
        "en": "bedroom"
    },
    {
        "zh": "蜜蜂",
        "en": "bee"
    },
    {
        "zh": "牛肉",
        "en": "beef"
    },
    {
        "zh": "在..之前",
        "en": "before"
    },
    {
        "zh": "開始",
        "en": "begin"
    },
    {
        "zh": "在後面",
        "en": "behind"
    },
    {
        "zh": "相信",
        "en": "believe"
    },
    {
        "zh": "鈴",
        "en": "bell"
    },
    {
        "zh": "屬於",
        "en": "belong"
    },
    {
        "zh": "在..下面",
        "en": "below"
    },
    {
        "zh": "皮帶",
        "en": "belt"
    },
    {
        "zh": "在旁邊",
        "en": "beside"
    },
    {
        "zh": "在..之間",
        "en": "between"
    },
    {
        "zh": "腳踏車",
        "en": "bicycle"
    },
    {
        "zh": "大的",
        "en": "big"
    },
    {
        "zh": "鳥",
        "en": "bird"
    },
    {
        "zh": "生日",
        "en": "birthday"
    },
    {
        "zh": "咬",
        "en": "bite"
    },
    {
        "zh": "黑色",
        "en": "black"
    },
    {
        "zh": "黑板",
        "en": "blackboard"
    },
    {
        "zh": "盲的",
        "en": "blind"
    },
    {
        "zh": "街區",
        "en": "block"
    },
    {
        "zh": "吹、打擊",
        "en": "blow"
    },
    {
        "zh": "藍色",
        "en": "blue"
    },
    {
        "zh": "船",
        "en": "boat"
    },
    {
        "zh": "身體",
        "en": "body"
    },
    {
        "zh": "書",
        "en": "book"
    },
    {
        "zh": "書店",
        "en": "bookstore"
    },
    {
        "zh": "感到無聊",
        "en": "bored"
    },
    {
        "zh": "無聊的",
        "en": "boring"
    },
    {
        "zh": "出生",
        "en": "born"
    },
    {
        "zh": "借入",
        "en": "borrow"
    },
    {
        "zh": "老闆",
        "en": "boss"
    },
    {
        "zh": "兩者皆",
        "en": "both"
    },
    {
        "zh": "瓶子",
        "en": "bottle"
    },
    {
        "zh": "底部",
        "en": "bottom"
    },
    {
        "zh": "碗",
        "en": "bowl"
    },
    {
        "zh": "盒子",
        "en": "box"
    },
    {
        "zh": "男孩",
        "en": "boy"
    },
    {
        "zh": "麵包",
        "en": "bread"
    },
    {
        "zh": "打破",
        "en": "break"
    },
    {
        "zh": "早餐",
        "en": "breakfast"
    },
    {
        "zh": "橋",
        "en": "bridge"
    },
    {
        "zh": "明亮的",
        "en": "bright"
    },
    {
        "zh": "帶來",
        "en": "bring"
    },
    {
        "zh": "兄弟",
        "en": "brother"
    },
    {
        "zh": "棕色",
        "en": "brown"
    },
    {
        "zh": "刷子",
        "en": "brush"
    },
    {
        "zh": "建造",
        "en": "build"
    },
    {
        "zh": "燃燒",
        "en": "burn"
    },
    {
        "zh": "公車",
        "en": "bus"
    },
    {
        "zh": "生意",
        "en": "business"
    },
    {
        "zh": "生意人",
        "en": "businessman"
    },
    {
        "zh": "忙碌",
        "en": "busy"
    },
    {
        "zh": "但是",
        "en": "but"
    },
    {
        "zh": "奶油",
        "en": "butter"
    },
    {
        "zh": "買",
        "en": "buy"
    },
    {
        "zh": "經、由",
        "en": "by"
    },
    {
        "zh": "蛋糕",
        "en": "cake"
    },
    {
        "zh": "呼叫",
        "en": "call"
    },
    {
        "zh": "照相機",
        "en": "camera"
    },
    {
        "zh": "露營",
        "en": "camp"
    },
    {
        "zh": "能夠",
        "en": "can"
    },
    {
        "zh": "糖果",
        "en": "candy"
    },
    {
        "zh": "無邊便帽",
        "en": "cap"
    },
    {
        "zh": "車子",
        "en": "car"
    },
    {
        "zh": "卡片",
        "en": "card"
    },
    {
        "zh": "照料",
        "en": "care"
    },
    {
        "zh": "小心",
        "en": "careful"
    },
    {
        "zh": "攜帶",
        "en": "carry"
    },
    {
        "zh": "情形",
        "en": "case"
    },
    {
        "zh": "貓",
        "en": "cat"
    },
    {
        "zh": "捕捉",
        "en": "catch"
    },
    {
        "zh": "慶祝",
        "en": "celebrate"
    },
    {
        "zh": "行動電話",
        "en": "cell phone"
    },
    {
        "zh": "分（錢）",
        "en": "cent"
    },
    {
        "zh": "中心",
        "en": "center"
    },
    {
        "zh": "椅子",
        "en": "chair"
    },
    {
        "zh": "粉筆",
        "en": "chalk"
    },
    {
        "zh": "機會",
        "en": "chance"
    },
    {
        "zh": "改變",
        "en": "change"
    },
    {
        "zh": "便宜",
        "en": "cheap"
    },
    {
        "zh": "欺騙",
        "en": "cheat"
    },
    {
        "zh": "檢查",
        "en": "check"
    },
    {
        "zh": "愉快",
        "en": "cheer"
    },
    {
        "zh": "乾酪",
        "en": "cheese"
    },
    {
        "zh": "雞",
        "en": "chicken"
    },
    {
        "zh": "小孩",
        "en": "child"
    },
    {
        "zh": "中國",
        "en": "China"
    },
    {
        "zh": "巧克力",
        "en": "chocolate"
    },
    {
        "zh": "筷子",
        "en": "chopsticks"
    },
    {
        "zh": "聖誕節",
        "en": "Christmas"
    },
    {
        "zh": "教堂",
        "en": "church"
    },
    {
        "zh": "圓",
        "en": "circle"
    },
    {
        "zh": "城市",
        "en": "city"
    },
    {
        "zh": "班級",
        "en": "class"
    },
    {
        "zh": "同學",
        "en": "classmate"
    },
    {
        "zh": "教室",
        "en": "classroom"
    },
    {
        "zh": "乾淨",
        "en": "clean"
    },
    {
        "zh": "清楚的",
        "en": "clear"
    },
    {
        "zh": "攀爬",
        "en": "climb"
    },
    {
        "zh": "時鐘",
        "en": "clock"
    },
    {
        "zh": "關上",
        "en": "close"
    },
    {
        "zh": "衣服",
        "en": "clothes"
    },
    {
        "zh": "多雲的",
        "en": "cloudy"
    },
    {
        "zh": "俱樂部",
        "en": "club"
    },
    {
        "zh": "大衣",
        "en": "coat"
    },
    {
        "zh": "咖啡",
        "en": "coffee"
    },
    {
        "zh": "可樂",
        "en": "Coke"
    },
    {
        "zh": "寒冷的",
        "en": "cold"
    },
    {
        "zh": "收集",
        "en": "collect"
    },
    {
        "zh": "顏色",
        "en": "color"
    },
    {
        "zh": "來",
        "en": "come"
    },
    {
        "zh": "舒適的",
        "en": "comfortable"
    },
    {
        "zh": "滑稽的",
        "en": "comic"
    },
    {
        "zh": "共有的",
        "en": "common"
    },
    {
        "zh": "電腦",
        "en": "computer"
    },
    {
        "zh": "方便的",
        "en": "convenient"
    },
    {
        "zh": "煮飯",
        "en": "cook"
    },
    {
        "zh": "餅乾",
        "en": "cookie"
    },
    {
        "zh": "涼爽的",
        "en": "cool"
    },
    {
        "zh": "抄寫",
        "en": "copy"
    },
    {
        "zh": "正確的",
        "en": "correct"
    },
    {
        "zh": "價值",
        "en": "cost"
    },
    {
        "zh": "長椅",
        "en": "couch"
    },
    {
        "zh": "計算",
        "en": "count"
    },
    {
        "zh": "鄉下",
        "en": "country"
    },
    {
        "zh": "堂兄弟妹",
        "en": "cousin"
    },
    {
        "zh": "掩護",
        "en": "cover"
    },
    {
        "zh": "母牛",
        "en": "cow"
    },
    {
        "zh": "瘋狂",
        "en": "crazy"
    },
    {
        "zh": "越過",
        "en": "cross"
    },
    {
        "zh": "哭",
        "en": "cry"
    },
    {
        "zh": "杯子",
        "en": "cup"
    },
    {
        "zh": "切、割",
        "en": "cut"
    },
    {
        "zh": "可愛的",
        "en": "cute"
    },
    {
        "zh": "跳舞",
        "en": "dance"
    },
    {
        "zh": "危險的",
        "en": "dangerous"
    },
    {
        "zh": "黑暗",
        "en": "dark"
    },
    {
        "zh": "日期",
        "en": "date"
    },
    {
        "zh": "女兒",
        "en": "daughter"
    },
    {
        "zh": "日子",
        "en": "day"
    },
    {
        "zh": "死亡",
        "en": "dead"
    },
    {
        "zh": "親愛的",
        "en": "dear"
    },
    {
        "zh": "十二月",
        "en": "December"
    },
    {
        "zh": "決定",
        "en": "decide"
    },
    {
        "zh": "美味的",
        "en": "delicious"
    },
    {
        "zh": "百貨公司",
        "en": "department store"
    },
    {
        "zh": "書桌",
        "en": "desk"
    },
    {
        "zh": "字典",
        "en": "dictionary"
    },
    {
        "zh": "死",
        "en": "die"
    },
    {
        "zh": "不同的",
        "en": "different"
    },
    {
        "zh": "困難的",
        "en": "difficult"
    },
    {
        "zh": "挖",
        "en": "dig"
    },
    {
        "zh": "飯廳",
        "en": "dining room"
    },
    {
        "zh": "晚餐",
        "en": "dinner"
    },
    {
        "zh": "骯髒",
        "en": "dirty"
    },
    {
        "zh": "盤子",
        "en": "dish"
    },
    {
        "zh": "做",
        "en": "do、does"
    },
    {
        "zh": "醫生",
        "en": "doctor (Dr.)"
    },
    {
        "zh": "國民小學",
        "en": "elementary school "
    },
    {
        "zh": "狗",
        "en": "dog"
    },
    {
        "zh": "洋娃娃",
        "en": "doll"
    },
    {
        "zh": "元",
        "en": "dollar"
    },
    {
        "zh": "門",
        "en": "door"
    },
    {
        "zh": "向下",
        "en": "down"
    },
    {
        "zh": "打",
        "en": "dozen"
    },
    {
        "zh": "畫圖",
        "en": "draw"
    },
    {
        "zh": "夢想",
        "en": "dream"
    },
    {
        "zh": "禮服",
        "en": "dress"
    },
    {
        "zh": "喝、飲料",
        "en": "drink"
    },
    {
        "zh": "開車",
        "en": "drive"
    },
    {
        "zh": "司機",
        "en": "driver"
    },
    {
        "zh": "落下",
        "en": "drop"
    },
    {
        "zh": "乾的",
        "en": "dry"
    },
    {
        "zh": "在..期間",
        "en": "during"
    },
    {
        "zh": "每一",
        "en": "each"
    },
    {
        "zh": "耳朵",
        "en": "ear"
    },
    {
        "zh": "早",
        "en": "early"
    },
    {
        "zh": "地球",
        "en": "earth"
    },
    {
        "zh": "東方",
        "en": "east"
    },
    {
        "zh": "容易",
        "en": "easy"
    },
    {
        "zh": "吃",
        "en": "eat"
    },
    {
        "zh": "蛋",
        "en": "egg"
    },
    {
        "zh": "八",
        "en": "eight"
    },
    {
        "zh": "十八",
        "en": "eighteen"
    },
    {
        "zh": "第八",
        "en": "eighth"
    },
    {
        "zh": "八十",
        "en": "eighty"
    },
    {
        "zh": "也不",
        "en": "either"
    },
    {
        "zh": "大象",
        "en": "elephant"
    },
    {
        "zh": "十一",
        "en": "eleven"
    },
    {
        "zh": "其它",
        "en": "else"
    },
    {
        "zh": "電子郵件",
        "en": "e-mail"
    },
    {
        "zh": "結束",
        "en": "end"
    },
    {
        "zh": "英文",
        "en": "English"
    },
    {
        "zh": "享受",
        "en": "enjoy"
    },
    {
        "zh": "足夠",
        "en": "enough"
    },
    {
        "zh": "進入",
        "en": "enter"
    },
    {
        "zh": "橡皮擦",
        "en": "eraser"
    },
    {
        "zh": "前夕",
        "en": "eve"
    },
    {
        "zh": "甚至",
        "en": "even"
    },
    {
        "zh": "晚上",
        "en": "evening"
    },
    {
        "zh": "曾經",
        "en": "ever"
    },
    {
        "zh": "每一",
        "en": "every"
    },
    {
        "zh": "每一人",
        "en": "everyone"
    },
    {
        "zh": "每件事物",
        "en": "everything"
    },
    {
        "zh": "例子",
        "en": "example"
    },
    {
        "zh": "優良的",
        "en": "excellent"
    },
    {
        "zh": "除了",
        "en": "except"
    },
    {
        "zh": "感到興奮",
        "en": "excited"
    },
    {
        "zh": "刺激的",
        "en": "exciting"
    },
    {
        "zh": "藉口",
        "en": "excuse"
    },
    {
        "zh": "運動",
        "en": "exercise"
    },
    {
        "zh": "昂貴",
        "en": "expensive"
    },
    {
        "zh": "經驗",
        "en": "experience"
    },
    {
        "zh": "眼睛",
        "en": "eye"
    },
    {
        "zh": "臉",
        "en": "face"
    },
    {
        "zh": "事實",
        "en": "fact"
    },
    {
        "zh": "工廠",
        "en": "factory"
    },
    {
        "zh": "落下",
        "en": "fall"
    },
    {
        "zh": "家庭",
        "en": "family"
    },
    {
        "zh": "著名的",
        "en": "famous"
    },
    {
        "zh": "迷、扇子",
        "en": "fan"
    },
    {
        "zh": "農田",
        "en": "farm"
    },
    {
        "zh": "農夫",
        "en": "farmer"
    },
    {
        "zh": "快的",
        "en": "fast"
    },
    {
        "zh": "胖",
        "en": "fat"
    },
    {
        "zh": "父親",
        "en": "father、dad"
    },
    {
        "zh": "喜愛的",
        "en": "favorite"
    },
    {
        "zh": "二月",
        "en": "February"
    },
    {
        "zh": "感覺",
        "en": "feel"
    },
    {
        "zh": "節日的",
        "en": "festival"
    },
    {
        "zh": "很少",
        "en": "few"
    },
    {
        "zh": "十五",
        "en": "fifteen"
    },
    {
        "zh": "第五",
        "en": "fifth"
    },
    {
        "zh": "五十",
        "en": "fifty"
    },
    {
        "zh": "填充",
        "en": "fill"
    },
    {
        "zh": "最後",
        "en": "finally"
    },
    {
        "zh": "發現",
        "en": "find"
    },
    {
        "zh": "好的",
        "en": "fine"
    },
    {
        "zh": "手指",
        "en": "finger"
    },
    {
        "zh": "完成",
        "en": "finish"
    },
    {
        "zh": "火",
        "en": "fire"
    },
    {
        "zh": "第一",
        "en": "first"
    },
    {
        "zh": "釣魚",
        "en": "fish"
    },
    {
        "zh": "漁夫",
        "en": "fisherman"
    },
    {
        "zh": "五",
        "en": "five"
    },
    {
        "zh": "修理",
        "en": "fix"
    },
    {
        "zh": "地板",
        "en": "floor"
    },
    {
        "zh": "花",
        "en": "flower"
    },
    {
        "zh": "飛",
        "en": "fly"
    },
    {
        "zh": "跟隨",
        "en": "follow"
    },
    {
        "zh": "食物",
        "en": "food"
    },
    {
        "zh": "腳",
        "en": "foot"
    },
    {
        "zh": "為了..",
        "en": "for"
    },
    {
        "zh": "外國的",
        "en": "foreign"
    },
    {
        "zh": "外國人",
        "en": "foreigner"
    },
    {
        "zh": "忘記",
        "en": "forget"
    },
    {
        "zh": "叉子",
        "en": "fork"
    },
    {
        "zh": "四十",
        "en": "forty"
    },
    {
        "zh": "四",
        "en": "four"
    },
    {
        "zh": "十四",
        "en": "fourteen"
    },
    {
        "zh": "第四",
        "en": "fourth"
    },
    {
        "zh": "自由的",
        "en": "free"
    },
    {
        "zh": "新鮮",
        "en": "fresh"
    },
    {
        "zh": "星期五",
        "en": "Friday"
    },
    {
        "zh": "朋友",
        "en": "friend"
    },
    {
        "zh": "友善的",
        "en": "friendly"
    },
    {
        "zh": "從…",
        "en": "from"
    },
    {
        "zh": "前面",
        "en": "front"
    },
    {
        "zh": "水果",
        "en": "fruit"
    },
    {
        "zh": "滿的",
        "en": "full"
    },
    {
        "zh": "樂趣",
        "en": "fun"
    },
    {
        "zh": "可笑的",
        "en": "funny"
    },
    {
        "zh": "未來",
        "en": "future"
    },
    {
        "zh": "遊戲",
        "en": "game"
    },
    {
        "zh": "垃圾",
        "en": "garbage"
    },
    {
        "zh": "花園",
        "en": "garden"
    },
    {
        "zh": "瓦斯",
        "en": "gas"
    },
    {
        "zh": "得到",
        "en": "get"
    },
    {
        "zh": "禮物",
        "en": "gift"
    },
    {
        "zh": "女孩",
        "en": "girl"
    },
    {
        "zh": "給與",
        "en": "give"
    },
    {
        "zh": "高興的",
        "en": "glad"
    },
    {
        "zh": "玻璃",
        "en": "glass"
    },
    {
        "zh": "手套",
        "en": "glove"
    },
    {
        "zh": "去",
        "en": "go"
    },
    {
        "zh": "山羊",
        "en": "goat"
    },
    {
        "zh": "好的",
        "en": "good"
    },
    {
        "zh": "再見",
        "en": "good-bye"
    },
    {
        "zh": "分數",
        "en": "grade"
    },
    {
        "zh": "祖父",
        "en": "grandfather"
    },
    {
        "zh": "祖母",
        "en": "grandmother"
    },
    {
        "zh": "草地",
        "en": "grass"
    },
    {
        "zh": "棒的",
        "en": "great"
    },
    {
        "zh": "祖母",
        "en": "grandma"
    },
    {
        "zh": "祖父",
        "en": "grandpa"
    },
    {
        "zh": "灰色",
        "en": "gray"
    },
    {
        "zh": "綠色",
        "en": "green"
    },
    {
        "zh": "地面",
        "en": "ground"
    },
    {
        "zh": "團體",
        "en": "group"
    },
    {
        "zh": "生長",
        "en": "grow"
    },
    {
        "zh": "猜測",
        "en": "guess"
    },
    {
        "zh": "習慣",
        "en": "habit"
    },
    {
        "zh": "頭髮",
        "en": "hair"
    },
    {
        "zh": "一半",
        "en": "half"
    },
    {
        "zh": "火腿",
        "en": "ham"
    },
    {
        "zh": "漢堡",
        "en": "hamburger"
    },
    {
        "zh": "手",
        "en": "hand"
    },
    {
        "zh": "英俊的",
        "en": "handsome"
    },
    {
        "zh": "發生",
        "en": "happen"
    },
    {
        "zh": "快樂",
        "en": "happy"
    },
    {
        "zh": "難的",
        "en": "hard"
    },
    {
        "zh": "苦幹的",
        "en": "hard-working"
    },
    {
        "zh": "帽子",
        "en": "hat"
    },
    {
        "zh": "憎恨",
        "en": "hate"
    },
    {
        "zh": "有",
        "en": "have、has"
    },
    {
        "zh": "他、他、他的、他自己",
        "en": "he、him"
    },
    {
        "zh": "頭",
        "en": "head"
    },
    {
        "zh": "頭痛",
        "en": "headache"
    },
    {
        "zh": "健康",
        "en": "health"
    },
    {
        "zh": "他、他、他的、他自己",
        "en": "his、himself"
    },
    {
        "zh": "健康的",
        "en": "healthy"
    },
    {
        "zh": "聽到",
        "en": "hear"
    },
    {
        "zh": "心",
        "en": "heart"
    },
    {
        "zh": "熱力",
        "en": "heat"
    },
    {
        "zh": "重的",
        "en": "heavy"
    },
    {
        "zh": "嗨",
        "en": "hello"
    },
    {
        "zh": "幫忙",
        "en": "help"
    },
    {
        "zh": "有幫助的",
        "en": "helpful"
    },
    {
        "zh": "這裡",
        "en": "here"
    },
    {
        "zh": "嗨",
        "en": "hi"
    },
    {
        "zh": "隱藏",
        "en": "hide"
    },
    {
        "zh": "高的",
        "en": "high"
    },
    {
        "zh": "小山",
        "en": "hill"
    },
    {
        "zh": "歷史",
        "en": "history"
    },
    {
        "zh": "打擊",
        "en": "hit"
    },
    {
        "zh": "嗜好",
        "en": "hobby"
    },
    {
        "zh": "握住",
        "en": "hold"
    },
    {
        "zh": "假日",
        "en": "holiday"
    },
    {
        "zh": "家",
        "en": "home"
    },
    {
        "zh": "家庭作業",
        "en": "homework"
    },
    {
        "zh": "誠實",
        "en": "honest"
    },
    {
        "zh": "希望",
        "en": "hope"
    },
    {
        "zh": "馬",
        "en": "horse"
    },
    {
        "zh": "醫院",
        "en": "hospital"
    },
    {
        "zh": "炎熱",
        "en": "hot"
    },
    {
        "zh": "熱狗",
        "en": "hot dog"
    },
    {
        "zh": "旅館",
        "en": "hotel"
    },
    {
        "zh": "小時",
        "en": "hour"
    },
    {
        "zh": "房子",
        "en": "house"
    },
    {
        "zh": "如何",
        "en": "how"
    },
    {
        "zh": "然而",
        "en": "however"
    },
    {
        "zh": "百",
        "en": "hundred"
    },
    {
        "zh": "飢餓",
        "en": "hungry"
    },
    {
        "zh": "匆忙",
        "en": "hurry"
    },
    {
        "zh": "受傷",
        "en": "hurt"
    },
    {
        "zh": "丈夫",
        "en": "husband"
    },
    {
        "zh": "我、我的、我自己",
        "en": "I、me、my"
    },
    {
        "zh": "冰",
        "en": "ice"
    },
    {
        "zh": "冰淇淋",
        "en": "ice cream"
    },
    {
        "zh": "主意",
        "en": "idea"
    },
    {
        "zh": "假如",
        "en": "if"
    },
    {
        "zh": "重要的",
        "en": "important"
    },
    {
        "zh": "在..裡面",
        "en": "in"
    },
    {
        "zh": "內部",
        "en": "inside"
    },
    {
        "zh": "興趣",
        "en": "interest"
    },
    {
        "zh": "感興趣的",
        "en": "interested"
    },
    {
        "zh": "有趣的",
        "en": "interesting"
    },
    {
        "zh": "網際網路",
        "en": "Internet"
    },
    {
        "zh": "進入",
        "en": "into"
    },
    {
        "zh": "島",
        "en": "island"
    },
    {
        "zh": "它、它的它自己",
        "en": "it、its、itself"
    },
    {
        "zh": "夾克",
        "en": "jacket"
    },
    {
        "zh": "一月",
        "en": "January"
    },
    {
        "zh": "牛仔褲",
        "en": "jeans"
    },
    {
        "zh": "工作",
        "en": "job"
    },
    {
        "zh": "慢跑",
        "en": "jog"
    },
    {
        "zh": "參加",
        "en": "join"
    },
    {
        "zh": "歡樂",
        "en": "joy"
    },
    {
        "zh": "果汁",
        "en": "juice"
    },
    {
        "zh": "七月",
        "en": "July"
    },
    {
        "zh": "跳躍",
        "en": "jump"
    },
    {
        "zh": "六月",
        "en": "June"
    },
    {
        "zh": "國民中學",
        "en": "junior high school 國中"
    },
    {
        "zh": "剛剛",
        "en": "just"
    },
    {
        "zh": "保持",
        "en": "keep"
    },
    {
        "zh": "鑰匙",
        "en": "key"
    },
    {
        "zh": "踢",
        "en": "kick"
    },
    {
        "zh": "小孩",
        "en": "kid"
    },
    {
        "zh": "殺",
        "en": "kill"
    },
    {
        "zh": "公斤",
        "en": "kilogram"
    },
    {
        "zh": "類型",
        "en": "kind"
    },
    {
        "zh": "國王",
        "en": "king"
    },
    {
        "zh": "吻",
        "en": "kiss"
    },
    {
        "zh": "廚房",
        "en": "kitchen"
    },
    {
        "zh": "風箏",
        "en": "kite"
    },
    {
        "zh": "膝",
        "en": "knee"
    },
    {
        "zh": "刀",
        "en": "knife"
    },
    {
        "zh": "敲",
        "en": "knock"
    },
    {
        "zh": "知道",
        "en": "know"
    },
    {
        "zh": "知識",
        "en": "knowledge"
    },
    {
        "zh": "湖",
        "en": "lake"
    },
    {
        "zh": "燈",
        "en": "lamp"
    },
    {
        "zh": "土地",
        "en": "land"
    },
    {
        "zh": "語言",
        "en": "language"
    },
    {
        "zh": "大的",
        "en": "large"
    },
    {
        "zh": "最後的",
        "en": "last"
    },
    {
        "zh": "遲；晚",
        "en": "late"
    },
    {
        "zh": "稍後",
        "en": "later"
    },
    {
        "zh": "笑",
        "en": "laugh"
    },
    {
        "zh": "懶惰的",
        "en": "lazy"
    },
    {
        "zh": "引導",
        "en": "lead"
    },
    {
        "zh": "領袖",
        "en": "leader"
    },
    {
        "zh": "學習",
        "en": "learn"
    },
    {
        "zh": "最少",
        "en": "least"
    },
    {
        "zh": "離開",
        "en": "leave"
    },
    {
        "zh": "左邊",
        "en": "left"
    },
    {
        "zh": "腿",
        "en": "leg"
    },
    {
        "zh": "檸檬",
        "en": "lemon"
    },
    {
        "zh": "借出",
        "en": "lend"
    },
    {
        "zh": "較少",
        "en": "less"
    },
    {
        "zh": "課",
        "en": "lesson"
    },
    {
        "zh": "讓",
        "en": "let"
    },
    {
        "zh": "信、字母",
        "en": "letter"
    },
    {
        "zh": "圖書館",
        "en": "library"
    },
    {
        "zh": "說謊",
        "en": "lie"
    },
    {
        "zh": "生活",
        "en": "life"
    },
    {
        "zh": "光",
        "en": "light"
    },
    {
        "zh": "喜歡",
        "en": "like"
    },
    {
        "zh": "線",
        "en": "line"
    },
    {
        "zh": "獅子",
        "en": "lion"
    },
    {
        "zh": "唇",
        "en": "lip"
    },
    {
        "zh": "目錄",
        "en": "list"
    },
    {
        "zh": "傾聽",
        "en": "listen"
    },
    {
        "zh": "一點點",
        "en": "little"
    },
    {
        "zh": "居住",
        "en": "live"
    },
    {
        "zh": "客廳",
        "en": "living room"
    },
    {
        "zh": "孤獨地",
        "en": "lonely"
    },
    {
        "zh": "長的",
        "en": "long"
    },
    {
        "zh": "看",
        "en": "look"
    },
    {
        "zh": "失去",
        "en": "lose"
    },
    {
        "zh": "大聲的",
        "en": "loud"
    },
    {
        "zh": "愛",
        "en": "love"
    },
    {
        "zh": "低的",
        "en": "low"
    },
    {
        "zh": "幸運的",
        "en": "lucky"
    },
    {
        "zh": "午餐",
        "en": "lunch"
    },
    {
        "zh": "機器",
        "en": "machine"
    },
    {
        "zh": "魔術",
        "en": "magic"
    },
    {
        "zh": "郵件",
        "en": "mail"
    },
    {
        "zh": "郵差",
        "en": "mailman"
    },
    {
        "zh": "使",
        "en": "make"
    },
    {
        "zh": "男人",
        "en": "man"
    },
    {
        "zh": "很多",
        "en": "many"
    },
    {
        "zh": "地圖",
        "en": "map"
    },
    {
        "zh": "March",
        "en": "三月"
    },
    {
        "zh": "標誌",
        "en": "mark"
    },
    {
        "zh": "市場",
        "en": "market"
    },
    {
        "zh": "結婚",
        "en": "married"
    },
    {
        "zh": "數學",
        "en": "math"
    },
    {
        "zh": "事件",
        "en": "matter"
    },
    {
        "zh": "可能",
        "en": "may、might"
    },
    {
        "zh": "五月",
        "en": "May"
    },
    {
        "zh": "也許",
        "en": "maybe"
    },
    {
        "zh": "一餐",
        "en": "meal"
    },
    {
        "zh": "意指",
        "en": "mean"
    },
    {
        "zh": "肉",
        "en": "meat"
    },
    {
        "zh": "藥",
        "en": "medicine"
    },
    {
        "zh": "中等的",
        "en": "medium"
    },
    {
        "zh": "會面",
        "en": "meet"
    },
    {
        "zh": "會議",
        "en": "meeting"
    },
    {
        "zh": "菜單",
        "en": "menu"
    },
    {
        "zh": "哩",
        "en": "mile"
    },
    {
        "zh": "牛奶",
        "en": "milk"
    },
    {
        "zh": "百萬",
        "en": "million"
    },
    {
        "zh": "介意",
        "en": "mind"
    },
    {
        "zh": "分鐘",
        "en": "minute"
    },
    {
        "zh": "小姐",
        "en": "Miss"
    },
    {
        "zh": "想念",
        "en": "miss"
    },
    {
        "zh": "錯誤",
        "en": "mistake"
    },
    {
        "zh": "現代化的",
        "en": "modern"
    },
    {
        "zh": "片刻",
        "en": "moment"
    },
    {
        "zh": "星期一",
        "en": "Monday"
    },
    {
        "zh": "錢",
        "en": "money"
    },
    {
        "zh": "猴子",
        "en": "monkey"
    },
    {
        "zh": "月份",
        "en": "month"
    },
    {
        "zh": "月亮",
        "en": "moon"
    },
    {
        "zh": "更多",
        "en": "more"
    },
    {
        "zh": "早上",
        "en": "morning"
    },
    {
        "zh": "最",
        "en": "most"
    },
    {
        "zh": "母親",
        "en": "mother"
    },
    {
        "zh": "摩托車",
        "en": "motorcycle"
    },
    {
        "zh": "山",
        "en": "mountain"
    },
    {
        "zh": "老鼠",
        "en": "mouse"
    },
    {
        "zh": "嘴",
        "en": "mouth"
    },
    {
        "zh": "移動",
        "en": "move"
    },
    {
        "zh": "電影",
        "en": "movie"
    },
    {
        "zh": "先生",
        "en": "Mr."
    },
    {
        "zh": "太太",
        "en": "Mrs."
    },
    {
        "zh": "小姐",
        "en": "Ms."
    },
    {
        "zh": "很多",
        "en": "much"
    },
    {
        "zh": "博物館",
        "en": "museum"
    },
    {
        "zh": "音樂",
        "en": "music"
    },
    {
        "zh": "必須",
        "en": "must"
    },
    {
        "zh": "名字",
        "en": "name"
    },
    {
        "zh": "國家的",
        "en": "national"
    },
    {
        "zh": "附近",
        "en": "near"
    },
    {
        "zh": "脖子",
        "en": "neck"
    },
    {
        "zh": "需要",
        "en": "need"
    },
    {
        "zh": "從不",
        "en": "never"
    },
    {
        "zh": "新的",
        "en": "new"
    },
    {
        "zh": "新聞",
        "en": "news"
    },
    {
        "zh": "下一個",
        "en": "next"
    },
    {
        "zh": "好",
        "en": "nice"
    },
    {
        "zh": "夜晚",
        "en": "night"
    },
    {
        "zh": "九",
        "en": "nine"
    },
    {
        "zh": "十九",
        "en": "nineteen"
    },
    {
        "zh": "九十",
        "en": "ninety"
    },
    {
        "zh": "第九",
        "en": "ninth"
    },
    {
        "zh": "不",
        "en": "no"
    },
    {
        "zh": "無人",
        "en": "nobody"
    },
    {
        "zh": "點頭",
        "en": "nod"
    },
    {
        "zh": "噪音",
        "en": "noise"
    },
    {
        "zh": "麵條",
        "en": "noodle"
    },
    {
        "zh": "正午",
        "en": "noon"
    },
    {
        "zh": "北方",
        "en": "north"
    },
    {
        "zh": "鼻子",
        "en": "nose"
    },
    {
        "zh": "不是",
        "en": "not"
    },
    {
        "zh": "筆記本",
        "en": "notebook"
    },
    {
        "zh": "無事",
        "en": "nothing"
    },
    {
        "zh": "注意",
        "en": "notice"
    },
    {
        "zh": "十一月",
        "en": "November"
    },
    {
        "zh": "現在",
        "en": "now"
    },
    {
        "zh": "數字",
        "en": "number"
    },
    {
        "zh": "護士",
        "en": "nurse"
    },
    {
        "zh": "點鐘",
        "en": "o'clock"
    },
    {
        "zh": "十月",
        "en": "October"
    },
    {
        "zh": "…的",
        "en": "of"
    },
    {
        "zh": "脫下",
        "en": "off"
    },
    {
        "zh": "辦公室",
        "en": "office"
    },
    {
        "zh": "官員",
        "en": "officer"
    },
    {
        "zh": "常常",
        "en": "often"
    },
    {
        "zh": "油",
        "en": "oil"
    },
    {
        "zh": "好地",
        "en": "OK"
    },
    {
        "zh": "老的",
        "en": "old"
    },
    {
        "zh": "在..上面",
        "en": "on"
    },
    {
        "zh": "一次",
        "en": "once"
    },
    {
        "zh": "一",
        "en": "one"
    },
    {
        "zh": "只有",
        "en": "only"
    },
    {
        "zh": "打開",
        "en": "open"
    },
    {
        "zh": "或",
        "en": "or"
    },
    {
        "zh": "柑橘",
        "en": "orange"
    },
    {
        "zh": "點菜",
        "en": "order"
    },
    {
        "zh": "其他的",
        "en": "other"
    },
    {
        "zh": "外面的",
        "en": "out"
    },
    {
        "zh": "外面",
        "en": "outside"
    },
    {
        "zh": "結束",
        "en": "over"
    },
    {
        "zh": "擁有",
        "en": "own"
    },
    {
        "zh": "包裝",
        "en": "pack"
    },
    {
        "zh": "包裹",
        "en": "package"
    },
    {
        "zh": "頁",
        "en": "page"
    },
    {
        "zh": "油漆",
        "en": "paint"
    },
    {
        "zh": "雙、副",
        "en": "pair"
    },
    {
        "zh": "褲子",
        "en": "pants"
    },
    {
        "zh": "紙",
        "en": "paper"
    },
    {
        "zh": "父母",
        "en": "parent"
    },
    {
        "zh": "公園",
        "en": "park"
    },
    {
        "zh": "部份",
        "en": "part"
    },
    {
        "zh": "宴會",
        "en": "party"
    },
    {
        "zh": "經過",
        "en": "pass"
    },
    {
        "zh": "過去",
        "en": "past"
    },
    {
        "zh": "付費",
        "en": "pay"
    },
    {
        "zh": "體育",
        "en": "PE"
    },
    {
        "zh": "筆",
        "en": "pen"
    },
    {
        "zh": "鉛筆",
        "en": "pencil"
    },
    {
        "zh": "人",
        "en": "people"
    },
    {
        "zh": "也許",
        "en": "perhaps"
    },
    {
        "zh": "人",
        "en": "person"
    },
    {
        "zh": "寵物",
        "en": "pet"
    },
    {
        "zh": "鋼琴",
        "en": "piano"
    },
    {
        "zh": "挑選",
        "en": "pick"
    },
    {
        "zh": "野餐",
        "en": "picnic"
    },
    {
        "zh": "圖片",
        "en": "picture"
    },
    {
        "zh": "派",
        "en": "pie"
    },
    {
        "zh": "片、塊",
        "en": "piece"
    },
    {
        "zh": "豬",
        "en": "pig"
    },
    {
        "zh": "粉紅色",
        "en": "pink"
    },
    {
        "zh": "披薩",
        "en": "pizza"
    },
    {
        "zh": "地方",
        "en": "place"
    },
    {
        "zh": "計畫",
        "en": "plan"
    },
    {
        "zh": "遊戲",
        "en": "play"
    },
    {
        "zh": "球員",
        "en": "player"
    },
    {
        "zh": "操場",
        "en": "playground"
    },
    {
        "zh": "請",
        "en": "please"
    },
    {
        "zh": "下午",
        "en": "p.m."
    },
    {
        "zh": "小數點",
        "en": "point"
    },
    {
        "zh": "警察",
        "en": "police"
    },
    {
        "zh": "有禮貌的",
        "en": "polite"
    },
    {
        "zh": "貧窮的",
        "en": "poor"
    },
    {
        "zh": "爆米花",
        "en": "popcorn"
    },
    {
        "zh": "受歡迎的",
        "en": "popular"
    },
    {
        "zh": "豬肉",
        "en": "pork"
    },
    {
        "zh": "可能的",
        "en": "possible"
    },
    {
        "zh": "郵局",
        "en": "post office"
    },
    {
        "zh": "明信片",
        "en": "postcard"
    },
    {
        "zh": "磅",
        "en": "pound"
    },
    {
        "zh": "練習",
        "en": "practice"
    },
    {
        "zh": "準備",
        "en": "prepare"
    },
    {
        "zh": "禮物",
        "en": "present"
    },
    {
        "zh": "漂亮的",
        "en": "pretty"
    },
    {
        "zh": "價格",
        "en": "price"
    },
    {
        "zh": "問題",
        "en": "problem"
    },
    {
        "zh": "節目",
        "en": "program"
    },
    {
        "zh": "驕傲的",
        "en": "proud"
    },
    {
        "zh": "公眾的",
        "en": "public"
    },
    {
        "zh": "拉",
        "en": "pull"
    },
    {
        "zh": "紫色",
        "en": "purple"
    },
    {
        "zh": "推",
        "en": "push"
    },
    {
        "zh": "放置",
        "en": "put"
    },
    {
        "zh": "皇后",
        "en": "queen"
    },
    {
        "zh": "問題",
        "en": "question"
    },
    {
        "zh": "快的",
        "en": "quick"
    },
    {
        "zh": "安靜的",
        "en": "quiet"
    },
    {
        "zh": "相當地",
        "en": "quite"
    },
    {
        "zh": "兔子",
        "en": "rabbit"
    },
    {
        "zh": "收音機",
        "en": "radio"
    },
    {
        "zh": "鐵路",
        "en": "railway"
    },
    {
        "zh": "雨",
        "en": "rain"
    },
    {
        "zh": "彩虹",
        "en": "rainbow"
    },
    {
        "zh": "有雨的",
        "en": "rainy"
    },
    {
        "zh": "閱讀",
        "en": "read"
    },
    {
        "zh": "準備好了",
        "en": "ready"
    },
    {
        "zh": "真的",
        "en": "real"
    },
    {
        "zh": "真地",
        "en": "really"
    },
    {
        "zh": "紅色",
        "en": "red"
    },
    {
        "zh": "電冰箱",
        "en": "refrigerator"
    },
    {
        "zh": "記得",
        "en": "remember"
    },
    {
        "zh": "重複",
        "en": "repeat"
    },
    {
        "zh": "休息",
        "en": "rest"
    },
    {
        "zh": "餐廳",
        "en": "restaurant"
    },
    {
        "zh": "洗手間",
        "en": "restroom"
    },
    {
        "zh": "米飯",
        "en": "rice"
    },
    {
        "zh": "富有的",
        "en": "rich"
    },
    {
        "zh": "騎乘",
        "en": "ride"
    },
    {
        "zh": "對",
        "en": "right"
    },
    {
        "zh": "鈴響",
        "en": "ring"
    },
    {
        "zh": "河流",
        "en": "river"
    },
    {
        "zh": "道路",
        "en": "road"
    },
    {
        "zh": "中華民國",
        "en": "ROC"
    },
    {
        "zh": "房間",
        "en": "room"
    },
    {
        "zh": "玫瑰",
        "en": "rose"
    },
    {
        "zh": "圓的",
        "en": "round"
    },
    {
        "zh": "規則",
        "en": "rule"
    },
    {
        "zh": "統治者",
        "en": "ruler"
    },
    {
        "zh": "跑",
        "en": "run"
    },
    {
        "zh": "悲傷的",
        "en": "sad"
    },
    {
        "zh": "安全",
        "en": "safe"
    },
    {
        "zh": "沙拉",
        "en": "salad"
    },
    {
        "zh": "售賣",
        "en": "sale"
    },
    {
        "zh": "鹽",
        "en": "salt"
    },
    {
        "zh": "相同",
        "en": "same"
    },
    {
        "zh": "三明治",
        "en": "sandwich"
    },
    {
        "zh": "星期六",
        "en": "Saturday"
    },
    {
        "zh": "節省",
        "en": "save"
    },
    {
        "zh": "說",
        "en": "say"
    },
    {
        "zh": "學校",
        "en": "school"
    },
    {
        "zh": "大海",
        "en": "sea"
    },
    {
        "zh": "季節",
        "en": "season"
    },
    {
        "zh": "座位",
        "en": "seat"
    },
    {
        "zh": "第二",
        "en": "second"
    },
    {
        "zh": "看",
        "en": "see"
    },
    {
        "zh": "很少",
        "en": "seldom"
    },
    {
        "zh": "賣",
        "en": "sell"
    },
    {
        "zh": "寄送",
        "en": "send"
    },
    {
        "zh": "句子",
        "en": "sentence"
    },
    {
        "zh": "九月",
        "en": "September"
    },
    {
        "zh": "嚴重的",
        "en": "serious"
    },
    {
        "zh": "七",
        "en": "seven"
    },
    {
        "zh": "十七",
        "en": "seventeen"
    },
    {
        "zh": "第七",
        "en": "seventh"
    },
    {
        "zh": "七十",
        "en": "seventy"
    },
    {
        "zh": "數個",
        "en": "several"
    },
    {
        "zh": "應該",
        "en": "shall"
    },
    {
        "zh": "形狀",
        "en": "shape"
    },
    {
        "zh": "分攤",
        "en": "share"
    },
    {
        "zh": "她/她她的她自己",
        "en": "she、her、"
    },
    {
        "zh": "羊",
        "en": "sheep"
    },
    {
        "zh": "船",
        "en": "ship"
    },
    {
        "zh": "襯衫",
        "en": "shirt"
    },
    {
        "zh": "鞋子",
        "en": "shoe（s）"
    },
    {
        "zh": "商店",
        "en": "shop"
    },
    {
        "zh": "零售商",
        "en": "shopkeeper"
    },
    {
        "zh": "短的",
        "en": "short"
    },
    {
        "zh": "應該",
        "en": "should"
    },
    {
        "zh": "肩膀",
        "en": "shoulder"
    },
    {
        "zh": "表演",
        "en": "show"
    },
    {
        "zh": "害羞",
        "en": "shy"
    },
    {
        "zh": "生病",
        "en": "sick"
    },
    {
        "zh": "邊",
        "en": "side"
    },
    {
        "zh": "人行道",
        "en": "sidewalk"
    },
    {
        "zh": "簡單的",
        "en": "simple"
    },
    {
        "zh": "自從",
        "en": "since"
    },
    {
        "zh": "唱歌",
        "en": "sing"
    },
    {
        "zh": "歌手",
        "en": "singer"
    },
    {
        "zh": "先生",
        "en": "sir"
    },
    {
        "zh": "姊妹",
        "en": "sister"
    },
    {
        "zh": "坐",
        "en": "sit"
    },
    {
        "zh": "六",
        "en": "six"
    },
    {
        "zh": "十六",
        "en": "sixteen"
    },
    {
        "zh": "第六",
        "en": "sixth"
    },
    {
        "zh": "六十",
        "en": "sixty"
    },
    {
        "zh": "大小",
        "en": "size"
    },
    {
        "zh": "裙子",
        "en": "skirt"
    },
    {
        "zh": "天空",
        "en": "sky"
    },
    {
        "zh": "睡覺",
        "en": "sleep"
    },
    {
        "zh": "慢的",
        "en": "slow"
    },
    {
        "zh": "小的",
        "en": "small"
    },
    {
        "zh": "聰明",
        "en": "smart"
    },
    {
        "zh": "聞",
        "en": "smell"
    },
    {
        "zh": "抽煙",
        "en": "smoke"
    },
    {
        "zh": "小點心",
        "en": "snack"
    },
    {
        "zh": "蛇",
        "en": "snake"
    },
    {
        "zh": "雪",
        "en": "snow"
    },
    {
        "zh": "所以",
        "en": "so"
    },
    {
        "zh": "襪子",
        "en": "socks"
    },
    {
        "zh": "沙發",
        "en": "sofa"
    },
    {
        "zh": "一些",
        "en": "some"
    },
    {
        "zh": "某人",
        "en": "someone"
    },
    {
        "zh": "某事物",
        "en": "something"
    },
    {
        "zh": "有時候",
        "en": "sometimes"
    },
    {
        "zh": "在某處",
        "en": "somewhere"
    },
    {
        "zh": "兒子",
        "en": "son"
    },
    {
        "zh": "歌曲",
        "en": "song"
    },
    {
        "zh": "很快",
        "en": "soon"
    },
    {
        "zh": "抱歉",
        "en": "sorry"
    },
    {
        "zh": "聲音",
        "en": "sound"
    },
    {
        "zh": "湯",
        "en": "soup"
    },
    {
        "zh": "南方",
        "en": "south"
    },
    {
        "zh": "空間",
        "en": "space"
    },
    {
        "zh": "說",
        "en": "speak"
    },
    {
        "zh": "特別的",
        "en": "special"
    },
    {
        "zh": "拼字",
        "en": "spell"
    },
    {
        "zh": "花費",
        "en": "spend"
    },
    {
        "zh": "湯匙",
        "en": "spoon"
    },
    {
        "zh": "運動",
        "en": "sports"
    },
    {
        "zh": "春天",
        "en": "spring"
    },
    {
        "zh": "正方形",
        "en": "square"
    },
    {
        "zh": "站著",
        "en": "stand"
    },
    {
        "zh": "星星",
        "en": "star"
    },
    {
        "zh": "開始",
        "en": "start"
    },
    {
        "zh": "站"
    },
    {
        "zh": "所",
        "en": "station"
    },
    {
        "zh": "停留",
        "en": "stay"
    },
    {
        "zh": "牛排",
        "en": "steak"
    },
    {
        "zh": "仍然",
        "en": "still"
    },
    {
        "zh": "胃",
        "en": "stomach"
    },
    {
        "zh": "停止",
        "en": "stop"
    },
    {
        "zh": "商店",
        "en": "store"
    },
    {
        "zh": "故事",
        "en": "story"
    },
    {
        "zh": "奇怪的",
        "en": "strange"
    },
    {
        "zh": "陌生人",
        "en": "stranger"
    },
    {
        "zh": "街道",
        "en": "street"
    },
    {
        "zh": "強壯",
        "en": "strong"
    },
    {
        "zh": "學生",
        "en": "student"
    },
    {
        "zh": "研讀",
        "en": "study"
    },
    {
        "zh": "愚笨的",
        "en": "stupid"
    },
    {
        "zh": "成功的",
        "en": "successful"
    },
    {
        "zh": "糖",
        "en": "sugar"
    },
    {
        "zh": "夏天",
        "en": "summer"
    },
    {
        "zh": "太陽",
        "en": "sun"
    },
    {
        "zh": "星期天",
        "en": "Sunday"
    },
    {
        "zh": "晴朗的",
        "en": "sunny"
    },
    {
        "zh": "超級市場",
        "en": "supermarket"
    },
    {
        "zh": "確定",
        "en": "sure"
    },
    {
        "zh": "驚訝",
        "en": "surprise"
    },
    {
        "zh": "感到驚訝",
        "en": "surprised"
    },
    {
        "zh": "毛衣",
        "en": "sweater"
    },
    {
        "zh": "甜的",
        "en": "sweet"
    },
    {
        "zh": "游泳",
        "en": "swim"
    },
    {
        "zh": "桌子",
        "en": "table"
    },
    {
        "zh": "台灣",
        "en": "Taiwan"
    },
    {
        "zh": "拿取",
        "en": "take"
    },
    {
        "zh": "說",
        "en": "talk"
    },
    {
        "zh": "帶子",
        "en": "tape"
    },
    {
        "zh": "品嚐",
        "en": "taste"
    },
    {
        "zh": "計程車",
        "en": "taxi"
    },
    {
        "zh": "茶",
        "en": "tea"
    },
    {
        "zh": "教導",
        "en": "teach"
    },
    {
        "zh": "老師",
        "en": "teacher"
    },
    {
        "zh": "隊伍",
        "en": "team"
    },
    {
        "zh": "青少年",
        "en": "teenager"
    },
    {
        "zh": "電話",
        "en": "telephone"
    },
    {
        "zh": "電視",
        "en": "television TV"
    },
    {
        "zh": "告訴",
        "en": "tell"
    },
    {
        "zh": "十",
        "en": "ten"
    },
    {
        "zh": "網球",
        "en": "tennis"
    },
    {
        "zh": "第十",
        "en": "tenth"
    },
    {
        "zh": "測試",
        "en": "test"
    },
    {
        "zh": "比..較",
        "en": "than"
    },
    {
        "zh": "謝謝",
        "en": "thank"
    },
    {
        "zh": "那",
        "en": "that"
    },
    {
        "zh": "這/那",
        "en": "the"
    },
    {
        "zh": "戲院",
        "en": "ttheater"
    },
    {
        "zh": "那麼",
        "en": "then"
    },
    {
        "zh": "那裡",
        "en": "there"
    },
    {
        "zh": "這些",
        "en": "these"
    },
    {
        "zh": "他們他們tall的他們自己",
        "en": "they、them"
    },
    {
        "zh": "瘦/薄的",
        "en": "thin"
    },
    {
        "zh": "東西",
        "en": "thing"
    },
    {
        "zh": "想",
        "en": "think"
    },
    {
        "zh": "第三",
        "en": "third"
    },
    {
        "zh": "口渴",
        "en": "thirsty"
    },
    {
        "zh": "十三",
        "en": "thirteen"
    },
    {
        "zh": "三十",
        "en": "thirty"
    },
    {
        "zh": "這",
        "en": "this"
    },
    {
        "zh": "那些",
        "en": "those"
    },
    {
        "zh": "雖然",
        "en": "though"
    },
    {
        "zh": "千",
        "en": "thousand"
    },
    {
        "zh": "三",
        "en": "three"
    },
    {
        "zh": "星期四",
        "en": "Thursday"
    },
    {
        "zh": "票",
        "en": "ticket"
    },
    {
        "zh": "老虎",
        "en": "tiger"
    },
    {
        "zh": "時間",
        "en": "time"
    },
    {
        "zh": "疲倦的",
        "en": "tired"
    },
    {
        "zh": "到…",
        "en": "to"
    },
    {
        "zh": "今天",
        "en": "today"
    },
    {
        "zh": "一起",
        "en": "together"
    },
    {
        "zh": "蕃茄",
        "en": "tomato"
    },
    {
        "zh": "明天",
        "en": "tomorrow"
    },
    {
        "zh": "今晚",
        "en": "tonight"
    },
    {
        "zh": "太..",
        "en": "too"
    },
    {
        "zh": "牙齒",
        "en": "tooth"
    },
    {
        "zh": "觸摸",
        "en": "touch"
    },
    {
        "zh": "毛巾",
        "en": "towel"
    },
    {
        "zh": "城鎮",
        "en": "town"
    },
    {
        "zh": "玩具",
        "en": "toy"
    },
    {
        "zh": "交通",
        "en": "traffic"
    },
    {
        "zh": "火車",
        "en": "train"
    },
    {
        "zh": "樹木",
        "en": "tree"
    },
    {
        "zh": "旅行",
        "en": "trip"
    },
    {
        "zh": "麻煩",
        "en": "trouble"
    },
    {
        "zh": "卡車",
        "en": "truck"
    },
    {
        "zh": "真實的",
        "en": "true"
    },
    {
        "zh": "嘗試",
        "en": "try"
    },
    {
        "zh": "星期二",
        "en": "Tuesday"
    },
    {
        "zh": "轉動",
        "en": "turn"
    },
    {
        "zh": "十二",
        "en": "twelve"
    },
    {
        "zh": "二十",
        "en": "twenty"
    },
    {
        "zh": "二",
        "en": "two"
    },
    {
        "zh": "颱風",
        "en": "typhoon"
    },
    {
        "zh": "雨傘",
        "en": "umbrella"
    },
    {
        "zh": "伯叔父",
        "en": "uncle"
    },
    {
        "zh": "在..下面",
        "en": "under"
    },
    {
        "zh": "瞭解",
        "en": "understand"
    },
    {
        "zh": "不快樂",
        "en": "unhappy"
    },
    {
        "zh": "制服",
        "en": "uniform"
    },
    {
        "zh": "直到",
        "en": "until"
    },
    {
        "zh": "向上",
        "en": "up"
    },
    {
        "zh": "美國",
        "en": "USA"
    },
    {
        "zh": "使用",
        "en": "use"
    },
    {
        "zh": "有用的",
        "en": "useful"
    },
    {
        "zh": "通常",
        "en": "usually"
    },
    {
        "zh": "假期",
        "en": "vacation"
    },
    {
        "zh": "蔬菜",
        "en": "vegetable"
    },
    {
        "zh": "非常",
        "en": "very"
    },
    {
        "zh": "錄影帶",
        "en": "video"
    },
    {
        "zh": "拜訪",
        "en": "visit"
    },
    {
        "zh": "聲音",
        "en": "voice"
    },
    {
        "zh": "等待",
        "en": "wait"
    },
    {
        "zh": "侍者",
        "en": "waiter"
    },
    {
        "zh": "女侍者",
        "en": "waitree"
    },
    {
        "zh": "叫醒",
        "en": "wake"
    },
    {
        "zh": "走路",
        "en": "walk"
    },
    {
        "zh": "牆壁",
        "en": "wall"
    },
    {
        "zh": "想要",
        "en": "want"
    },
    {
        "zh": "溫暖",
        "en": "warm"
    },
    {
        "zh": "洗",
        "en": "wash"
    },
    {
        "zh": "看",
        "en": "watch"
    },
    {
        "zh": "水",
        "en": "water"
    },
    {
        "zh": "方法",
        "en": "way"
    },
    {
        "zh": "我們我們的我們自己",
        "en": "we、us"
    },
    {
        "zh": "虛弱的",
        "en": "weak"
    },
    {
        "zh": "穿戴",
        "en": "wear"
    },
    {
        "zh": "天氣",
        "en": "weather"
    },
    {
        "zh": "星期三",
        "en": "Wednesday"
    },
    {
        "zh": "星期",
        "en": "week"
    },
    {
        "zh": "週末",
        "en": "weekend"
    },
    {
        "zh": "歡迎",
        "en": "welcome"
    },
    {
        "zh": "安好",
        "en": "well"
    },
    {
        "zh": "西方",
        "en": "west"
    },
    {
        "zh": "潮濕的",
        "en": "wet"
    },
    {
        "zh": "什麼",
        "en": "what"
    },
    {
        "zh": "何時",
        "en": "when"
    },
    {
        "zh": "哪裡",
        "en": "where"
    },
    {
        "zh": "是否",
        "en": "whether"
    },
    {
        "zh": "哪一個",
        "en": "which"
    },
    {
        "zh": "白色",
        "en": "white"
    },
    {
        "zh": "誰",
        "en": "who"
    },
    {
        "zh": "誰的",
        "en": "whose"
    },
    {
        "zh": "為什麼",
        "en": "why"
    },
    {
        "zh": "妻子",
        "en": "wife"
    },
    {
        "zh": "將要",
        "en": "will、would"
    },
    {
        "zh": "贏",
        "en": "win"
    },
    {
        "zh": "風",
        "en": "wind"
    },
    {
        "zh": "窗戶",
        "en": "window"
    },
    {
        "zh": "多風的",
        "en": "windy"
    },
    {
        "zh": "冬天",
        "en": "winter"
    },
    {
        "zh": "明智的",
        "en": "wise"
    },
    {
        "zh": "希望",
        "en": "wish"
    },
    {
        "zh": "與…",
        "en": "with"
    },
    {
        "zh": "沒有…",
        "en": "without"
    },
    {
        "zh": "女人",
        "en": "woman"
    },
    {
        "zh": "奇妙的",
        "en": "wonderful"
    },
    {
        "zh": "文字",
        "en": "word"
    },
    {
        "zh": "工作",
        "en": "work"
    },
    {
        "zh": "字典辭彙",
        "en": "workbook"
    },
    {
        "zh": "工人",
        "en": "worker"
    },
    {
        "zh": "世界",
        "en": "world"
    },
    {
        "zh": "擔憂",
        "en": "worry"
    },
    {
        "zh": "寫字",
        "en": "write"
    },
    {
        "zh": "作家",
        "en": "writer"
    },
    {
        "zh": "錯的",
        "en": "wrong"
    },
    {
        "zh": "年",
        "en": "year"
    },
    {
        "zh": "黃色",
        "en": "yellow"
    },
    {
        "zh": "是的",
        "en": "yes、yeah"
    },
    {
        "zh": "昨天",
        "en": "yesterday"
    },
    {
        "zh": "尚未",
        "en": "yet"
    },
    {
        "zh": "你(們)/你(們)的/你自己/你們自己",
        "en": "you、your、yours、yourself、yourselves"
    },
    {
        "zh": "年輕",
        "en": "young"
    },
    {
        "zh": "動物園",
        "en": "zoo"
    }
]
// 預設執行產生題目
question(); 

// 點擊下一題按鈕產生題目
$('#put').click(function(){
    dict.push({"zh":$('#chi').val(),"en":$('#eng').val()});
    alert('成功輸入單字');
    console.log($('#eng').val());
    console.log(dict[3]);
})

// 產生題目
function question () {
    $('#a,#b,#c,#d').removeClass();
    $('#a,#b,#c,#d').addClass('blue');
    $('#next').hide();
    var a = randomWord();
    var b = randomWord();
    var c = randomWord();
    var d = randomWord();
    $('#a').text(a.zh);
    $('#b').text(b.zh);
    $('#c').text(c.zh);
    $('#d').text(d.zh);
    
    var rand = Math.random()* 4;
    if (rand < 1) {
        answer = a;
        answerBtn = $('#a');
    }else if (rand < 2) {
        answer = b;
        answerBtn = $('#b');
    }else if (rand < 3) {
        answer = c
        answerBtn = $('#c');
    }else{
        answer = d;
        answerBtn = $('#d');
    }
    $('h2').text(answer.en)
}

function randomWord(){
    var rand = Math.floor(Math.random()* dict.length);
    return dict[rand];
}
$('#a,#b,#c,#d').click(function(){
    if ($(this).text() != answer.zh) {
        $(this).removeClass('blue');
        $(this).addClass('red');
    }
    answerBtn.removeClass('blue');
    answerBtn.addClass('green');
    $('#next').show();
})
$('#next').click(function(){
    question();
})