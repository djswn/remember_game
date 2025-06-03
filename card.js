const cardArray = [
    {
        name: "elephant",
        img: "![Image](https://github.com/user-attachments/assets/3ad5f59f-adb7-4f5b-91c6-7eff443d92e4)",
        id: null,
        done: false,
    },
    {
        name: "elephant",
        img: "![Image](https://github.com/user-attachments/assets/3ad5f59f-adb7-4f5b-91c6-7eff443d92e4)",
        id: null,
        done: false,
    },
    {
        name: "koala",
        img: "![Image](https://github.com/user-attachments/assets/bd329757-169b-4888-8d4e-13d27832b2db)",
        id: null,
        done: false,
    },
    {
        name: "koala",
        img: "![Image](https://github.com/user-attachments/assets/bd329757-169b-4888-8d4e-13d27832b2db)",
        id: null,
        done: false,
    },
    {
        name: "monkey",
        img: "![Image](https://github.com/user-attachments/assets/60d8a7ae-84dc-4921-9ccb-ca8eaf54ff47)",
        id: null,
        done: false,
    },
    {
        name: "monkey",
        img: "![Image](https://github.com/user-attachments/assets/60d8a7ae-84dc-4921-9ccb-ca8eaf54ff47)",
        id: null,
        done: false,
    },
    {
        name: "panda",
        img: "![Image](https://github.com/user-attachments/assets/05cd35c8-4027-4852-8d67-0b9d6727f5a7)",
        id: null,
        done: false,
    },
    {
        name: "panda",
        img: "![Image](https://github.com/user-attachments/assets/05cd35c8-4027-4852-8d67-0b9d6727f5a7)",
        id: null,
        done: false,
    },
    {
        name: "parakeet",
        img: "![Image](https://github.com/user-attachments/assets/bf4304db-006d-4dfe-b7c0-50cdcab2fac3)",
        id: null,
        done: false,
    },
    {
        name: "parakeet",
        img: "![Image](https://github.com/user-attachments/assets/bf4304db-006d-4dfe-b7c0-50cdcab2fac3)",
        id: null,
        done: false,
    },
    {
        name: "raccoon",
        img: "![Image](https://github.com/user-attachments/assets/3ef17299-58c1-4508-9c11-19db2802e520)",
        id: null,
        done: false,
    },
    {
        name: "raccoon",
        img: "![Image](https://github.com/user-attachments/assets/3ef17299-58c1-4508-9c11-19db2802e520)",
        id: null,
        done: false,
    },
    {
        name: "sheep",
        img: "![Image](https://github.com/user-attachments/assets/0c9195f1-debf-437e-a149-8040b0e17e5f)",
        id: null,
        done: false,
    },
    {
        name: "sheep",
        img: "![Image](https://github.com/user-attachments/assets/0c9195f1-debf-437e-a149-8040b0e17e5f)",
        id: null,
        done: false,
    },
    {
        name: "sloth",
        img: "![Image](https://github.com/user-attachments/assets/62fbf051-cbed-4571-9950-dddb40ad19b2)",
        id: null,
        done: false,
    },
    {
        name: "sloth",
        img: "![Image](https://github.com/user-attachments/assets/62fbf051-cbed-4571-9950-dddb40ad19b2)",
        id: null,
        done: false,
    },
    {
        name: "turtle",
        img: "![Image](https://github.com/user-attachments/assets/34d5fc05-a263-4515-8c57-93dbcabf5c5c)",
        id: null,
        done: false,
    },
    {
        name: "turtle",
        img: "![Image](https://github.com/user-attachments/assets/34d5fc05-a263-4515-8c57-93dbcabf5c5c)",
        id: null,
        done: false,
    },
    {
        name: "walrus",
        img: "![Image](https://github.com/user-attachments/assets/443803a7-03f4-4b1a-bc61-bc324510ba89)",
        id: null,
        done: false,
    },
    {
        name: "walrus",
        img: "![Image](https://github.com/user-attachments/assets/443803a7-03f4-4b1a-bc61-bc324510ba89)",
        id: null,
        done: false,
    },
];  //카드 배열 (종류)

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
            card.setAttribute("src", "![Image](https://github.com/user-attachments/assets/8ba4133c-39a6-45e1-9a59-611b61ef9747)");
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
        "![Image](https://github.com/user-attachments/assets/8ba4133c-39a6-45e1-9a59-611b61ef9747)";
        gameDOM[parsedIdSecond[0]][parsedIdSecond[1]].querySelector("img").src =
        "![Image](https://github.com/user-attachments/assets/8ba4133c-39a6-45e1-9a59-611b61ef9747)";
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
