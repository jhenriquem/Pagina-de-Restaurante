import { Menupage, Homepage, Contactpage } from "./sections.js";
import Createheader from "./header.js";

function activelinksSections() {
  const links = document.querySelectorAll(".links");
  const main = document.getElementById("main");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      main.textContent = "";
      if (link.id === "homelink") {
        main.appendChild(Homepage());
      } else if (link.id === "menulink") {
        main.appendChild(Menupage());
      } else if (link.id === "contactlink") {
        main.appendChild(Contactpage());
      }
    });
  });
}
function createMain() {
  const main = document.createElement("main");
  main.setAttribute("id", "main");
  main.appendChild(Homepage());
  return main;
}

function loadWebsite() {
  const content = document.getElementById("content");
  content.appendChild(Createheader);
  content.appendChild(createMain());

  activelinksSections();
}

export default loadWebsite();
