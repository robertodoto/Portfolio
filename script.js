const sorry = document.getElementById("sorry");
const button = document.getElementById("showprojects");
const show() {
    sorry.style.visibility = "visible";
}
sorry.style.visibility = "hidden";

button.addEventListener(click, show);