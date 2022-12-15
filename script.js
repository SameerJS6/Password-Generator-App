const CopyButton = document.querySelector('[data-copy]');
const CopyMessage = document.querySelector('[data-copy-message]');
const ErrorMessage = document.querySelector("[data-error-message]");
const PasswordValue = document.querySelector('[data-password-value]');

CopyButton.addEventListener("click", CopyFunction);
// Copy Function 
function CopyFunction() {
    const cb = navigator.clipboard;
    cb.writeText(PasswordValue.innerText).then(() => CopyMessage.classList.remove("none"));

    setTimeout(() => {
        CopyMessage.classList.add("none")
    }, 1000);
    
}