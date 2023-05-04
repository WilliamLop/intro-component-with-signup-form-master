const form = document.getElementById('form');
const inputs = document.querySelectorAll('.input');
const errorIcons = document.querySelectorAll('.error-icon');
const textErrors = document.querySelectorAll('.text-error');

function validateField(input) {
    const value = input.value;
    const container = input.parentElement;
    const index = [...inputs].indexOf(input);
    if (!value || (input.type === 'email' && !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))) {
        container.classList.add('error');
        errorIcons[index].style.display = 'block';
        textErrors[index].style.display = 'block';
        if (input.type === 'email') {
            input.placeholder = 'email@example.com';
            input   .classList.add('invalid');
        }
        return false;
    } else {
        container.classList.remove('error');
        errorIcons[index].style.display = 'none';
        textErrors[index].style.display = 'none';
        if (input.type === 'email') {
            input.style.color = '';
        }
        return true;
    }
}
inputs.forEach((input) => {
    input.addEventListener('input', () => {
        console.log('Input event triggered for', input.id);
        validateField(input);
    });
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    inputs.forEach((input, index) => {
        if (!validateField(input)) {
            errorIcons[index].style.display = 'block';
            textErrors[index].style.display = 'block';
            valid = false;
        } else {
            errorIcons[index].style.display = 'none';
            textErrors[index].style.display = 'none';
        }
    });

    if (valid) {
        form.submit();
    }
});