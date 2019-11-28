const addHeader = () => {
  const header = document.createElement("h1");
  header.textContent = "MyRestaurant";
  return header;
}

const addNav = () => {
  const nav = document.createElement("nav");
  nav.classList.add("bg-light");
  const ulist = document.createElement("ul");
  ulist.classList.add("nav", "nav-tabs")
  for (let i=0; i<3; i++) {
    const list = document.createElement("li");
    list.classList.add("nav-item");
    const link = document.createElement("a");
    link.textContent = "Link Show!";
    link.setAttribute('href', '#');
    link.classList.add("nav-link");
    list.appendChild(link);
    ulist.appendChild(list);
  }
  nav.appendChild(ulist);

  const links = nav.querySelectorAll(".nav-link");
  links[0].innerHTML = "Home";
  links[0].setAttribute("id", "home");
  links[1].innerHTML = "Menu";
  links[1].setAttribute("id", "menu");
  links[2].innerHTML = "Contact";
  links[2].setAttribute("id", "contact");

  return nav;
}

export { addHeader, addNav }
  