// variable that establishes the quiz's set of questions
const questions = [
    {
        question: "Where in the HTML file should the JavaScript file link be located?",
        multipleChoice: ["A: As the first element in the <head>", "B: As the last element in the <head>", "C: As the first element in the <body>", "D: As the last element in the <body>"],
        answer: "D: As the last element in the <body>"
    },
    {
        question: "Which of these in NOT a way to declare a variable in JavaScript?",
        multipleChoice: ["A: const", "B: if", "C: let", "D: var"],
        answer: "B: if"
    },
    {
        question: "____ is a JavaScript datatype.",
        multipleChoice: ["A: string", "B: boolean", "C: number", "D: all of the above"],
        answer: "D: all of the above"
    },
    {
        question: "A JavaScript event handler is used ____.",
        multipleChoice: ["A: 'to handle and verify user input, user actions, and browser actions'", "B: 'to assign a value to a variable'", "C: 'for storing and manipulating text'", "D: 'to perform mathematical tasks on numbers'"],
        answer: "A: 'used to handle and verify user input, user actions, and browser actions'"
    },
    {
        question: "'An array is a special variable, which can _______.'",
        multipleChoice: ["A: deal only with numbers", "B: deal only with strings", "C: hold more than one value", "D: evaluate true or false"],
        answer: "C: hold more than one value"
    },
    {
        question: "Strings must be written in ____.",
        multipleChoice: ["A: single quotes", "B: doubles quotes", "C: quotaions of either kind aren't required", "D: either A or B"],
        answer: "D: either A or B"
    },
    {
        question: "A function must be _____.",
        multipleChoice: ["A: called", "B: declared with the keyword 'function'", "C: given a specific name", "D: both A and B"],
        answer: "D: both A and B"
    },
    {
        question: "Which of these is NOT a JavaScript scope?",
        multipleChoice: ["A: block", "B: function", "C: aside", "D: global"],
        answer: "C: aside"
    },
    {
        question: "Java and JavaScript are synonymous.",
        multipleChoice: ["A: true", "B: false", "C: I'm not sure", "D: this is a trick question"],
        answer: "B: false"
    },
    {
        question: "If, else statements are also known as _____.",
        multipleChoice: ["A: either, or statements", "B: variable statements", "C: Java statements", "D: conditional statements"],
        answer: "D: conditional statements"
    },
];
const homeScreen = document.getElementById('home-screen');
const quizLength = questions.length;
const questionDisplay = document.getElementById('platform');
const countDown = document.getElementById('count-down');
const multipleChoiceEl = document.querySelector('#multiple-choice');
let timer = 20 * quizLength;

let choice1 = document.getElementById('one');
let choice2 = document.getElementById('two');
let choice3 = document.getElementById('three');
let choice4 = document.getElementById('four');

// event listner to start the quiz
click.addEventListener("click", startQuiz);

function startQuiz() {
    homeScreen.setAttribute("style", "display: none;");
    questionDisplay.textContent = questions[start].question;
    multipleChoiceEl.setAttribute("style", "display: block;");
    startTimer();
    displayMultipleChoice();
}

function startTimer() {
    const ticker = setInterval(function () {
        countDown.textContent = timer;
        timer--;
    }, 1000);
}

let start = 0;

function displayMultipleChoice() {
  let item1 = choice1.textContent = questions[start].multipleChoice[0];
  let item2 = choice2.textContent = questions[start].multipleChoice[1];
  let item3 = choice3.textContent = questions[start].multipleChoice[2];
  let item4 = choice4.textContent = questions[start].multipleChoice[3];
}

multipleChoiceEl.addEventListener("click",function() {
    start++;
    displayMultipleChoice();
    questionDisplay.textContent = questions[start].question;
} );
