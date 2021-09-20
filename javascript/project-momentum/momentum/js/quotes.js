const quotes = [
  {
    quote: "하고 싶은 후회를 하자.",
    cite: "Me",
  },
  {
    quote: "가자, 이 새벽이 끝나는 곳으로.",
    cite: "이름에게, IU",
  },
  {
    quote: "어제의 일들은 잊어. 누구나 조금씩은 틀려.",
    cite: "비밀의 화원, 이상은",
  },
  {
    quote: "바로 이 하루, 이 지금.",
    cite: "이지금, IU",
  },
  {
    quote: "덮고, 그 위에 다시 얹고, 또 다시.",
    cite: "잼잼, IU",
  },
  {
    quote: "결국 언젠간 제일 어려운 숙제를 해야지.",
    cite: "마침표, IU",
  },
  {
    quote: "누구나 비밀은 있는 거야.",
    cite: "누구에게나 비밀은 있다, IU",
  },
  {
    quote: "Largo, Adagio, 조급해 말아요. 느린 템포로.",
    cite: "입술 사이, IU",
  },
  {
    quote: "내 운명을 고르자면 눈을 감고 걸어도 맞는 길을 고르지.",
    cite: "분홍신, IU",
  },
  {
    quote: "웃어요 활짝, 예뻐요 찰칵.",
    cite: "HAVANA, IU",
  },
  {
    quote: "햇살이 얼핏 달콤한 귤빛.",
    cite: "HAVANA, IU",
  },
  {
    quote: "한때란다, 한때야.",
    cite: "우울시계, IU",
  },
  {
    quote: "다만 꺼지지 않는 작은 불빛이 여기 반짝 살아있어요.",
    cite: "마음, IU",
  },
  {
    quote: "요즘 날씨가 정말 좋네요. 아니래도 사실 알 게 뭐야.",
    cite: "크레파스, IU",
  },
  {
    quote: "왼손으로 그린 별 하나",
    cite: "Celebrity, IU",
  },
  {
    quote: "별생각 없이 가볍게.",
    cite: "돌림노래, IU",
  },
  {
    quote: "어디에도 없지만 어느 곳에나 있겠죠.",
    cite: "Epilogue, IU",
  },
  {
    quote: "Queen, Nicely done. My bad you lose.",
    cite: "Coin, IU",
  },
  {
    quote: "또다시 헤매일지라도 돌아오는 길을 알아.",
    cite: "아이와 나의 바다, IU",
  },
  {
    quote: "무슨 소리 겁이 나기는, 재밌지 뭐.",
    cite: "Ah puh, IU",
  },
  {
    quote: "다음에 다시 만날 때까지 부디 행운을 빌어. 지겹게 보자고.",
    cite: "Ah puh, IU",
  },
];

const quote = document.querySelector("#quote .quote-text");
const cite = document.querySelector("#quote .quote-cite");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
cite.innerText = todaysQuote.cite;