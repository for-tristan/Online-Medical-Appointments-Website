document.getElementById('newsletter-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    if (validateEmail(email)) {
        alert('Thank you for subscribing!');
        document.getElementById('newsletter-form').reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function bookAppointment(doctorName) {
    alert('You have booked an appointment with ' + doctorName + '.');
}