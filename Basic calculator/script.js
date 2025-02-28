const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === '=') {
            result.value = eval(result.value);
        } else if (button.value === 'C') {
            result.value = '';
        } else {
            result.value += button.value;
        }
    });
});
