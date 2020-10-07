const quizData = [
    {
    quistion : "When Beitar Jerusalem foundate?",
    A : '1938',
    B : '1935',
    C : '1948',
    D : '1928',
    correct: 'A'
    },
    {
    quistion : "What is the most popular language in 2019?",
    A : 'JAVA',
    B : 'Python',
    C : 'JS',
    D : 'C#',
    correct: 'A'
    },
    {
    quistion : "Who is the primeminister of Israel?",
    A : 'Trump',
    B : 'Benjamin Netanyahu',
    C : 'Gants',
    D : 'Sara Netanayhu',
    correct: 'D'
    }
    
]


let currentQuestion = 0 ;
const Quiz_question = document.getElementById('question_text');
const A_ans = document.getElementById('a_text');
const B_ans = document.getElementById('b_text');
const C_ans = document.getElementById('c_text');
const D_ans = document.getElementById('d_text');
const chosenRadioBtn = document.getElementById('answer');
const subnitBtn = document.getElementById('submitBtn');
loadQuiz();

function loadQuiz(){
    const question = quizData[currentQuestion].quistion;
    Quiz_question.innerHTML = question;

    const a = quizData[currentQuestion].A;
    A_ans.innerHTML = a;

    const b = quizData[currentQuestion].B;
    B_ans.innerHTML = b;

    const c = quizData[currentQuestion].C;
    C_ans.innerHTML = c;

    const d = quizData[currentQuestion].D;
    D_ans.innerHTML = d;
    
}

subnitBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length)
    {
    loadQuiz();
    }
    else
    {
        //TODO: Show result.
        alert('You finish all the Quiz!!')
    }

})