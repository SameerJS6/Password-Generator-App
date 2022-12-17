const CopyButton = document.querySelector('[data-copy]');
const CopyMessage = document.querySelector('[data-copy-message]');
const PasswordValue = document.querySelector('[data-password-value]');

const RangeInput = document.querySelector('.RangeInput')
const RangeDisplay = document.querySelector('[data-range-number')

const input = document.querySelector('input');
const ErrorMessage = document.querySelector("[data-error-message]");

// Range Display 

RangeInput.oninput = function() {
    let value;
    value = RangeInput.value;
    RangeDisplay.innerText = value;
}

// Slider Progress Bar Color Calculation Function 
setBackgroundSize(input);
input.addEventListener("input", () => setBackgroundSize(input));

function getBackgroundSize(input) {
    const min = +input.min || 1;
    const max = +input.max || 20;
    const value = +input.value;

    const size = (value - min) / (max - min) * 100;

    return size;
}

function setBackgroundSize(input) {
    input.style.setProperty("--background-size", `${getBackgroundSize(input)}%`);
}

// Copy Function 
CopyButton.addEventListener("click", CopyFunction);

function CopyFunction() {
    const copy = navigator.clipboard;
    copy.writeText(PasswordValue.innerText).then(() => CopyMessage.classList.remove("none"));

    setTimeout(() => {
        CopyMessage.classList.add("none")
    }, 1000);   
}