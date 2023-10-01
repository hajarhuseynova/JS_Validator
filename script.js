const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmPassword");

function success(input) {
  input.className = "form-control is-valid";
}
function error(input, message) {
  input.className = "form-control is-invalid";
  const errorMessage = input.nextElementSibling;
  errorMessage.innerText = message;
  errorMessage.className = "invalid-feedback";
}
function checkEmail(input) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(input.value)) {
    success(input);
  } else {
    error(input, "Email must be email format");
  }
}
function checkRequired(inputs) {
  inputs.forEach(function (input) {
    if (input.value === "") {
      error(input, `${input.id} is required!`);
    } else {
      success(input);
    }
  });
}
function checkLength(input, min, max) {
  if (input.value.length < min) {
    error(input, `${input.id} must be min ${min} character`);
  } else if (input.value.length > max) {
    error(input, `${input.id} must be max ${max} character`);
  } else {
    success(input);
  }
}
function checkPasswords(input1, input2) {
  if (input1.value !== input2.value) {
    error(input2, "It must be the same");
  }
}
function checkPhone(input) {
  var exp = /^\d{10}$/;
  if (!exp.test(input.value)) {
    error(input, "Input must be 10 character");
  } else {
    success(input);
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, number, password, confirmpassword]);
  checkEmail(email);
  checkLength(username, 7, 15);
  checkLength(password, 7, 14);
  checkPasswords(password, confirmpassword);
  checkPhone(number);
});
