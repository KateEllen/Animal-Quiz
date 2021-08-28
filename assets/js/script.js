 /*jshint esversion: 6 */


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

 /**
  * Hides score area
  * Shuffles questions to make them randome each time
  * Hides question index
  */

 function startGame(questionaireIndex) {
   document.getElementById("score-area").classList.remove("hide");

   quizButtonContainer.classList.add("hide");
   shuffledQuestions = questionnaire[questionaireIndex].questions.sort(
     () => Math.random() - 0.5
   );
   currentQuestionIndex = 0;
   questionContainerElement.classList.remove("hide");
   setNextQuestion();
 }

 
 //Resets state to create next question
  
 function setNextQuestion() {
   resetState();
   showQuestion(shuffledQuestions[currentQuestionIndex]);
 }

 /**
  * Waits for window content to load
  * Changes display of quiz container from none to flex when JavaScript is enabled
  * Code for onload event adapted from W3Schools
  * https://www.w3schools.com/jsref/event_onload.asp
  * 
  * Also adds listeners to the welcome button click
  */

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
// hides next button 
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
// Checks if answer is correct and adds to score
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
     element.disabled = true;
   } else {
     element.classList.add("wrong");
     element.disabled = true;
   }
 }

 function clearStatusClass(element) {
   element.classList.remove("correct");
   element.classList.remove("wrong");
   element.disabled = false;
 }
// score tracker
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

 function welcome() {
   document.getElementById("greeting").classList.remove("hide");
   // update the welcome to the entered name, or default to Player 1
   if (document.getElementById("fname").value.length > 0) {
     document.getElementById("username").innerHTML = document.getElementById(
       "fname"
     ).value;
   } else {
     document.getElementById("username").innerHTML = "Player 1";
   }
   // hide name entry
   document.getElementById("nameCollector").classList.add("hide");
   // Show the quiz
   document.getElementById("quiz-interaction").classList.remove("hide");
 }

 /**
  * Waits for window content to load
  * Changes display of quiz container from none to flex when JavaScript is enabled
  * Code for onload event adapted from W3Schools
  * https://www.w3schools.com/jsref/event_onload.asp
  * 
  * Also adds listeners to the welcome button click
  */


 window.onload = function () {
   document.getElementById("welcome").addEventListener("click", function () {
     welcome();
   });

 };