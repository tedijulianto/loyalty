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

$(document).ready(function () {
  var sliderCard = $("#sliderCard");
  // var sliderDailyLogin = $("#sliderDailyLogin");

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

  // sliderDailyLogin.owlCarousel({
  //   loop: false,
  //   center: false,
  //   nav: false,
  //   dots: false,
  //   responsive: {
  //     0: {
  //       items: 2,
  //     },
  //     390: {
  //       items: 3,
  //       margin: 50,
  //     },
  //   },
  // });
});

function activeDailyLogin(num) {
  var a = $(".swiper-slide").eq(num);
  // if ($(this).find("swiper-slide-active")) {
  $(a).toggleClass("active");
  // } else {
  //   $(".swiper-slide").removeClass("active");
  // }
}
var index = 0;
var swiper = new Swiper(".mySwiper", {
  initialSlide: index,
  slidesPerView: 2,
  loop: false,
  breakpoints: {
    360: {
      slidesPerView: 2.3,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 2.4,
      spaceBetween: 5,
    },
    390: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    412: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
  },
  on: {
    init: activeDailyLogin(index), // do also on init
    // slideChange: activeDailyLogin, // is this needed?
  },
});

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
