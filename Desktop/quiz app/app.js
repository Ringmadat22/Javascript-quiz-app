const questions = [
    {
        question: "which is the largest continent in the world?",
        answers: [
            {text: "Asia", correct:"false"},
            {text: "Africa", correct:"true"},
            {text: "Australia", correct:"false"},
            {text: "Antactica", correct:"false"}
        ]
    }
    ,
    {
        question: "which is your name",
        answers: [
            {text: "Ring", correct:"false"},
            {text: "Ghost", correct:"false"},
            {text: "Madat", correct:"false"},
            {text: "am Him", correct:"true"}
        ]
    },
    {
        question: "which are you from",
        answers: [
            {text: "South Sudan", correct:"true"},
            {text: "Uganda", correct:"false"},
            {text: "Canada", correct:"false"},
            {text: "Nairobu", correct:"false"}
        ]
    },
    {
        question: "which does Ringo do for WORK",
        answers: [
            {text: "Politician", correct:"false"},
            {text: "Corrupt official", correct:"false"},
            {text: "Unemployed", correct:"false"},
            {text: "Software engineer", correct:"true"}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createComment("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}