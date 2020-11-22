var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

var startScreen = document.getElementById("startScreen");
var questionsScreen = document.getElementById("questionScreen");
var questionTitle = document.getElementById("question");
var answersListParent = document.getElementById("answers");
questionsScreen.style.display = "none";

var startQuizButton = document.getElementById("startQuizButton");
var questionBeingAskedIndex = 0;

function startQuiz() {
  startScreen.style.display = "none";
  questionsScreen.style.display = "block";
  //start the timer in here and display it on the screen. 
  startQuestions();
}

//write a function to start displaying questions 1 by 1. 
function startQuestions() {
  var currentQuestion = questions[questionBeingAskedIndex].title;
  questionTitle.textContent = currentQuestion;
  answersListParent.innerHTML = "";
  var currentQuestionAnswers = questions[questionBeingAskedIndex].choices;
  currentQuestionAnswers.forEach(function (answer) {
    var answerButton = document.createElement("button");
    answerButton.setAttribute("value", answer)
    answerButton.textContent = answer;
    answerButton.onclick = checkAnswerSelected

    answersListParent.appendChild(answerButton);
  })
}


//write a function for each button created where we check the answer and move to next question
function checkAnswerSelected() {
  var answerSelected = this.value; 
  if (answerSelected === questions[questionBeingAskedIndex].answer){
    alert("Correct!")
  } else {
    alert("Incorrect")
  }

  questionBeingAskedIndex++;
  console.log(questionBeingAskedIndex)

  if (questionBeingAskedIndex === questions.length){
    endQuiz();
  }
  startQuestions();
}
 
function endQuiz(){
  alert("Quiz over")
}


startQuizButton.onclick = startQuiz; 