console.log("Gekoppelt test");
const hobbybutton1 = document.querySelector("#activateDropdown1");
const hobbybutton2 = document.querySelector("#activateDropdown2");

const dropdown1;
const dropdown2;

function toggleDropdown1() {
    console.log("klik");
    dropdown1 = document.querySelector(".disabledDropdown1");
    dropdown1.classList.toggle("active");
}

function toggleDropdown2() {
    console.log("klik");
    dropdown2 = document.querySelector(".disabledDropdown2");
    dropdown2.classList.toggle("active");
}




hobbybutton1.addEventListener("click", toggleDropdown1)
hobbybutton2.addEventListener("click", toggleDropdown2)