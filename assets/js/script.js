import questionnaire from "./questions.js";

const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const answerButtonsElement = document.getElementById("answer-buttons");
const quizButtonContainer = document.getElementById("quizButtonContainer");

let shuffledQuestions, currentQuestionIndex;

questionnaire.forEach(function (question) {
  quizButtonContainer.innerHTML += `<button class="start-quiz start-btn btn">${question.name}</button>`;
});

const quizButtons = document.querySelectorAll(".start-quiz");

quizButtons.forEach((quizButton, index) => {
  quizButton.addEventListener("click", () => {
    startGame(index);
  });
});

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame(questionaireIndex) {
  quizButtonContainer.classList.add("hide");
  shuffledQuestions = questionnaire[questionaireIndex].questions.sort(
    () => Math.random() - 0.5
  );
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  if (typeof question.picture !== "undefined") {
    let picture = document.getElementById("picture");
    while (picture.firstChild) {
      picture.removeChild(picture.firstChild);
    }
    const dogPicture = document.createElement("img");
    picture.classList.remove("hide");
    dogPicture.src = question.picture;
    dogPicture.alt = "What is this picture of?";
    picture.appendChild(dogPicture);
  }
  document.getElementById("question").innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  checkAnswer(correct);
  nextButton.classList.remove("hide");
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    nextButton.classList.add("hide");
    // Add restart button
    const restartButton = document.getElementById("restart-btn");
    restartButton.classList.remove("hide");
    restartButton.addEventListener("click", function () {
      window.location.reload(false);
    });
  }
}

function checkAnswer(isCorrect) {
  if (isCorrect) {
    incrementScore();
  } else {
    incrementWrongAnswer();
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function incrementScore() {
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;
}

const modal = document.getElementById("myModal");

const howToButton = document.getElementById("howToButton");

const closeHowTo = document.getElementById("closeHowTo");

howToButton.onclick = function () {
  modal.style.display = "block";
};

closeHowTo.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

/** 
 const TRIVIA = [{
     question: "The cheetah is the fastest animal on land",
     answers: {
         a: 'True',
         b: 'False'
     },
     correctAnswer: 'b'
 }];

 const ALLI_VS_CROC = [{
     question: "What is this?",
     picture: "ally_1",
     answers: {
         a: 'alligator',
         b: 'crocodile'
     },
     correctAnswer: 'a'
 }];


 function startQuiz(quizType) {
     quiz_type = quizType;
     if (quiz_type == 'dog') {
         questions = DOG_QUESTIONS;
     }
 }*/

// create welcome function

function welcome(whatever) {
  document.getElementById("greeting").innerHTML = whatever;
}

// create userName variable

var userName = prompt("What is your name?");

// run welcome function

welcome(userName);
