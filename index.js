const menuItems = document.querySelectorAll(".menu-item");

const messagesNotification = document.querySelector("#messages-notification");
const Createpostglow = document.querySelector("#createpostglow");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");
const cpost = document.querySelector(".create-post");

const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

const fontSizes = document.querySelectorAll(".choose-size span");
const root = document.querySelector(":root");

const colorPalette = document.querySelectorAll(".choose-color span");

const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.toggle("active");

    if (item.id === "notifications") {
      const notificationsPopup = document.querySelector(".notifications-popup");
      const notificationNumber = document.querySelector(
        "#notifications .notification-number"
      );
      if (
        notificationsPopup.style.display === "none" ||
        notificationsPopup.style.display === ""
      ) {
        notificationsPopup.style.display = "block";
        notificationNumber.style.display = "none";
      } else {
        notificationsPopup.style.display = "none";
        notificationNumber.style.display = "block";
      }
    } else {
      document.querySelector(".notifications-popup").style.display = "none";
    }
  });
});

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) !== -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  (messagesNotification.querySelector(
    "#messages-notification .notification-number"
  ).style.display = "none"),
    setTimeout(() => {
      messages.style.boxShadow = "none";
    }, 2000);
});

Createpostglow.addEventListener("click", () => {
  cpost.style.boxShadow = "0 0 1rem var(--color-primary)";
  setTimeout(() => {
    cpost.style.boxShadow = "none";
  }, 2000);
});

const openThemeModal = () => {
  themeModal.style.display = "grid";
};

theme.addEventListener("click", openThemeModal);

const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

themeModal.addEventListener("click", closeThemeModal);

const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }

    document.querySelector("html").style.fontSize = fontSize;
  });
});

const changeActiveColorClass = () => {
  colorPalette.forEach((color) => {
    color.classList.remove("active");
  });
};

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    changeActiveColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBackground = () => {
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

bg1.addEventListener("click", () => {
  bg1.classList.add("active");

  bg2.classList.remove("active");
  bg3.classList.remove("active");

  window.location.reload();
});

bg2.addEventListener("click", () => {
  whiteColorLightness = "20%";
  lightColorLightness = "15%";
  darkColorLightness = "95%";

  bg2.classList.add("active");

  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBackground();
});

bg3.addEventListener("click", () => {
  whiteColorLightness = "10%";
  lightColorLightness = "0%";
  darkColorLightness = "95%";

  bg2.classList.add("active");

  bg1.classList.remove("active");
  bg2.classList.remove("active");
  changeBackground();
});

function handleDeclineClick(event) {
  const requestElement = event.target.closest(".request");

  requestElement.classList.add("slide-out");

  requestElement.addEventListener("animationend", function () {
    requestElement.remove();
  });
}

const declineButtons = document.querySelectorAll(
  ".request .action .btn:not(.btn-primary)"
);

declineButtons.forEach(function (declineButton) {
  declineButton.addEventListener("click", handleDeclineClick);
});

const heartIcon1 = document.getElementById("heartIcon1");

heartIcon1.addEventListener("click", function () {
  heartIcon1.classList.toggle("red");
});

const heartIcon2 = document.getElementById("heartIcon2");

heartIcon2.addEventListener("click", function () {
  heartIcon2.classList.toggle("red");
});

const heartIcon3 = document.getElementById("heartIcon3");

heartIcon3.addEventListener("click", function () {
  heartIcon3.classList.toggle("red");
});

const heartIcon4 = document.getElementById("heartIcon4");

heartIcon4.addEventListener("click", function () {
  heartIcon4.classList.toggle("red");
});

const heartIcon5 = document.getElementById("heartIcon5");

heartIcon5.addEventListener("click", function () {
  heartIcon5.classList.toggle("red");
});

const heartIcon6 = document.getElementById("heartIcon6");

heartIcon6.addEventListener("click", function () {
  heartIcon6.classList.toggle("red");
});

const heartIcon7 = document.getElementById("heartIcon7");

heartIcon7.addEventListener("click", function () {
  heartIcon7.classList.toggle("red");
});

function handleAcceptButtonClick(event) {
  event.preventDefault();

  const acceptButton = event.target;
  const requestElement = acceptButton.closest(".request");

  requestElement.style.transition = "opacity 2s";
  requestElement.style.opacity = 0;

  acceptButton.innerHTML = "is now your friend";

  acceptButton.classList.add("clicked");
}

const acceptButtons = document.querySelectorAll(".btn-primary");
acceptButtons.forEach((button) => {
  button.addEventListener("click", handleAcceptButtonClick);
});

document.getElementById("accept1").addEventListener("click", function () {
  document.getElementById("decline1").style.display = "none";

  this.disabled = true;
});

document.getElementById("accept2").addEventListener("click", function () {
  document.getElementById("decline2").style.display = "none";

  this.disabled = true;
});

document.getElementById("accept3").addEventListener("click", function () {
  document.getElementById("decline3").style.display = "none";

  this.disabled = true;
});

const disconnectDiv = document.getElementById("disconnect");

disconnectDiv.addEventListener("click", function () {
  window.location.href = "signup.html";
});

const bookmarks = document.querySelectorAll(".bookmark");

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("active");
  });
});
