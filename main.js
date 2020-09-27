"use strict"

const toggleButton = document.querySelector(".navbar_toggleButton")
const menu = document.querySelector(".navbar_menu")
const icons = document.querySelector(".navbar_icons")

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active")
  icons.classList.toggle("active")
})

const $home = document.getElementById("home")

$home.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("hello")
  $home.innerHTML("hello")
})
