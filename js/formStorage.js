document.addEventListener('DOMContentLoaded', () => {
    const formData = {
        name: '',
        email: '',
        message: ''
    };

    const nameInput = document.getElementById('full_name');
    const emailInput = document.getElementById('user_email');
    const messageInput = document.getElementById('message');

    // Obtain stored data from local storage if available
    const storedData = localStorage.getItem('formData');
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        formData.name = parsedData.name;
        formData.email = parsedData.email;
        formData.message = parsedData.message;
    }
});