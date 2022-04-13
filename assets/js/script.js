const questions = [
    {
        question: 'Is coding fun?',
        a: 'Yes',
        b: 'Yes',
        c: 'Yes',
        d: 'Yes',

        correct: 'a',
        correct: 'b',
        correct: 'c',
        correct: 'd',
            
    },  
    {
        question: 'Commonly used data types DO NOT Include:?',
             a: 'Strings', correct: false ,
             b: 'Booleans', correct: true ,
             c: 'Alerts', correct: false ,
             d: 'Numbers', correct: false 
    },
    {
        question: 'String values must be enclosed within _______ when being assigned to variables.',
            a: 'Commas', correct: false ,
            b: 'Curly Brackets', correct: false ,
            c: 'Quotes', correct: true ,
            c: 'Parenthesis', correct: false 
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
            a: 'JavaScript', correct: false ,
            b: 'Terminal/Bash', correct: false ,
            c: 'For Loops', correct: false ,
            c: 'console.log', correct: true 
    },
    {
        question: 'Arrays in JavaScript can be used to store _______.',
            a: 'Numbers and Strings', correct: false ,
            b: 'Other Arrays', correct: false ,
            c: 'Booleans', correct: false ,
            c: 'All of the above', correct: true 
    },  
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

