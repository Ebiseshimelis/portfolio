// Portfolio JS for Ebise Shimelis

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simple form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.color = '#e53935';
            return;
        }

        // Simulate sending message
        formMessage.textContent = 'Thank you, ' + name + '! Your message has been sent.';
        formMessage.style.color = '#4e54c8';
        form.reset();
    });
});
