let signinBtn = document.querySelector(".signinBtn");
let signupBtn = document.querySelector(".signupBtn");
let body = document.querySelector("body");
signupBtn.onclick = function () {
  body.classList.add("slide");
};
signinBtn.onclick = function () {
  body.classList.remove("slide");
};

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameValue = document.getElementById("username").value.trim();
    const passwordValue = document.getElementById("password").value.trim();

    if (!usernameValue && !passwordValue) {
      alert("Please enter your username and password.");
      return;
    }

    if (!usernameValue) {
      alert("Please enter your username.");
      return;
    }

    if (!passwordValue) {
      alert("Please enter your password.");
      return;
    }

    window.location.href = "index.html";
  });

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameValue1 = document.getElementById("username1").value.trim();
    const emailValue = document.getElementById("email").value.trim();
    const passwordValue1 = document.getElementById("password1").value;
    const confirmPasswordValue =
      document.getElementById("confirmPassword").value;

    if (
      !usernameValue1 ||
      !emailValue ||
      !passwordValue1 ||
      !confirmPasswordValue
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      alert("Please enter a valid email address.");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(passwordValue1)) {
      alert(
        "Please enter a password that has at least 8 characters, at least one uppercase character, one lowercase character, one number, and one special character (@$!%*?&)."
      );
      return;
    }

    if (passwordValue1 !== confirmPasswordValue) {
      alert(
        "Passwords do not match. Please re-enter the same password in both fields."
      );
      return;
    }

    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    document.getElementById("signupForm").reset();
  });
