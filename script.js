const CopyButton = document.querySelector('[data-copy]');
const CopyMessage = document.querySelector('[data-copy-message]');
const ErrorMessage = document.querySelector("[data-error-message]");
const PasswordValue = document.querySelector('[data-password-value]');
const RangeInput = document.querySelector('.RangeInput')
const RangeDisplay = document.querySelector('[data-range-number')

// Range Display 
RangeInput.addEventListener('input', ()=> {
    let value;
    value = RangeInput.value;
    RangeDisplay.innerText = value;
})

CopyButton.addEventListener("click", CopyFunction);
// Copy Function 
function CopyFunction() {
    const copy = navigator.clipboard;
    copy.writeText(PasswordValue.innerText).then(() => CopyMessage.classList.remove("none"));

    setTimeout(() => {
        CopyMessage.classList.add("none")
    }, 1000);   
}