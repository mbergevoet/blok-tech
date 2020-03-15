console.log("Gekoppelt");
const hobbybutton1 = document.querySelector("#activateDropdown1");
const hobbybutton2 = document.querySelector("#activateDropdown2");
const hobbybutton3 = document.querySelector("#activateDropdown3");
const dropdown1 = document.querySelector(".disabledDropdown1");
const dropdown2 = document.querySelector(".disabledDropdown2");
const dropdown3 = document.querySelector(".disabledDropdown3");
const filterform = document.querySelector(".filterForm");

function toggleDropdown1(){
    console.log("klik");
    dropdown1.classList.toggle("active");
}

function toggleDropdown2(){
    console.log("klik");
    dropdown2.classList.toggle("active");
}

function toggleDropdown3(){
    console.log("klik");
    dropdown3.classList.toggle("active");
}

hobbybutton1.addEventListener("click", toggleDropdown1);
hobbybutton2.addEventListener("click", toggleDropdown2);
hobbybutton3.addEventListener("click", toggleDropdown3);

// TODO
// High order functions schrijven ipv dit alles
// Like knop handler
// 