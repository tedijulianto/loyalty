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

var sliderCard = $("#sliderCard");
var cardIndex = 1;

sliderCard
  .on("initialized.owl.carousel", function () {
    sliderCard.find(".owl-item").eq(cardIndex).addClass("activeCard");
  })
  .owlCarousel({
    startPosition: cardIndex,
    loop: false,
    center: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1.15,
        margin: 16,
      },
      412: {
        items: 1.15,
        margin: 20,
      },
    },
  });

var swiperBanner = new Swiper(".swiper-banner", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var acc = document.getElementsByClassName("accordion-news");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var newsDetail = this.nextElementSibling;
    if (newsDetail.style.maxHeight) {
      newsDetail.style.maxHeight = null;
    } else {
      newsDetail.style.maxHeight = newsDetail.scrollHeight + "px";
    }
  });
}

function activeDailyLogin(num) {
  var a = $(".swiper-dailyLogin").eq(num);
  $(a).toggleClass("active");
}

var index = 0;
var swiperDailyLogin = new Swiper(".swiper__dailyLogin", {
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
  },
});

var loadFile = function (event) {
  var image = document.getElementById("profilePic");
  image.src = URL.createObjectURL(event.target.files[0]);
};

$(".btn-changeProfile").on("click", function () {
  // $("#file")[0].click();
  document.getElementById("changeImageProfile").click();
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
