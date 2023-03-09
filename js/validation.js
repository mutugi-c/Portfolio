// Get the form element and the email input field
const form = document.querySelector('form');
const emailInput = document.querySelector('#user_email');

// Listen for the form submit event
form.addEventListener('submit', function(event) {
  // Get the email value and convert it to lowercase
  const emailValue = emailInput.value.toLowerCase();
}
);