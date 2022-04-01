"use strict";

const main = document.querySelector(".main");
const mainSection = document.querySelector(".fa-comment");

mainSection.addEventListener("click", () => {
  main.classList.add("hide");
  const msg = document.querySelector(".msg");
  msg.classList.add("main");
  msg.style.display = "block";

  console.log(msg);
});

