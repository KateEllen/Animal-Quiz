 /*jshint esversion: 6 */ 
/*let quiz_type;
let questions;*/

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }

  function showQuestion(question) {
      if(typeof(question.picture )!= 'undefined') {
        let picture = document.getElementById('picture')
        while (picture.firstChild) {
            picture.removeChild(picture.firstChild)
          }
        const dogPicture = document.createElement('img')
        picture.classList.remove('hide')
        dogPicture.src= question.picture
        dogPicture.alt= 'What is this picture of?'
        picture.appendChild(dogPicture)
      }
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }

  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
      }
    
}

    function setStatusClass (element, correct) {
        clearStatusClass(element)
        if (correct) {
            element.classList.add('correct') 
        } else {
            element.classList.add('wrong')
        }
    }
    
    function clearStatusClass(element) {
        element.classList.remove('correct') 
        element.classList.remove('wrong') 
    }


 const questions = [{
    question: "What dog is this?",
    picture: "assets/images/dogs/bulldog.jpg",
    attribution: "Image by Ilona Krijgsman from Pixabay",
    answers: [
        {text: 'Bulldog', correct: true},
        {text: 'Beagle', correct: false}
    ]
},
{
    question: "What dog is this?",
    picture: "assets/images/dogs/doberman.jpg",
    attribution: "Image by Here and now, unfortunately, ends my journey on Pixabay from Pixabay ",
    answers: [
        {text: 'Poodle', correct: false},
        {text: 'Doberman', correct: true}
    ]
},
{
    question: "What dog is this?",
    picture: "assets/images/dogs/collie.jpg",
    attribution: "Image by Here and now, unfortunately, ends my journey on Pixabay from Pixabay ",
    answers: [
        {text: 'Jack Russel', correct: false},
        {text: 'Collie', correct: true}
    ]
},
{
    question: "What dog is this?",
    picture: "assets/images/dogs/dalmation.jpg",
    attribution: "Photo by Kasuma from Pexels",
    answers: [
        {text: 'Dalmation', correct: true},
        {text: 'Great Dane', correct: false}
    ]
},
{
    question: "What dog is this?",
    picture: "assets/images/dogs/labrador.jpg",
    attribution: "Image by Josch Nolte from Pixabay",
    answers: [
        {text: 'Labrador', correct: true},
        {text: 'Pitbull', correct: false}
    ]
}];
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