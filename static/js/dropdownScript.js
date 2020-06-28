console.log("Gekoppelt test");
const hobbybutton1 = document.querySelector("#activateDropdown1");
const hobbybutton2 = document.querySelector("#activateDropdown2");

// Progressive Disclosure, meer invoer opties worden getoont als het op het + knopje word gedrukt inhet formulier
function toggleDropdown1() {
    console.log("klik");
    const dropdown1 = document.querySelector(".disabledDropdown1");
    dropdown1.classList.toggle("active");
}

function toggleDropdown2() {
    console.log("klik");
    const dropdown2 = document.querySelector(".disabledDropdown2");
    dropdown2.classList.toggle("active");
}

hobbybutton1.addEventListener("click", toggleDropdown1)
hobbybutton2.addEventListener("click", toggleDropdown2)