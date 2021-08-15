const quizDB = [
    {
        question: "What does HTML stand for ?",
        a: "HyperLinks and Text Markup Language",
        b: "Hyper Text Markup Language",
        c: "Home Tool Markup Language",
        d: "HyperLinks Markup Language",
        ans: "ans2"
    },
    {
        question: "Choose the correct HTML element for the largest heading ?",
        a: "h6 tag",
        b: "heading tag",
        c: "head tag",
        d: "h1 tag",
        ans: "ans4"
    },
    {
        question: "What is the correct HTML element for inserting a line break ?",
        a: "lb tag",
        b: "break tag",
        c: "br tag",
        d: "linebreak tag",
        ans: "ans3"
    },
    {
        question: "What does CSS stand for ?",
        a: "Computer Style Sheets",
        b: "Cascading Style Sheets",
        c: "Creative Style Sheets",
        d: "Colorful Style Sheets",
        ans: "ans2"
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet ?",
        a: "At the End of the Document",
        b: "In the body section",
        c: "At the Middle of the Document",
        d: "In the head Section",
        ans: "ans4"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet ?",
        a: "style",
        b: "script",
        c: "css",
        d: "internal css",
        ans: "ans1"
    },
    {
        question: "Inside which HTML element do we put the JavaScript ?",
        a: "script",
        b: "js",
        c: "scripting",
        d: "javascript",
        ans: "ans1"
    },
    {
        question: "Where is the correct place to insert a JavaScript ?",
        a: "The head section",
        b: "Both the head section and the <body> section are correct",
        c: "The body section",
        d: "The style section",
        ans: "ans2"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'filename.js'? ",
        a: "script src='filename.js'",
        b: "script href='filename.js'",
        c: "script name'filename.js'",
        d: "script class='filename.js'",
        ans: "ans1"
    },
];

const question = document.querySelector('.questions');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}

loadQuestion();

getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked  =false);
} ;

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }

    questionCount++;
    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDB.length} ✌️ </h3>
            <button class="btn" onclick="location.reload()"> Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }


});