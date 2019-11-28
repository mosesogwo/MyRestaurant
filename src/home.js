const homeInfo = () => {
  const newDiv = document.createElement("div");
  const msgTitle = document.createElement('h4');
  msgTitle.classList.add("text-center");
  msgTitle.textContent = "Welcome to MyRestaurant";
  const msg = document.createElement("p");
  msg.classList.add("text-center");
  msg.textContent = "Home of good food & quality service!";
  newDiv.appendChild(msgTitle);
  newDiv.appendChild(msg);
  
  return newDiv;
};

export { homeInfo }