const quizData = [
    {
    quistion : "When Beitar Jerusalem foundate?",
    A : '1936',
    B : '1935',
    C : '1938',
    D : '1928',
    correct: 'A'
    },
    {
    quistion : "In which year did Maradona score a goal with his hand?",
    A : '1990',
    B : '1986',
    C : '1982',
    D : '1978',
    correct: 'B'
    },
    {
    quistion : "How many minutes is a rugby match?",
    A : '90',
    B : '70',
    C : '60',
    D : '80',
    correct: 'D'
    }
    
]


let currentQuestion = 0 ;
let trueAnswers = 0;
const quizWindow = document.getElementById('quiz-header');
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
    getSelectedBtn();
    currentQuestion++;
    if (currentQuestion < quizData.length)
    {
    loadQuiz();
    deselectAnswer();
    }
    else
    {
        quizWindow.innerHTML = `<button id="tryAgainBtn" onclick=location.reload()>Try Again</button>
        <h3>You had finished the Quiz - Final result: ${trueAnswers}/${currentQuestion}</h3>`;
        subnitBtn.disabled = true;
        
    }

})

function deselectAnswer(){
    const answers = document.getElementsByName('answer');
    answers.forEach(answer => {
        answer.checked = false;
    });
}

function getSelectedBtn(){
    let flag = false;
    const answers = document.getElementsByName('answer');
    answers.forEach(answer => {
        if (answer.checked == true)
        {
            flag = true;
            if (answer.id == quizData[currentQuestion].correct)
            {
            trueAnswers++;
            }
            else
            {
            console.log("Bad");
            }
        }
        
    });
    if (!flag)
    {
        alert("You Have To Answer..")
        currentQuestion--;
    }
}