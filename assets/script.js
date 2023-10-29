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
        answer: "A: 'to handle and verify user input, user actions, and browser actions'"
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

// event listner to start the quiz
click.addEventListener("click", startQuiz);

// function that changes the screen display when called, switching from home screen to questions
function startQuiz() {
    homeScreen.setAttribute("style", "display: none;");
    questionDisplay.textContent = questions[start].question;
    multipleChoiceEl.setAttribute("style", "display: block;");
    startTimer();
    displayMultipleChoice();
}

// function that calls the timer count down
function startTimer() {
    const ticker = setInterval(function () {
        countDown.textContent = timer;
        timer--;

        if (timer <= 0) {
            clearInterval(ticker);
            countDown.textContent = "";
            multipleChoiceEl.setAttribute("style", "display: none;");
            right.setAttribute("style", "display: none;");
            wrong.setAttribute("style", "display: none;");
            start = 0;
            finalScore();
        }
        else if (start === 10) {
            clearInterval(ticker);
            countDown.textContent = "";
            start = 0;
            finalScore();
        }
    }, 1000);
}

// variables that establish the multiple choice buttons
let choice1 = document.getElementById('one');
let choice2 = document.getElementById('two');
let choice3 = document.getElementById('three');
let choice4 = document.getElementById('four');
let start = 0;

// function that displays the list of possible answers
function displayMultipleChoice() {
  let item1 = choice1.textContent = questions[start].multipleChoice[0];
  let item2 = choice2.textContent = questions[start].multipleChoice[1];
  let item3 = choice3.textContent = questions[start].multipleChoice[2];
  let item4 = choice4.textContent = questions[start].multipleChoice[3];
}

let right = document.getElementById('right');
let wrong = document.getElementById('wrong');
let totalPoints = 0; 

// series of event listeners for when a multiple choice button is clicked 
choice1.addEventListener("click",function(event) {
    // conditional statement that evaluates the answer and returns a corresponing prompt
    if (event.target.textContent === questions[start].answer) {
        // console.log("right");
        right.setAttribute("style", "display: inline;");
        wrong.setAttribute("style", "display: none;");
        totalPoints = totalPoints + 5;
    }
     else if (event.target.textContent !== questions[start].answer) {
        // console.log("wrong");
        wrong.setAttribute("style", "display: inline;");
        right.setAttribute("style", "display: none;");
        // reduces remaining time by 10 seconds
        timer -= 10;
        totalPoints = totalPoints - 1;
    }
    // moves quiz to the next question
    start++;
    displayMultipleChoice();
    questionDisplay.textContent = questions[start].question;
} );

choice2.addEventListener("click",function(event) {
    // conditional statement that evaluates the answer and returns a corresponing prompt
    if (event.target.textContent === questions[start].answer) {
        // console.log("right");
        right.setAttribute("style", "display: inline;");
        wrong.setAttribute("style", "display: none;");
        totalPoints = totalPoints + 5;
    }
     else if (event.target.textContent !== questions[start].answer) {
        // console.log("wrong");
        wrong.setAttribute("style", "display: inline;");
        right.setAttribute("style", "display: none;");
        // reduces remaining time by 10 seconds
        timer -= 10;
        totalPoints = totalPoints - 1;
    }
    // moves quiz to the next question
    start++;
    displayMultipleChoice();
    questionDisplay.textContent = questions[start].question;
} );

choice3.addEventListener("click",function(event) {
    // conditional statement that evaluates the answer and returns a corresponing prompt
    if (event.target.textContent === questions[start].answer) {
        // console.log("right");
        right.setAttribute("style", "display: inline;");
        wrong.setAttribute("style", "display: none;");
        totalPoints = totalPoints + 5;
    }
     else if (event.target.textContent !== questions[start].answer) {
        // console.log("wrong");
        wrong.setAttribute("style", "display: inline;");
        right.setAttribute("style", "display: none;");
        // reduces remaining time by 10 seconds
        timer -= 10;
        totalPoints = totalPoints - 1;
    }
    // moves quiz to the next question
    start++;
    displayMultipleChoice();
    questionDisplay.textContent = questions[start].question;
} );

