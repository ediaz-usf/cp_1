const feedbackInput = document.getElementById('comments');
const submitButton = document.getElementById('submit-btn');

feedbackInput.addEventListener('input', (e) => {
    const charCount = e.target.value.length;
    console.log(`Char count: ${charCount}`);
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
})