const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', userName);

function userName(event) {
    outputName.textContent = event.currentTarget.value.trim();

    if (outputName.textContent === "") {
        return outputName.textContent = 'Anonymous';
    }
}