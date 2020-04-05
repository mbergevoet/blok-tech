console.log("Gekoppelt");
const hobbybutton1 = document.querySelector("#activateDropdown1");
const hobbybutton2 = document.querySelector("#activateDropdown2");
const dropdown1 = document.querySelector(".disabledDropdown1");
const dropdown2 = document.querySelector(".disabledDropdown2");
const filterform = document.querySelector(".filterForm");
const hobbyList = document.querySelector("#matchlist ul");
const filterInput = document.forms["hobbyFilter"].querySelector('input');
const profileTile = document.querySelector("#profileTile");

function toggleDropdown1(){
    console.log("klik");
    dropdown1.classList.toggle("active");
}

function toggleDropdown2(){
    console.log("klik");
    dropdown2.classList.toggle("active");
}

function filterHobbies(){
    const filterValue = document.forms["hobbyFilter"].querySelector('input').value.toLowerCase();
    console.log(filterValue);
    const hobbies = hobbyList.querySelector("li div #hobbyProfile ul li");
    Array.from(hobbies).forEach(function(hobbies){
        const hobbyName = hobbies.textContent;
        if(hobbyName.toLowerCase().indexOf(filterValue) != -1){
            profileTile.style.display = "block";
        } else {
            profileTile.style.display = "none";
        }
    })
}


// hobbybutton1.addEventListener("click", toggleDropdown1);
// hobbybutton2.addEventListener("click", toggleDropdown2);
filterInput.addEventListener("keyup", filterHobbies);

// TODO
// High order functions schrijven ipv dit alles
// Like knop handler
// Keypress event voor live filter function
// html li uitlezen zodat filteren mogelijk is
//map filter of reduce

// https://codepen.io/CiTA/pen/PPJpOG