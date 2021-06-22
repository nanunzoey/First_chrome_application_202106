const quotes = [
    {
        quote: "산을 올라갈 때엔 정상보다\n눈앞의 돌부리에 집중하자",
        author: "정상을 올려보다 지친 나에게"
    },
    {
        quote: "이 일이 하고 싶은 일이 맞는지\n너무 고민하지 않아도 돼.\n하다 보면 저절로 알게 될 거야.",
        author: "또 다시 방황이 시작되려는 나에게"
    },
    {
        quote: "늘 기억하자. 나는 외로운 사람이 아니라,\n주변에 좋은 사람들을 수없이 많이 두고도\n아직 먼저 말을 걸지 않았을 뿐이다.",
        author: "누군가의 도움이 필요한 나에게"
    },
    {
        quote: "그 누구도 무언갈 쉽게 얻었을 거라 속단하지 말자.\n숨겨진 그의 노력과 수많은 방황,\n탐색의 시간을 저평가하지 말자.",
        author: "남들은 다 쉽게 얻은 것 같을 때"
    },
    {
        quote: "대단한 사람들과 일한다고 해서\n그들이 내 사람이 되는 건 아니다.",
        author: "또 다시 선택의 기로에 선 나에게"
    },
    {
        quote: "요즘 운동하고 있니?\n미루지 말고 꼭 운동하자. :)",
        author: "하고 싶은 걸 더 마음껏 하길 바라는 나에게"
    },
    {
        quote: "1년 후 내 모습이 궁금하다면,\n지금 내가 하고 있는 것을 봐라.",
        author: "미래의 막막함에 무릎 꿇지 않길 바라며"
    },
    {
        quote: "스스로를 아무데도 설 수 없도록\n벼랑 끝으로 내몰고 있지 않은지?",
        author: "열심히 하고 있지만 뜻대로 되지 않을 때"
    },
    {
        quote: "실패가 아니라 피드백이었을 뿐.\n더 많이 부딪히며 최적화하는 과정일 뿐이다.\n이제 새로운 전략과 알고리즘을 짜자.",
        author: "크고 작은 좌절 앞에 주저 앉은 나에게"
    },
    {
        quote: "나는 50년 동안 어린이들에게,\n인생은 살아갈 가치가 있단다,\n라는 걸 전하고 싶었다.",
        author: "미야자키 하야오"
    },
    {
        quote: "내 묘비명에는 어떤 말이 쓰일까?",
        author: "정확한 방향을 찾고 있는 나에게"
    },
    {
        quote: "해야하는 것에만 집중하지 않았더라도,\n오늘의 순간들이 인상 깊은 것들로 가득하다면\n나는 가장 값진 시간을 보낸 것이다.",
        author: "시간 낭비가 두려운 나에게"
    },
    {
        quote: "불가능, 그것은 사실이 아니라\n하나의 의견일 뿐이다.",
        author: "이동민 (Theron Lee)"
    },
    {
        quote: "나는 강한 사람이다.",
        author: "약함을 걱정하는 나에게"
    },
    {
        quote: "좀 그럼 어때.",
        author: "내가 너의 샌드박스가 되어줄게."
    },
    {
        quote: "답을 찾을 수 없다면,\n질문을 바꿔야 한다.",
        author: "포기하지 않기를 바라며"
    },
    {
        quote: "더 건강해지기 위한 좋은 과정일 뿐이야.",
        author: "몸도 마음도 아픈 나에게"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;