choice4.addEventListener("click",function(event) {
    // conditional statement that evaluates the answer and returns a corresponing prompt
    if (event.target.textContent === questions[start].answer) {
        // console.log("right");
        right.setAttribute("style", "display: inline;");
        wrong.setAttribute("style", "display: none;");
        totalPoints = totalPoints + 5;
    }
     else if (event.target.textContent !== questions[start].answer) {
        // console.log("wrong");
        wrong.setAttribute("style", "display: inline;");
        right.setAttribute("style", "display: none;");
        // reduces remaining time by 10 seconds
        timer -= 10;
        totalPoints = totalPoints - 1;
    }
    // moves quiz to the next question
    start++;
    displayMultipleChoice();
    questionDisplay.textContent = questions[start].question;
} );

let form = document.getElementById('enter-initials');

// function that is called when timer is up or no more questions
// displays score and form for user initials
function finalScore() {
    questionDisplay.textContent = "Final Score: " + totalPoints;
    multipleChoiceEl.setAttribute("style", "display: none;");
    right.setAttribute("style", "display: none;");
    wrong.setAttribute("style", "display: none;");
    form.setAttribute("style", "display: block;");
}

let highScores = [];
const submission = document.getElementById('platform2');
const formBlock = document.getElementById('form-block');

// function that stores initials and score to local storage
function inputInitials(event) {
    // console.log('final test');
    event.preventDefault();
    let input = document.getElementById('initials');
    let scores = {
        myInitials: input.value,
        score: totalPoints
    };
    highScores.push(scores);
    let string = JSON.stringify(highScores);
    localStorage.setItem("High Scores", string);
    submission.textContent = "Your score has been successfully submitted!";
    submission.setAttribute("style", "color: #c81c1c;")
    submit.setAttribute("style", "display: none;");
    formBlock.reset();
}

const submit = document.getElementById('click2');
const returnHome = document.getElementById('return-home');

// event listener for when a user clicks the "submit" initials button
submit.addEventListener("click", inputInitials);

// event listener for when user clicks "return to Start" button
returnHome.addEventListener("click", backToStart);

// funtion that restarts the application
function backToStart() {
    questionDisplay.textContent = "Coding Quiz Challenge";
    homeScreen.setAttribute("style", "display: block;");
    form.setAttribute("style", "display: none;");
    totalPoints = 0;
    submit.setAttribute("style", "display: inline;")
}

const view = document.getElementById('view');
const back = document.getElementById('back');

// event listener to click to view scores
view.addEventListener("click", function() {
    viewScores();
    renderPreviousScores();
});

//  event listener to return to main quiz page
back.addEventListener("click", function() {
    backToStart();
    questionDisplay.setAttribute("style", "display: block;");
    back.setAttribute("style", "display: none;");
    view.setAttribute("style", "display: inline;");
});

// function called when user clicks to view scores
function viewScores() {
    questionDisplay.setAttribute("style", "display: none;");
    homeScreen.setAttribute("style", "display: none;");
    multipleChoiceEl.setAttribute("style", "display: none;");
    right.setAttribute("style", "display: none;");
    wrong.setAttribute("style", "display: none;");
    form.setAttribute("style", "display: none;");
    back.setAttribute("style", "display: inline;");
    view.setAttribute("style", "display: none;");
}

let listDisplay = document.getElementById('list');

// function that displays data stored locally of score results
function renderPreviousScores() {
    let storedInfo = JSON.parse(localStorage.getItem("High Scores"));
    console.log(storedInfo);
    let li = document.createElement("li");
    li.textContent = storedInfo;
    listDisplay.appendChild(li);

    if (storedInfo === null) {
        return;
    }
}

