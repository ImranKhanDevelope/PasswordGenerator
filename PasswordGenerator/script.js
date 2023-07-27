let lengthSpan = document.querySelector(".lengthSpan");
let rangeLength = document.querySelector("#length");

rangeLength.addEventListener("input", () => {
  lengthSpan.textContent = rangeLength.value;
});

document.querySelectorAll(".toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const checkbox = toggle.previousElementSibling;
    checkbox.checked = !checkbox.checked;
  });
});

document.querySelector(".fa-copy").addEventListener("click", function () {
  let randomPassword = document.querySelector(".password");
  let copied = document.querySelector(".copied");

  randomPassword.select();
  navigator.clipboard.writeText(randomPassword.value).then(() => {
    copied.innerHTML = "Password Copied";
    copied.style.display = "block";
    setTimeout(() => {
      copied.style.display = "none";
    }, 2000);
  });
});

document.querySelector(".generate").addEventListener("click", function () {
  let length = document.querySelector("#length").value;
  let uppercase = document.querySelector("#uppercase").checked;
  let number = document.querySelector("#numbers").checked;
  let symbol = document.querySelector("#symbols").checked;
  let lowerCases = "abcdefghijklmnopqrstuvwxyz";
  let uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "1234567890";
  let symbols = "!@#$%^&*()_+/*-{}[]=:'|;<>?,./";

  let allChars = lowerCases;
  if (uppercase) {
    allChars += uppercases;
  }
  if (number) {
    allChars += numbers;
  }
  if (symbol) {
    allChars += symbols;
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * allChars.length);
    password += allChars[random];
  }
  let passwordInput = document.querySelector(".password");
  passwordInput.value = password;
});
// Existing JavaScript code

// Function to toggle theme
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light-theme");
  body.classList.toggle("dark-theme");
}

// Event listener for theme switch button
const themeSwitchBtn = document.getElementById("themeSwitchBtn");
themeSwitchBtn.addEventListener("click", toggleTheme);
