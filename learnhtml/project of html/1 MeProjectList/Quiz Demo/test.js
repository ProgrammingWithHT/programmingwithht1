
// DOM JS
let countQuestion = document.querySelector('.left');
let scoreOF = document.querySelector('.score');
let question = document.querySelector('#question');
let choice = document.querySelectorAll('.choice-text');
let choicePrefix = document.querySelectorAll('.choice-prefix');
let line = document.querySelector('.line1');

// Variable JS
let questionMax = 5;
let questionCounter = 1;
let score = 0;
let currentQuestion = {};
let questions = [];
// let questions = [
//     {
//         question: 'Inside which HTML element do we put the JavaScript??',
//         choice1: '<script>',
//         choice2: '<javascript>',
//         choice3: '<js>',
//         choice4: '<scripting>',
//         answer: 1,
//     }
// ];

fetch(
    'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
)
    .then(res => {
        return res.json();
    })
    .then(loadedQuestions => {

        questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];

            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;

            //just correct answer in incorrect array
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );

            // put data into formattedQuestions from answer
            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
            });

            return formattedQuestion;
        });
        getNewQuestions();
    })
    .catch(err => {
        console.log(err)
    })

// console.log(choice)

// SOMEONE CLICK ON CHICIE MCQS
choice.forEach(element => {

    element.addEventListener('click', e => {
        
        choice[0].style.pointerEvents = 'none'
        choice[1].style.pointerEvents = 'none'
        choice[2].style.pointerEvents = 'none'
        choice[3].style.pointerEvents = 'none'
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        // If Answer True Return Green else Return Red Color
        const classToApply =
            selectedAnswer == currentQuestion.answer ? "#7aff00" : "#ff0018";

        // Update Question Score
        if (selectedAnswer == currentQuestion.answer) {
            score += 10;
        }
        scoreOF.innerHTML = score;

        // Change Selected Option Color
        selectedChoice.style.background = classToApply;
        selectedChoice.classList.remove('choiceHover');

        setTimeout(() => {
            // Set Original Gray Color Of Option
            selectedChoice.style.backgroundColor = 'gray';
            selectedChoice.classList.add('choiceHover');
            getNewQuestions();

        }, 500)

    })
})

getNewQuestions = () => {


    //Go To End Of Page
    if (questions.length === 0 || questionCounter > questionMax) {
        localStorage.setItem('myLoaclStorage', score)
        return window.location.assign('./last.html')
    }

    //Generator Random Number
    let rN = Math.floor(Math.random() * questions.length);

    currentQuestion = questions[rN];
    question.innerHTML = questions[rN].question;

    choice.forEach((choice) => {
        const number = choice.dataset['number'];   //BOTH ARE SAME SYNTAX: const number = choice.dataset.number;
        choice.innerText = questions[rN]['choice' + number];
    });

    line.style.width = `${(questionCounter / questionMax) * 100}%`;

    countQuestion.innerHTML = `${questionCounter}/${questionMax}`;
    questionCounter++;
    questions.splice(rN, 1);   //can be used to remove existing question


    choice[0].style.pointerEvents = 'auto'
    choice[1].style.pointerEvents = 'auto'
    choice[2].style.pointerEvents = 'auto'
    choice[3].style.pointerEvents = 'auto'
}
