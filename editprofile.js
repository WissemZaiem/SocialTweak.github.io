document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const usernameInput = document.getElementById("username");
    const oldPasswordInput = document.getElementById("password1");
    const newPasswordInput = document.getElementById("password2");
    const confirmPasswordInput = document.getElementById("password3");
    const messageDiv = document.getElementById("message");

    messageDiv.textContent = ""; 

   
    if (
      usernameInput.value.trim() === "" ||
      oldPasswordInput.value.trim() === "" ||
      (oldPasswordInput.value.trim() !== "" &&
        (newPasswordInput.value.trim() === "" ||
          confirmPasswordInput.value.trim() === ""))
    ) {
      showMessage("Please fill in all required fields.", messageDiv);
      return;
    }

   
    if (oldPasswordInput.value.trim() !== "") {
      if (!isValidPassword(oldPasswordInput.value)) {
        showMessage(
          "Old password must be at least 8 characters with one uppercase, one lowercase, one number, and one symbol.",
          messageDiv
        );
        return;
      }

     
      if (newPasswordInput.value.trim() === "") {
        showMessage("Please enter a new password.", messageDiv);
        return;
      }

      
      if (!isValidPassword(newPasswordInput.value)) {
        showMessage(
          "New password must be at least 8 characters with one uppercase, one lowercase, one number, and one symbol.",
          messageDiv
        );
        return;
      }

     
      if (confirmPasswordInput.value.trim() === "") {
        showMessage("Please confirm your new password.", messageDiv);
        return;
      }

      if (newPasswordInput.value !== confirmPasswordInput.value) {
        showMessage(
          "Passwords do not match. Please re-enter the same password in the confirm password field.",
          messageDiv
        );
        return;
      }
    }

    
    showMessage("Account successfully updated", messageDiv, "green");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000); 
  });

document.getElementById("password1").addEventListener("input", function () {
  const newPasswordInput = document.getElementById("password2");
  const confirmPasswordInput = document.getElementById("password3");

  
  if (this.value.trim() !== "") {
    newPasswordInput.disabled = false;
    confirmPasswordInput.disabled = false;
  } else {
   
    newPasswordInput.value = "";
    confirmPasswordInput.value = "";
    newPasswordInput.disabled = true;
    confirmPasswordInput.disabled = true;
  }
});

function isValidPassword(password) {
  
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

function showMessage(message, targetElement, color = "red") {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageElement.style.color = color;
  targetElement.appendChild(messageElement);
}
