import DOMContent from "./src/core/router/router.js";
import "./src/styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("root").innerHTML = DOMContent;
});
