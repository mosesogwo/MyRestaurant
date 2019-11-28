import { addHeader, addNav } from './header';
import { homeInfo } from './home';
import { menuList } from './menu';
import { contactInfo } from './contact';
import './style.css';

const loadPage = (() => {
  const content = document.querySelector('#content');
  content.classList.add("text-center", "py-5");
  content.appendChild(addHeader());
  content.appendChild(addNav());
  const newDiv = document.createElement('div');
  // newDiv.classList.add("h-25", "mt-5");
  newDiv.classList.add("tab");
  newDiv.appendChild(homeInfo());
  content.appendChild(newDiv);

  const homeBtn = document.querySelector("#home");
  homeBtn.addEventListener('click', () => {
    newDiv.innerHTML = '';
    newDiv.appendChild(homeInfo());
  });

  const menuBtn = document.querySelector("#menu");
  menuBtn.addEventListener("click", () => {
    newDiv.innerHTML = '';
    newDiv.appendChild(menuList());
  });

  const contactBtn = document.querySelector("#contact");
  contactBtn.addEventListener("click", () => {
    newDiv.innerHTML = '';
    newDiv.appendChild(contactInfo());
  });
})();
