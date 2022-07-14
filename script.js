document.querySelectorAll(".navbar-brand").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const iconLogin = document.getElementById("eyeIcon");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    iconLogin.classList.add("bi-eye-slash-fill");
  } else {
    passwordInput.type = "password";
    iconLogin.classList.remove("bi-eye-slash-fill");
  }
}

function toggleConfirmPassword() {
  const passwordInput = document.getElementById("confirmPassword");
  const iconLogin = document.getElementById("eyeIconRegister");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    iconLogin.classList.add("bi-eye-slash-fill");
  } else {
    passwordInput.type = "password";
    iconLogin.classList.remove("bi-eye-slash-fill");
  }
}

// let progressBar = document.querySelector(".circular-progress");
// let valueContainer = document.querySelector(".value-container");

// let progressValue = 0;
// let progressEndValue = 35;
// let speed = 10;

// let progress = setInterval(() => {
//   progressValue++;
//   valueContainer.textContent = `${progressValue}M to Diamond`;
//   progressBar.style.background = `conic-gradient(
//       #FFBF00 ${progressValue * 3.6}deg,
//       #FF7A00 ${progressValue * 3.6}deg
//   )`;
//   if (progressValue == progressEndValue) {
//     clearInterval(progress);
//   }
// }, speed);

// let number = document.getElementById("number");
// let counter = 0;
// let counterEnd = 50;

// let setProgress = setInterval(() => {
//   counter++;
//   number.textContent = `${counter}M to Diamond`;
//   if (counter == counterEnd) {
//     clearInterval(setProgress);
//   }
// }, 38);
