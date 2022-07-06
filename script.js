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

$(document).ready(function () {
  var sliderCard = $("#sliderCard");
  var sliderDailyLogin = $("#sliderDailyLogin");

  sliderCard.owlCarousel({
    loop: false,
    center: false,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      320: {
        items: 1,
      },
    },
  });

  sliderDailyLogin.owlCarousel({
    loop: false,
    center: false,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      390: {
        items: 3,
        margin: 50,
      },
    },
  });
});
