const contactInfo = () => {
  const newDiv = document.createElement("div");
  const msgTitle = document.createElement('h4');
  msgTitle.classList.add("text-center", "mr-5");
  msgTitle.textContent = "Visit Us";
  const msg = document.createElement("p");
  msg.classList.add("text-center", "mr-5");
  msg.textContent = "38, LLL Street, MyRestaurant, Nigeria | 080 000 000 000";
  newDiv.appendChild(msgTitle);
  newDiv.appendChild(msg);

  return newDiv;
}

export { contactInfo }