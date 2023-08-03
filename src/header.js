function Createheader() {
  const header = document.createElement("header");

  const title = document.createElement("h1");
  title.classList.add("restaurent-name");
  title.innerHTML = "Dom Corleone";

  header.appendChild(title);
  header.appendChild(creatNav());

  return header;
}

function creatNav() {
  const nav = document.createElement("div");
  nav.classList.add("nav");
  const homelink = document.createElement("a");
  const menulink = document.createElement("a");
  const contactlink = document.createElement("a");

  homelink.classList.add("links");
  homelink.setAttribute("id", "homelink");
  homelink.innerHTML = "Home";

  menulink.classList.add("links");
  menulink.setAttribute("id", "menulink");
  menulink.innerHTML = "Menu";

  contactlink.classList.add("links");
  contactlink.setAttribute("id", "contactlink");
  contactlink.innerHTML = "Contact";

  nav.appendChild(homelink);
  nav.appendChild(menulink);
  nav.appendChild(contactlink);

  return nav;
}

export default Createheader();
