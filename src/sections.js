//-----------------------------------------------------------------------------
//       H O M E  P A G E
//-----------------------------------------------------------------------------
export function Homepage() {
  const home = document.createElement("section");
  home.classList.add("homepage");

  const description = document.createElement("div");
  const title = document.createElement("h1");
  title.setAttribute("id", "title");
  title.innerHTML = `Descubra a autêntica paixão<br>italiana em cada fatia. `;

  const paragraph = document.createElement("legend");
  paragraph.innerHTML = `Nossa pizzaria oferece uma experiência gastronômica única,<br>
com sabores tradicionais e ingredientes selecionados.<br>
Delicie-se com nossas pizzas artesanais e deixe-se levar para a Itália em cada mordida.<br>
Bom apetite!
    `;
  description.appendChild(title);
  description.appendChild(paragraph);

  home.appendChild(description);

  return home;
}
//-----------------------------------------------------------------------------
//       M E N U   P A G E
//-----------------------------------------------------------------------------

export function Menupage() {
  const menu = document.createElement("section");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Salsiccia",
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    )
  );

  menu.appendChild(
    createMenuItem(
      "Colorato",
      "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pomodoro",
      "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Crema",
      "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Carne",
      "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
    )
  );

  return menu;
}
function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const Name = document.createElement("h2");
  Name.textContent = name;

  const Description = document.createElement("p");
  Description.textContent = description;

  const Image = document.createElement("img");
  Image.src = `imgs/pizzas/${name.toLowerCase()}.png`;
  Image.alt = `${name}`;

  menuItem.appendChild(Image);
  menuItem.appendChild(Name);
  menuItem.appendChild(Description);

  return menuItem;
}

//-----------------------------------------------------------------------------
//       C O N T A C T  P A G E
//-----------------------------------------------------------------------------

export function Contactpage() {
  const contact = document.createElement("section");
  contact.classList.add("contact");
  const data = document.createElement("div");
  data.setAttribute("id", "contact-data");
  data.innerHTML = `
31 415 926 535<br><br>
Hollywood Boulevard 42, Los Angeles, EUA

`;
  const img_location = document.createElement("img");
  img_location.src = "imgs/restaurant-location.png";
  img_location.alt = "Location";

  contact.appendChild(data);
  contact.appendChild(img_location);

  return contact;
}
