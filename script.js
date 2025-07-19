// constants
const form = document.getElementById("form");
const nameEl = document.getElementById("name");
const phoneEl = document.getElementById("phone");
const emailEl = document.getElementById("email");
const websiteEl = document.getElementById("website");
const pwdEl = document.getElementById("pwd");
const pwdConfirmEl = document.getElementById("pwd-confirm");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

function paintModeElement(color) {
  pwdEl.style.borderColor = color;
  pwdConfirmEl.style.borderColor = color;
  messageContainer.style.borderColor = color;
  message.style.color = color;
}

// function to show successfully Registered! message with green box & pwd green
function successMode() {
  // chaning colors
  paintModeElement("green");
  message.textContent = "Successfully Registered!";
}

// function to redize pwds elements and message
function passwordMissMatchMode() {
  paintModeElement("red");
  message.textContent = "Make sure passwords match.";
}

// Stores form values (aka: just printing it into console.)
function storeFormValue() {
  //   const nameEl = document.getElementById("name");
  // const phoneEl = document.getElementById("phone");
  // const emailEl = document.getElementById("email");
  // const websiteEl = document.getElementById("website");
  // const pwdEl = document.getElementById("pwd");
  // const pwdConfirmEl = document.getElementById("pwd-confirm");
  const data = {
    name: nameEl.value,
    phone: form.phone.value,
    email: emailEl.value,
    website: websiteEl.value,
    password: pwdEl.value,
  };
  console.log(data);
}

function handleSubmit(e) {
  e.preventDefault();
  //* you got here: so each element in form is valid
  // check password match
  if (pwdEl.value === pwdConfirmEl.value) {
    successMode();
  } else {
    passwordMissMatchMode();
    return; // stops here if password mismatch
  }

  // store values
  storeFormValue();
}
// Event Listener
form.addEventListener("submit", handleSubmit);
