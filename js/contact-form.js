var nameInput = document.getElementById('name');

document.querySelector('form.contact-info').addEventListener('submit', function (e) {
    e.preventDefault();

    console.log(nameInput.value);
});