function checkAnswer(quizForm, correctAnswer) {
    if (!quizForm) {
        console.error('quizForm is not defined');
        return;
    }

    const formData = new FormData(quizForm);
    const userAnswer = formData.get('answer');
    const resultElement = quizForm.parentElement.querySelector('.quiz-result');

    if (!resultElement) {
        console.error('.quiz-result element not found');
        return;
    }

    if (userAnswer === correctAnswer) {
        resultElement.textContent = '정답입니다! 🎉';
        resultElement.style.color = 'var(--success-color)';
    } else {
        resultElement.textContent = '오답입니다. 다시 시도해보세요.';
        resultElement.style.color = 'var(--warning-color)';
    }
}