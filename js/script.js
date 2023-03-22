const link = document.querySelector(".write-link");
const popup = document.querySelector(".modal-login");
const close = document.querySelector(".modal-close");
const login = popup.querySelector("[name=user-name]");
const email = popup.querySelector("[name=email]");
const form = popup.querySelector("form");
link.addEventListener("click", function (evt) {evt.preventDefault(); popup.classList.add("modal-show"); login.focus(); });
close.addEventListener("click", function (evt) {evt.preventDefault(); popup.classList.remove("modal-show"); })
form.addEventListener("submit", function (evt) {evt.preventDefault(); console.log("user-name.value"); console.log("email.value"); });
window.addEventListener("keydown", function (evt) { if (evt.keyCode === 27) { if (popup.classList.contains("modal-show")) { evt.preventDefault(); popup.classList.remove("modal-show"); }}} );