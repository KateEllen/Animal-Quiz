 /*jshint esversion: 6 */ 
 let quiz_type;
let questions;

const DOG_QUESTIONS = [{
    question: "What is this?",
    picture: "pug",
    answers: {
        a: 'Pug',
        b: 'Beagle',
    },
    correctAnswer: 'a'
},
{
    question: "What is this?",
    picture: "german shepard",
    answers: {
        a: 'Poodle',
        b: 'German Shepard',
    },
    correctAnswer: 'b'
},
{
    question: "What is this?",
    picture: "Collie",
    answers: {
        a: 'Jack Russel',
        b: 'Collie',
    },
    correctAnswer: 'b'
},
{
    question: "What is this?",
    picture: "dalmation",
    answers: {
        a: 'Dalmation',
        b: 'Great Dane',
    },
    correctAnswer: 'a'
},
{
    question: "What is this?",
    picture: "labrador",
    answers: {
        a: 'Labrador',
        b: 'Pitbull',
    },
    correctAnswer: 'a'
}];

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
}