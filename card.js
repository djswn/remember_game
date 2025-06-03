const cardArray = [
    {
        name: "elephant",
        img: "./img/elephant.png",
        id: null,
        done: false,
    },
    {
        name: "elephant",
        img: "./img/elephant.png",
        id: null,
        done: false,
    },
    {
        name: "koala",
        img: "./img/koala.png",
        id: null,
        done: false,
    },
    {
        name: "koala",
        img: "./img/koala.png",
        id: null,
        done: false,
    },
    {
        name: "monkey",
        img: "./img/monkey.png",
        id: null,
        done: false,
    },
    {
        name: "monkey",
        img: "./img/monkey.png",
        id: null,
        done: false,
    },
    {
        name: "panda",
        img: "./img/panda.png",
        id: null,
        done: false,
    },
    {
        name: "panda",
        img: "./img/panda.png",
        id: null,
        done: false,
    },
    {
        name: "parakeet",
        img: "./img/parakeet.png",
        id: null,
        done: false,
    },
    {
        name: "parakeet",
        img: "./img/parakeet.png",
        id: null,
        done: false,
    },
    {
        name: "raccoon",
        img: "./img/raccoon.png",
        id: null,
        done: false,
    },
    {
        name: "raccoon",
        img: "./img/raccoon.png",
        id: null,
        done: false,
    },
    {
        name: "sheep",
        img: "./img/sheep.png",
        id: null,
        done: false,
    },
    {
        name: "sheep",
        img: "./img/sheep.png",
        id: null,
        done: false,
    },
    {
        name: "sloth",
        img: "./img/sloth.png",
        id: null,
        done: false,
    },
    {
        name: "sloth",
        img: "./img/sloth.png",
        id: null,
        done: false,
    },
    {
        name: "turtle",
        img: "./img/turtle.png",
        id: null,
        done: false,
    },
    {
        name: "turtle",
        img: "./img/turtle.png",
        id: null,
        done: false,
    },
    {
        name: "walrus",
        img: "./img/walrus.png",
        id: null,
        done: false,
    },
    {
        name: "walrus",
        img: "./img/walrus.png",
        id: null,
        done: false,
    },
];  //카드 배열 (종류류)

const gameDOM = [];
let clickFirst = -1;
let clickSecond = -1;
let clickCount = 0;

const getGameDOM = () => {
    const rows = document.querySelectorAll(".container .row");
    for (let i = 0; i < rows.length; i++) {
        gameDOM[i] = rows[i].querySelectorAll(".column");
    }
};

const setIDtoCardArray = () => {
    cardArray[0].id = "0-0";
    cardArray[1].id = "0-1";
    cardArray[2].id = "0-2";
    cardArray[3].id = "0-3";
    cardArray[4].id = "0-4";
    cardArray[5].id = "1-0";
    cardArray[6].id = "1-1";
    cardArray[7].id = "1-2";
    cardArray[8].id = "1-3";
    cardArray[9].id = "1-4";
    cardArray[10].id = "2-0";
    cardArray[11].id = "2-1";
    cardArray[12].id = "2-2";
    cardArray[13].id = "2-3";
    cardArray[14].id = "2-4";
    cardArray[15].id = "3-0";
    cardArray[16].id = "3-1";
    cardArray[17].id = "3-2";
    cardArray[18].id = "3-3";
    cardArray[19].id = "3-4";
};  //카드 위치에 따라 번호 부여여

const createBoard = () => {
    for (let i = 0; i < gameDOM.length; i++) {
        for (let j = 0; j < gameDOM[i].length; j++) {
            const card = document.createElement("img");
            card.setAttribute("src", "./img/back.png");
            card.classList.add("eachImage");
            gameDOM[i][j].appendChild(card);
        }
    }
};

const setClickHistory = (location) => {
    if (clickFirst === -1) {  //클릭퍼스트가 -1이라는 것은 처음 클릭했다는 뜻
        clickFirst = location;
    } else {  // -1이 아니라는 것은 처음 클릭한 것이 아니라는 것
        clickSecond = location;
    }
};

//두 카드가 다르다면 0.5초 후 다시 뒤집어지도록 함함
const backFlip = () => {
    const parsedIdFirst = cardArray[clickFirst].id.split("-");
    const parsedIdSecond = cardArray[clickSecond].id.split("-");
    setTimeout(() => {
        gameDOM[parsedIdFirst[0]][parsedIdFirst[1]].querySelector("img").src =
        "./img/back.png";
        gameDOM[parsedIdSecond[0]][parsedIdSecond[1]].querySelector("img").src =
        "./img/back.png";
    }, 500);
    
};

//처음 뒤집은 카드와 두번째 카드의 이름이 같으면 done을 true로 변경시켜
//flip 함수가 재적용되지 않도록 함
const isCorrect = () => {  
    if (cardArray[clickFirst].name === cardArray[clickSecond].name) {
        cardArray[clickFirst].done = true;
        cardArray[clickSecond].done = true;
        updateScore();
    } else {
        backFlip();
    }
};

const flip = (location) => {
    if (!cardArray[location].done) {
        setClickHistory(location);   
        const parseId = cardArray[location].id.split("-");
        gameDOM[parseId[0]][parseId[1]].querySelector("img").src =
            cardArray[location].img;
        clickCount++;
        if (clickCount ===2) {
            clickCount = 0;
            isCorrect();
        }
        if (clickFirst !== -1 && clickSecond !== -1) {
            clickFirst = -1;
            clickSecond = -1;
        }
    }
};

const updateScore = () => {
    const matchedCards = cardArray.filter(card => card.done).length;
    document.getElementById("score").textContent = matchedCards /2 ;
};


onload = () => {
    getGameDOM();
    cardArray.sort(() => 0.5 - Math.random()); //sort -> 원래의 배열 자체가 바뀜뀜
    setIDtoCardArray();
    createBoard();
};