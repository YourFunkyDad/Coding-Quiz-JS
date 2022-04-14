const questions = [
    {
        question: '_______ is the process of finding errors and fixing them within a program.',
        a: 'Debugging',
        b: 'Compiling',
        c: 'Executing',
        d: 'Scanning',
        correct: 'a',    
    },  
    {
        question: 'Commonly used data types DO NOT Include:?',
             a: 'Strings', 
             b: 'Booleans',
             c: 'Alerts', 
             d: 'Numbers',
             correct: 'b',
    },
    {
        question: 'A structure that allows repeated execution of a block of statements is a(n) ________.',
             a: 'Sequence', 
             b: 'Selection',
             c: 'Array', 
             d: 'Loop',
             correct: 'd',
    },
    {
        question: 'String values must be enclosed within _______ when being assigned to variables.',
            a: 'Commas',
            b: 'Curly Brackets',
            c: 'Quotes',
            d: 'Parenthesis',
            correct: 'c',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
            a: 'JavaScript', 
            b: 'Terminal/Bash', 
            c: 'For Loops', 
            d: 'console.log', 
            correct: 'd',
    },
    {
        question: 'A loop that never ends is called a(n) _______ loop.',
             a: 'While', 
             b: 'Infinite',
             c: 'For', 
             d: 'Counted',
             correct: 'b',
    },
    {
        question: 'A for loop must contain ______.',
             a: 'two semicolons', 
             b: 'four dots',
             c: 'three commas', 
             d: 'five hashtags',
             correct: 'a',
    },
    {
        question: 'A while loop with an empty body contains no ______.',
             a: 'A loop control variable', 
             b: 'curly braces',
             c: 'test within the parentheses of the while statement', 
             d: 'statements',
             correct: 'b',
    },
    {
        question: 'Arrays in JavaScript can be used to store _______.',
            a: 'Numbers and Strings',
            b: 'Other Arrays',
            c: 'Booleans',
            d: 'All of the above', 
            correct: 'd',
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

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuestions = questions[currentQuiz]

    questionEl.innerText = currentQuestions.question
    a_text.innerText = currentQuestions.a
    b_text.innerText = currentQuestions.b
    c_text.innerText = currentQuestions.c
    d_text.innerText = currentQuestions.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer === questions[currentQuiz].correct) {
          score++  
        }
        currentQuiz++

        if(currentQuiz < questions.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h3>You answered ${score}/${questions.length} questions correctly! </h3>
            
            <button onclick="location.reload()">Restart</button>`
        }
    }
})
