// Get the form element and the email input field
const form = document.querySelector('form');
const emailInput = document.querySelector('#user_email');

// Listen for the form submit event
form.addEventListener('submit', (event) => {
  const emailValue = emailInput.value.toLowerCase();

  if (emailValue !== emailInput.value) {
    event.preventDefault();

    const errorElement = document.createElement('p');
    errorElement.textContent = 'Please enter your email address in lowercase';
    errorElement.style.color = 'lightred';
    errorElement.classList.add('form__error');
    form.appendChild(errorElement);
  }
});