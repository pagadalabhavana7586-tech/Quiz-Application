let currentQuestion = 0;
let score = 0;
let timeLeft = 60;

const question = document.getElementById("question");
const option0 = document.getElementById("option0");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const nextBtn = document.getElementById("nextBtn");
const timer = document.getElementById("time");

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        localStorage.setItem("score", score);
        window.location.href = "result.html";
        return;
    }

    // Clear selected option
    document.querySelectorAll('input[name="answer"]').forEach(radio => {
        radio.checked = false;
    });

    question.innerText = questions[currentQuestion].question;
    option0.innerText = questions[currentQuestion].options[0];
    option1.innerText = questions[currentQuestion].options[1];
    option2.innerText = questions[currentQuestion].options[2];
    option3.innerText = questions[currentQuestion].options[3];
}

nextBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selected.value) === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    loadQuestion();
});

// Timer
const countdown = setInterval(() => {
    timeLeft--;
    timer.innerText = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        localStorage.setItem("score", score);
        window.location.href = "result.html";
    }
}, 1000);

// Load first question
loadQuestion();
