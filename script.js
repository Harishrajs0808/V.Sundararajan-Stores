function navigate(page) {
    window.location.href = page;
}

document.getElementById('contact-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
});