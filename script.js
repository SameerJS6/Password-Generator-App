const CopyButton = document.querySelector("[data-copy]");
const CopyMessage = document.querySelector("[data-copy-message]");
const PasswordValue = document.querySelector("[data-password-value]");

const RangeInput = document.querySelector(".RangeInput");
const RangeDisplay = document.querySelector("[data-range-number");

const input = document.querySelector("input");
const ErrorMessage = document.querySelector("[data-error-message]");

const CheckMark = document.querySelector("[data-check]");
const CopyMark = document.querySelector("[data-copy-mark]");

const TooWeak = document.querySelector("[data-too-weak]");
const Weak = document.querySelector("[data-weak]");
const Medium = document.querySelector("[data-medium]");
const Strong = document.querySelector("[data-strong]");

const Allbar = document.querySelectorAll(".All");
const WeakAll = document.querySelectorAll(".weak");
const MediumAll = document.querySelectorAll(".medium");
const StrongAll = document.querySelectorAll(".strong");
const StrengthMessage = document.querySelector("[data-strength-message]");

const Form = document.querySelector("[data-form]");
const IncludeUppercaseElement = document.getElementById("IncludeUppercase");
const IncludeLowercaseElement = document.getElementById("IncludeLowercase");
const IncludeNumbersElement = document.getElementById("IncludeNumbers");
const IncludeSymbolsElement = document.getElementById("IncludeSymbols");

const SubmitButton = document.querySelector("[data-submit-btn]");
const ResetButton = document.querySelector("[data-resetbtn]");

let value;
value = RangeInput.value;

// ASCII CHAR CODES FOR PASSWORD COMBINATION ARRAYS
const UPPERCASE_CODES = ArrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = ArrayFromLowToHigh(97, 122);
const NUMBER_CODES = ArrayFromLowToHigh(48, 57);
const SYMBOL_CODES = ArrayFromLowToHigh(33, 47)
  .concat(ArrayFromLowToHigh(58, 64))
  .concat(ArrayFromLowToHigh(91, 96))
  .concat(ArrayFromLowToHigh(123, 126));

// Form Event Listener
Form.addEventListener("submit", (e) => {
  e.preventDefault();

  const CharacterAmount = value;
  const includeUppercase = IncludeUppercaseElement.checked;
  const includeLowercase = IncludeLowercaseElement.checked;
  const includeNumbers = IncludeNumbersElement.checked;
  const includeSymbols = IncludeSymbolsElement.checked;

  const Password = GeneratePassword(
    CharacterAmount,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );

  PasswordValue.innerText = Password;
  PasswordValue.style.color = "var(--almost-white)";

  // Checkbox Validation Here Important
  if (
    IncludeUppercaseElement.checked !== true &&
    IncludeLowercaseElement.checked !== true &&
    IncludeNumbersElement.checked !== true &&
    IncludeSymbolsElement.checked !== true
  ) {
    ErrorMessage.style.visibility = "visible";
    PasswordValue.innerText = "Select A Checkbox!!";
    PasswordValue.style.color = "hsl(0, 91%, 63%)";
    ErrorMessage.style.animation = "opacity 350ms ease-in";
  } else {
    ErrorMessage.style.visibility = "hidden";
  }
});

// Function to Combine all Character data to form an password
function GeneratePassword(
  CharacterAmount,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) {
  let charCodes = [];
  if (includeLowercase) charCodes = LOWERCASE_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);

  const PasswordElements = [];
  for (let i = 0; i < CharacterAmount; i++) {
    const CharacterCodes =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    PasswordElements.push(String.fromCharCode(CharacterCodes));
  }
  return PasswordElements.join("");
}

// Function to Generate Array which contains ASCII Codes
function ArrayFromLowToHigh(low, high) {
  const Array = [];
  for (let i = low; i <= high; i++) {
    Array.push(i);
  }
  return Array;
}

// Slider Progress Bar Color Calculation Function
setBackgroundSize(input);
input.addEventListener("input", () => setBackgroundSize(input));

function getBackgroundSize(input) {
  const min = input.min;
  const max = input.max;
  const value2 = input.value;

  const size = ((value2 - min) / (max - min)) * 100;
  return size;
}

function setBackgroundSize(input) {
  input.style.setProperty("--background-size", `${getBackgroundSize(input)}%`);
}

