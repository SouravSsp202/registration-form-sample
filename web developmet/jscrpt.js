// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const eventSelected = document.getElementById('event').value;

    // Basic validation
    if (name === '' || email === '' || phone === '' || eventSelected === '') {
        document.getElementById('statusMessage').textContent = 'Please fill in all required fields!';
    } else if (!validateEmail(email)) {
        document.getElementById('statusMessage').textContent = 'Please enter a valid email address!';
    } else {
        document.getElementById('statusMessage').textContent = 'Successfully registered!';
        document.getElementById('statusMessage').style.color = 'green';
    }
});

// Helper function to validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
