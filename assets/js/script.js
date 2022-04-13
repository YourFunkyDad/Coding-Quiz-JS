var quizContainer = document.getElementById('quiz');






function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		
	}

	function showResults(questions, quizContainer, resultsContainer){
		
	}

	
	showQuestions(questions, quizContainer);

	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var myQuestions = [
    {
        question: 'Is coding fun?',
        answers: [
            { text: 'Yes', correct: true },
            { text: 'Yes', correct: true },
            { text: 'Yes', correct: true },
            { text: 'Yes', correct: true }
            
        ]  
      },  
    {
        question: 'Commonly used data types DO NOT Include:?',
        answers: [
            { text: 'Strings', correct: false },
            { text: 'Booleans', correct: true },
            { text: 'Alerts', correct: false },
            { text: 'Numbers', correct: false }
        ]  
      },
      {
        question: 'String values must be enclosed within _______ when being assigned to variables.',
        answers: [
            { text: 'Commas', correct: false },
            { text: 'Curly Brackets', correct: false },
            { text: 'Quotes', correct: true },
            { text: 'Parenthesis', correct: false }
        ]  
      },
      {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            { text: 'JavaScript', correct: false },
            { text: 'Terminal/Bash', correct: false },
            { text: 'For Loops', correct: false },
            { text: 'console.log', correct: true }
        ]  
      },
      {
        question: 'Arrays in JavaScript can be used to store _______.',
        answers: [
            { text: 'Numbers and Strings', correct: false },
            { text: 'Other Arrays', correct: false },
            { text: 'Booleans', correct: false },
            { text: 'All of the above', correct: true }
        ]  
      },
];

function showQuestions(questions, quizContainer){
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
        answers = [];

        for(letter in questions[i].answers){
            answers.push(
                '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + questions[i].answers[letter]
            + '</label>'  
            );
        }

        output.push(
            '<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
        );
    }

    quizContainer.innerHTML = output.join('');
}

showQuestions(questions, quizContainer);