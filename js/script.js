let currentQuestion = 1;

function nextQuestion(nextQuestionId) {
    const currentQuestionContainer = document.getElementById(`question${currentQuestion}`);
    currentQuestionContainer.style.opacity = 0;
    setTimeout(() => {
        currentQuestionContainer.classList.remove('active');
        currentQuestionContainer.classList.add('inactive');
    }, 500);

    const nextQuestionContainer = document.getElementById(nextQuestionId);
    setTimeout(() => {
        nextQuestionContainer.style.opacity = 1;
        nextQuestionContainer.classList.add('active');
    }, 500);

    currentQuestion++;
}

function showResult() {
    const answers = [];
    for (let i = 1; i <= 3; i++) {
        const selectedOption = document.querySelector(`input[name=q${i}]:checked`);
        if (selectedOption) {
            answers.push(parseInt(selectedOption.value));
        } else {
            alert(`Пожалуйста, ответьте на вопрос ${i}`);
            return;
        }
    }

    const totalScore = answers.reduce((acc, curr) => acc + curr, 0);

    let result;
    if (totalScore >= 1 && totalScore <= 5) {
        result = 'Совсем все худо (или нет)';
    }
    else if (totalScore >= 5 && totalScore <= 10) {
        result = 'Вам нужно то-то';
    } else if (totalScore >= 11 && totalScore <= 15) {
        result = 'Вам нужно это и это';
    } else if (totalScore >= 16 && totalScore <= 20) {
        result = 'В этом случае надо вот это, увы';
    }

    localStorage.setItem('testResult', result);
    localStorage.setItem('resultScore', totalScore);
    localStorage.setItem('currentQuestion', currentQuestion);

    const resultContent = document.getElementById('resultContent');
    resultContent.innerHTML = `Ваши баллы: ${totalScore}<br>Результат: ${result}`;

    const resultTest = document.getElementById('resultTest');
    resultTest.classList.add('active');

    const questionContainers = document.querySelectorAll('.question-container');
    questionContainers.forEach(container => {
        container.style.display = 'none';
    });

    if (currentQuestion === 3) {
        document.querySelector('.beforeResult').style.display = "flex";
        let progress = 0;
        const procentSpan = document.querySelector('.procent');
        let speedInSeconds = 30; // Скорость в секундах
        let duration = 1000 / speedInSeconds; // Преобразуем в миллисекунды
    
        function animateProgress() {
            if (progress <= 100) {
                procentSpan.textContent = progress + "%";
                progress++;
            } else {
                // Когда достигнут 100%
                document.querySelector('.beforeResult').style.display = "none";
                document.querySelector('.resultTest').classList.add('activeP');
                clearInterval(progressInterval); // Останавливаем анимацию
            }
        }
    
        const progressInterval = setInterval(animateProgress, duration);
    }
    
}
window.onload = function () {
    const savedResult = localStorage.getItem('testResult');
    const savedResultScore = localStorage.getItem('resultScore');
    if (savedResult && savedResultScore) {
        const resultContent = document.getElementById('resultContent');
        resultContent.innerHTML = `Ваши баллы: ${savedResultScore}<br>Результат: ${savedResult}`;

        const resultTest = document.getElementById('resultTest');
        resultTest.classList.add('active');

        const questionContainers = document.querySelectorAll('.question-container:not(.resultTest) .question');
        questionContainers.forEach(container => {
            container.style.display = 'none';
        });


    }
};

document.querySelector('.main_rev').addEventListener("click", (e) => {
    e.target.style.filter = "none";
    document.querySelector('.overlay-text').style.display = "none";
    document.querySelector('.overlay-bg').style.display = "none";
});



