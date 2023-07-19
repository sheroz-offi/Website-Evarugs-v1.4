let dc = document;
let bd = dc.body;

//!_____________________Модальное окно____________________________
// Найти модальное окно и кнопку для закрытия
let ModalWin = dc.querySelector(".modal");
let ModalBtnClose = dc.querySelector(".close");

// Функция для открытия модального окна
function openModal() {
  ModalWin.style.display = "block";
  bd.style.overflow = "hidden";
}

// Слушаем событие нажатия на клавишу "ESC"
dc.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Функция для закрытия модального окна
function closeModal() {
  ModalWin.style.display = "none";
  bd.style.overflow = "auto";
}

// Закрыть модальное окно при щелчке на крестик
ModalBtnClose.onclick = closeModal;

// Закрыть модальное окно, если пользователь кликнет за его пределами
window.onclick = function (event) {
  if (event.target == ModalWin) {
    closeModal();
  }
};

//!_____________________ Блок коментарии ____________________________
//Найти блок коментариев
let BlockComment1 = dc.querySelector(".com1");
let BlockComment2 = dc.querySelector(".com2");
let BlockComment3 = dc.querySelector(".com3");

//___________________________________________________________
let offset = 0;
let BlockComments = dc.querySelector(".main-comments");

window.addEventListener("resize", function () {
  if (window.innerWidth <= 990) {
    BlockComments.style.left = "0";
    BlockComment1.style.opacity = "1";
    BlockComment2.style.opacity = "1";
    BlockComment3.style.opacity = "1";
    dc.removeEventListener("keydown", handleSlider);
  } else {
    dc.addEventListener("keydown", handleSlider);
  }
});

function handleSlider(event) {
  if (event.key === "ArrowRight") {
    offset = offset + 750;
    if (offset > 750) {
      offset = -750;
    }
    BlockComments.style.left = -offset + "px";
  } else if (event.key === "ArrowLeft") {
    offset = offset - 750;
    if (offset < -750) {
      offset = 750;
    }
    BlockComments.style.left = -offset + "px";
  }

  if (BlockComments.style.left === "-750px") {
    BlockComment3.style.opacity = "1";
    BlockComment2.style.opacity = "0.5";
    BlockComment1.style.opacity = "0.5";
  } else if (BlockComments.style.left === "750px") {
    BlockComment1.style.opacity = "1";
    BlockComment2.style.opacity = "0.5";
    BlockComment3.style.opacity = "0.5";
  } else {
    BlockComment2.style.opacity = "1";
    BlockComment1.style.opacity = "0.5";
    BlockComment3.style.opacity = "0.5";
  }
}

if (window.innerWidth > 750) {
  document.addEventListener("keydown", handleSlider);
}

//!_____________________Мое местоположение____________________________
function getCity() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showCity);
  } else {
    console.log("Геолокация не поддерживается вашим браузером");
  }
}

function showCity(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var url =
    "https://nominatim.openstreetmap.org/reverse?format=json&lat=" +
    latitude +
    "&lon=" +
    longitude;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      dc.getElementById("userCity").textContent = data.address.city;
      dc.getElementById("userCity1").textContent = data.address.city;
    })
    .catch((error) => {
      console.log("Ошибка получения данных города", error);
    });
}

getCity();

//!_________AOS_____________
AOS.init();

//!________Dragula__________

dragula([dc.querySelector(".row")]);

//!________________________________________ClientWidth and ClientHeight________________________
let mainElement = dc.documentElement;
let mainElementWidth = mainElement.clientWidth;
let mainElementHeight = mainElement.clientHeight;

//?________Авто нахождение Ширины и Длинны_______________________
let mainInnerHeight = window.innerHeight;
let mainInnerWidth = window.innerWidth;

/* window.onresize = function () {
  console.log(window.innerWidth, window.innerHeight);
}; */

//?________Авто нахождение Клиента в сайте_______________________
let windowScrollTop = window.pageYOffset; //top
let windowScrollLeft = window.pageXOffset; //left

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY; // Получаем текущую позицию прокрутки
  /* console.log("Позиция прокрутки:", scrollPosition); */
  if (scrollPosition === 2700 || scrollPosition === 1500) {
    alert("Рома от вас 30м он ждет вашего звонка!");
  }
});

//?________Якорь_______________________Z

let btnReviews = dc.querySelector(".reviews"); //отзывы
let btnWhatIsThis = dc.querySelector(".whatIsThis"); //что это
let btnContacts = dc.querySelector(".contacts"); //контакты

btnReviews.addEventListener("click", () => {
  event.preventDefault(); //чтобы выключить перезагрузку страницы
  window.scrollTo({ top: 1500, left: 0, behavior: "smooth" });
});
btnWhatIsThis.addEventListener("click", () => {
  event.preventDefault(); //чтобы выключить перезагрузку страницы
  window.scrollTo({ top: 800, left: 0, behavior: "smooth" });
});
btnContacts.addEventListener("click", () => {
  event.preventDefault(); //чтобы выключить перезагрузку страницы
  window.scrollTo({ top: 4000, left: 0, behavior: "smooth" });
});

//?________________________Отключение слайдера______________________Z
