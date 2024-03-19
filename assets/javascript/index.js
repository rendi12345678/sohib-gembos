const body = document.body;
const toggleButton = document.querySelector("header button");
const downloadBtn = document.querySelector(".download-btn");
const darkModeThemeKey = "dark-mode";
const darkModeThemeButtonText = "Mode Gelap";
const lightModeThemeButtonText = "Mode Cerah";
const lightModeThemeKey = "light-mode";

toggleButton.addEventListener("click", function () {
  body.classList.toggle(darkModeThemeKey);

  if (body.className === darkModeThemeKey) {
    setToLocalStorage("theme", darkModeThemeKey);
    setButtonText(toggleButton, lightModeThemeButtonText);

    return;
  }

  setToLocalStorage("theme", lightModeThemeKey);
  setButtonText(toggleButton, darkModeThemeButtonText);
});

function setToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function setButtonText(element, value) {
  element.textContent = value;
}

function getDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function checkUserTheme() {
  const userTheme = getDataFromLocalStorage("theme") || darkModeThemeKey;

  if (userTheme === darkModeThemeKey) {
    body.classList.add(darkModeThemeKey);
    setButtonText(toggleButton, lightModeThemeButtonText);
    return;
  }

  setButtonText(toggleButton, darkModeThemeButtonText);
}

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 30;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", reveal);
  reveal();
  checkUserTheme();
});
