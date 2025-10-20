// create event listeners for feedback form
const feedbackInput = document.getElementById('comments');
const submitButton = document.getElementById('submit-btn');

// character count listener
feedbackInput.addEventListener('input', (e) => {
    const charCount = e.target.value.length;
    console.log(`Char count: ${charCount}`);
})

// submit button listeners
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
})


// display tooltips on fields
const fields = [
    {id: 'username', tooltipId: 'tooltip-username'},
    {id: 'email', tooltipId: 'tooltip-email'},
    {id: 'comments', tooltipId: 'tooltip-comments'}
];

// loop over all fields to add event listener (mouseover and mouseout)
fields.forEach(field => {
    const inputElement = document.getElementById(field.id);
    const tooltipElement = document.getElementById(field.tooltipId);

    inputElement.addEventListener('mouseover', (e) => {
        tooltipElement.style.display = 'block';
    })

    inputElement.addEventListener('mouseout', (e) => {
        tooltipElement.style.display = 'none';
    })
})