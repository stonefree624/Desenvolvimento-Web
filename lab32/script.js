const questions = [
    {
        question: "Que tipo de gênero de jogo é Bloodborne?",
        answers: ["soulslike", "rpg", "simulação", "roguelike"],
        correctAnswer: 0
    },

    {
        question: "Qual é o primeiro boss do jogo?",
        answers: ["Padre Gaiscone", "Besta Sedenta de Sangue", "Ludwig da Espada Sagrada", "não lembro o nome do bixo"],
        correctAnswer: 0
    },

    {
        question: "Qual é o nome da moeda do jogo?",
        answers: ["Almas", "Frascos de Sangue", "Ecos de Sangue", "Runas"],
        correctAnswer: 2
    },

    {
        question: "Qual o primeiro boss da dlc?",
        answers: ["Padre Gaiscone", "Ludwig da Espada Sagrada", "Lady Maria", "Laurence, O Primeiro Vicário"],
        correctAnswer: 1
    },

    {
        question: "Qual é o nome do último boss do jogo?",
        answers: ["Vicar Amélia", "Micolash", "Rom, A Aranha Néscia", "Gehrman, O Primeiro Caçador"],
        correctAnswer: 3
    }

];

function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestions;