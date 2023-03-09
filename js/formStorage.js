document.addEventListener('DOMContentLoaded', () => {
  const formData = {
    name: '',
    email: '',
    message: ''
  };

  const nameInput = document.getElementById('full_name');
  const emailInput = document.getElementById('user_email');
  const messageInput = document.getElementById('message');

  // Obtain data from local storage if available
  const storedData = localStorage.getItem('formData');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    formData.name = parsedData.name;
    formData.email = parsedData.email;
    formData.message = parsedData.message;
  }
  nameInput.value = formData.name;
  emailInput.value = formData.email;
  messageInput.value = formData.message;

  // Store form data to local storage when a field changes
  const storeFormData = () => {
    formData.name = nameInput.value;
    formData.email = emailInput.value;
    formData.message = messageInput.value;

    localStorage.setItem('formData', JSON.stringify(formData));
  }

  nameInput.addEventListener('input', storeFormData);
  emailInput.addEventListener('input', storeFormData);
  messageInput.addEventListener('input', storeFormData);
})