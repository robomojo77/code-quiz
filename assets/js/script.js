var score = 0;
var generateBox = document.querySelector("#quiz-list");
var quizListEl = document.querySelector("#quiz-list")
var showTime = document.getElementById('time-display');
var showScore = document.getElementById('score-display');
var startBtn = document.querySelector("#start-button");
var timeRemaining;

// Quiz Questions
/* { q: '',
    answerA: 'A - ', 
    answerB: 'B - ', 
    answerC: 'C - ', 
    answerD: 'D - ', 
    correctAnswer: ''},
*/

var questions = [
    {
        q: 'The Answer is A',
        answerA: 'A - THIS ONE',
        answerB: 'B - no',
        answerC: 'C - no',
        answerD: 'D - no',
        correctAnswer: 'A'
    },
    {
        q: 'The Answer is B',
        answerA: 'A - no',
        answerB: 'B - THIS ONE',
        answerC: 'C - no',
        answerD: 'D - no',
        correctAnswer: 'B'
    },
    {
        q: 'The Answer is C',
        answerA: 'A - no',
        answerB: 'B - no',
        answerC: 'C - THIS ONE',
        answerD: 'D - no',
        correctAnswer: 'C'
    },
    {
        q: 'The Answer is D',
        answerA: 'A - no',
        answerB: 'B - no',
        answerC: 'C - no',
        answerD: 'D - THIS ONE',
        correctAnswer: 'D'
    }
];

var questionNumber = questions.length -1;

function generateQuestionBoxes(x) {
    questionNumber = x;
    
    // Generate Question Box
    var currentQuestion = document.createElement("p");
    currentQuestion.className = "questionItem";
    currentQuestion.textContent = questions[questionNumber].q;
    generateBox.appendChild(currentQuestion);

    // Answer A
    var currentAnswerA = document.createElement("button");
    currentAnswerA.className = "answerItem";
    currentAnswerA.id = "answer-button-A";
    currentAnswerA.textContent = questions[questionNumber].answerA;
    generateBox.appendChild(currentAnswerA);

    // Answer B
    var currentAnswerB = document.createElement("button");
    currentAnswerB.className = "answerItem";
    currentAnswerB.id = "answer-button-B";
    currentAnswerB.textContent = questions[questionNumber].answerB;
    generateBox.appendChild(currentAnswerB);

    // Answer C
    var currentAnswerC = document.createElement("button");
    currentAnswerC.className = "answerItem";
    currentAnswerC.id = "answer-button-C";
    currentAnswerC.textContent = questions[questionNumber].answerC;
    generateBox.appendChild(currentAnswerC);

    // Answer D
    var currentAnswerD = document.createElement("button");
    currentAnswerD.className = "answerItem";
    currentAnswerD.id = "answer-button-D";
    currentAnswerD.textContent = questions[questionNumber].answerD;
    generateBox.appendChild(currentAnswerD);
}

var checkAnswer = function (y) {
    if (questions[questionNumber].correctAnswer === y) {
        alert('Correct! One point!');
        score++;
        questionNumber--;
        showScore.textContent = score;
    } else {
        alert('Incorrect! 15 second deduction!');
        timeRemaining = timeRemaining - 15;
        questionNumber--;
        showScore.textContent = score;
    }
}

function askQuestion(x) {
    
    questionNumber = x;
    generateQuestionBoxes(questionNumber);

    

    
}

// Clock Function

function clockFunction(x) {
    timeRemaining = x;
    // Start Game Clock
    var timeInterval = setInterval(function () {
        timeRemaining--;
        showTime.textContent = "Time Remaining: " + timeRemaining;
        if (timeRemaining < 1) {
            clearInterval(timeInterval);
        }

    }, 1000);
}

function finalScore() {
    var finalScore = score + timeRemaining;
    alert('Your final score is: ' + finalScore);
}
// Quiz Function

function quizFunction() {
    clockFunction(60);

    for (var i = 0;  i < questions.length; i++) {
        if (timeRemaining === 0) {
            finalScore();
        } else askQuestion(i);
    }

    var answerHandler = function (event) {
        if (event.target.matches(".answer-button-A")) {
            checkAnswer('A');
        }
        if (event.target.matches(".answer-button-B")) {
            checkAnswer('B');
        }
        if (event.target.matches(".answer-button-C")) {
            checkAnswer('C');
        }
        if (event.target.matches(".answer-button-D")) {
            checkAnswer('D');
        }
    }


    quizListEl.addEventListener("click", answerHandler);

    

}

startBtn.addEventListener("click", quizFunction);

// Question Loop

