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

const WeakAll = document.querySelectorAll(".weak");
const MediumAll = document.querySelectorAll(".medium");
const StrongAll = document.querySelectorAll(".strong");
const StrengthMessage = document.querySelector('[data-strength-message]');

const SubmitButton = document.querySelector('[data-submit-btn]');

let value;
value = RangeInput.value;

// Range Display 
RangeInput.oninput = function() {
    value = RangeInput.value;
    RangeDisplay.innerText = value;

    if(value <= 6) {
        StrengthMessage.innerHTML = 'too weak'
        TooWeak.classList.add('bg-red');

        WeakAll.forEach((weak) => {
            weak.classList.remove('bg-orange')
        })
        // TooWeak.classList.remove('bg-orange')
        // Weak.classList.remove('bg-orange');
    } else if (value <= 10) {
        StrengthMessage.innerHTML = 'weak';
        WeakAll.forEach((weak) => {
            weak.classList.add('bg-orange');
        })
        
        MediumAll.forEach((medium) => {
            medium.classList.remove('bg-yellow')
        })
        // TooWeak.classList.add('bg-orange');
        // Weak.classList.add('bg-orange');

        // TooWeak.classList.remove('bg-yellow');
        // Weak.classList.remove('bg-yellow');
        // Medium.classList.remove('bg-yellow');
    } else if(value <=15) {
        StrengthMessage.innerHTML = 'medium';
        MediumAll.forEach((medium) => {
            medium.classList.add('bg-yellow');
        })
        
        StrongAll.forEach((strong) => {
            strong.classList.remove('bg-green')
        })
        
        // TooWeak.classList.add('bg-yellow');
        // Weak.classList.add('bg-yellow');
        // Medium.classList.add('bg-yellow');

        // TooWeak.classList.remove('bg-green');
        // Weak.classList.remove('bg-green');
        // Medium.classList.remove('bg-green');
        // Strong.classList.remove('bg-green');
    } else if(value > 16) {
        StrengthMessage.innerHTML = 'strong';
        StrongAll.forEach((strong) => {
            strong.classList.add('bg-green')
        })

        // TooWeak.classList.add('bg-green');
        // Weak.classList.add('bg-green');
        // Medium.classList.add('bg-green');
        // Strong.classList.add('bg-green')
    }
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
