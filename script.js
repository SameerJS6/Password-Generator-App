const CopyButton = document.querySelector('[data-copy]');
const CopyMessage = document.querySelector('[data-copy-message]');
const PasswordValue = document.querySelector('[data-password-value]');

const RangeInput = document.querySelector('.RangeInput')
const RangeDisplay = document.querySelector('[data-range-number')

const input = document.querySelector('input');
const ErrorMessage = document.querySelector("[data-error-message]");

const CheckMark = document.querySelector("[data-check]")
const CopyMark = document.querySelector('[data-copy-mark]');

const TooWeak = document.querySelector("[data-too-weak]");
const Weak = document.querySelector("[data-weak]");
const Medium = document.querySelector("[data-medium]");
const Strong = document.querySelector("[data-strong]");

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
    const min = input.min;
    const max = input.max;
    const value = input.value;

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

    CopyMark.classList.add('none');
    CheckMark.classList.remove('none');

    setTimeout(() => {
        CopyMessage.classList.add("none");
        CopyMark.classList.remove('none');
        CheckMark.classList.add('none');
    }, 1000);   
}