// Copy Function
CopyButton.addEventListener("click", CopyFunction);

function CopyFunction() {
  const copy = navigator.clipboard;
  copy
    .writeText(PasswordValue.innerText)
    .then(() => CopyMessage.classList.remove("none"));

  CopyMark.classList.add("none");
  CheckMark.classList.remove("none");

  setTimeout(() => {
    CopyMessage.classList.add("none");
    CopyMark.classList.remove("none");
    CheckMark.classList.add("none");
  }, 1000);
}

// Range Display
RangeInput.oninput = function () {
  value = RangeInput.value;
  RangeDisplay.innerText = value;

  if (value <= 1) {
    StrengthMessage.innerHTML = "";
    TooWeak.classList.remove("bg-red");
    TooWeak.classList.remove("no-bg");

    WeakAll.forEach((weak) => {
      weak.classList.remove("bg-orange");
      weak.classList.remove("no-bg");
    });

    MediumAll.forEach((medium) => {
      medium.classList.remove("bg-yellow");
      medium.classList.remove("no-bg");
    });

    StrongAll.forEach((strong) => {
      strong.classList.remove("bg-green");
      strong.classList.remove("no-bg");
    });
  } else if (value <= 6) {
    StrengthMessage.innerHTML = "too weak";
    TooWeak.classList.add("bg-red");

    WeakAll.forEach((weak) => {
      weak.classList.remove("bg-orange");
      weak.classList.remove("no-bg");
    });

    MediumAll.forEach((medium) => {
      medium.classList.remove("bg-yellow");
      medium.classList.remove("no-bg");
    });

    StrongAll.forEach((strong) => {
      strong.classList.remove("bg-green");
      strong.classList.remove("no-bg");
    });
  } else if (value <= 10) {
    StrengthMessage.innerHTML = "weak";

    WeakAll.forEach((weak) => {
      weak.classList.add("bg-orange");
      weak.classList.remove("no-bg");
    });

    MediumAll.forEach((medium) => {
      medium.classList.remove("bg-yellow");
      medium.classList.remove("no-bg");
    });

    StrongAll.forEach((strong) => {
      strong.classList.remove("bg-green");
      strong.classList.remove("no-bg");
    });
  } else if (value <= 15) {
    StrengthMessage.innerHTML = "medium";

    MediumAll.forEach((medium) => {
      medium.classList.add("bg-yellow");
      medium.classList.remove("no-bg");
    });

    StrongAll.forEach((strong) => {
      strong.classList.remove("bg-green");
      strong.classList.remove("no-bg");
    });
  } else if ((value) => 16) {
    StrengthMessage.innerHTML = "strong";

    StrongAll.forEach((strong) => {
      strong.classList.add("bg-green");
      strong.classList.remove("no-bg");
    });
  }
};

// Reset Button
ResetButton.addEventListener("click", () => {
  ResetAll();
});

function ResetAll() {
  RangeInput.value = 0;
  RangeDisplay.innerText = 0;
  Allbar.forEach((all) => {
    all.classList.add("no-bg");
  });
  StrengthMessage.innerHTML = "";
  ErrorMessage.style.visibility = "hidden";
  PasswordValue.innerText = "P4$5W0rD!JSgT";
  PasswordValue.style.color = "var(--light-gray)";
  input.style.setProperty("--background-size", `0%`);
}

// Ripple Effect
const Ripple = document.querySelectorAll(".ripples");

Ripple.forEach((ripple) => {
  ripple.addEventListener("click", function (e) {
    let x = e.clientx - e.target.offsetLeft;
    let y = e.clienty - e.target.offsetTop;

    let Ripples = document.createElement("span");
    Ripples.style.left = x + "px";
    Ripples.style.top = y + "px";
    this.appendChild(Ripples);

    setTimeout(() => {
      Ripples.remove();
    }, 10000);
  });
});

// All the Animations

const Links = document.querySelectorAll(".link");

Links.forEach((link, index) => {
  if(link.style.animation) {
    link.style.animation = ''
  } else {
    link.style.animation = `navSlide 0.8s ease ${index / 7}s`;
  }
});

Allbar.forEach((bar, i) => {
  if(bar.style.animation) {
    bar.style.animation = ''
  } else {
    bar.style.animation = `navSlide 1s ease ${i / 5}s`
  }
})