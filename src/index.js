alert("Hello I am an alert box")

import "./style.css";

import odinImage from "./assets/pasta.jpg";



import { loadPage } from "./content.js";

document.addEventListener("DOMContentLoaded", () => {
  loadPage(); // sayfa yüklendiğinde çalıştır
});

let menuDiv = document.getElementById("menu");
import { menu } from "./menu.js";
menuDiv.addEventListener("click", () => {
    menu();
} )

let aboutDiv = document.getElementById("about");
import { aboutUs } from "./about.js";
aboutDiv.addEventListener("click", () => {
    aboutUs();
} )

let homeDiv = document.getElementById("Home");
homeDiv.addEventListener("click", () => {
  loadPage();   // 👈 Home için tekrar aynı fonksiyonu çağırıyoruz
});

