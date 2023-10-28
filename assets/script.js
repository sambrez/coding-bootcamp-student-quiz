// variable that establishes the quiz's set of questions
const questions = [
    {
        question: "Where in the HTML file should the JavaScript file link be located?",
        multipleChoice: ["As the first element in the <head>", "As the last element in the <head>", "As the first element in the <body>", "As the last element in the <body>"],
        answer: "As the last element in the <body>"
    },
    {
        question: "Which of these in NOT a way to declare a variable in JavaScript?",
        multipleChoice: ["const", "if", "let", "var"],
        answer: "if"
    },
    {
        question: "____ is a JavaScript datatype.",
        multipleChoice: ["string", "boolean", "number", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "A JavaSCript event handler is ____.",
        multipleChoice: ["used to handle and verify user input, user actions, and browser actions", "used to assign a value to a variable", "used for storing and manipulating text", "used to perform mathematical tasks on numbers"],
        answer: "used to handle and verify user input, user actions, and browser actions"
    },
    {
        question: "'An array is a special variable, which can _______.'",
        multipleChoice: ["deal only with numbers", "deal only with strings", "hold more than one value", "evaluate true or false"],
        answer: "hold more than one value"
    },
    {
        question: "String must be written in ____.",
        multipleChoice: ["single quotes", "doubles quotes", "quotaions of either kind aren't required", "either single or double quotes"],
        answer: "either single or double quotes"
    },
    {
        question: "A function must be _____.",
        multipleChoice: ["called", "declared with the keyword 'function'", "given specific name", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "Which of these is NOT a JavaScript scope?",
        multipleChoice: ["block", "function", "aside", "global"],
        answer: "aside"
    },
    {
        question: "Java and JavaScript are synonymous.",
        multipleChoice: ["true", "false", "I'm not sure", "this is a trick question"],
        answer: "false"
    },
    {
        question: "If, else statements are also known as _____.",
        multipleChoice: ["either, or statements", "variable statements", "Java statements", "conditional statements"],
        answer: "conditional statements"
    },
];
const homeScreen = document.getElementById('home-screen');
const quizLength = questions.length;
const questionDisplay = document.getElementById('platform');
const countDown = document.getElementById('count-down');
const multipleChoice = document.querySelector('.buttons');
let timer = 20 * quizLength;
// const start = 0;

function startTimer() {
    const ticker = setInterval(function() {
        countDown.textContent = timer;
        timer--; 
    }, 1000);
}

function startQuiz() {
    homeScreen.setAttribute("style", "display: none;");
    questionDisplay.textContent = questions[0].question;
    multipleChoice.setAttribute("style", "display: block;");
    startTimer();
}

// event listner to start the quiz
document.addEventListener("click", startQuiz);


