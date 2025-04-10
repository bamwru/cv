document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset(); // Reset form after submission
    } else {
        alert('Please fill in all fields!');
    }
});
