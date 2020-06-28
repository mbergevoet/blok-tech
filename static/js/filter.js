console.log("Gekoppelt");

const filterInput = document.querySelector(".filterInput");

const hobbyList = document.querySelectorAll(".hobby");

filterInput.addEventListener("keyup", function(e) {
    filterList(e.target.value);
})

// Closure, function in een function waarbij filterValue wordt gepakt uit de buitenste
const filterList = filterValue => {
    filterValue = filterValue.toLowerCase();
    console.log(filterValue);
    hobbyList.forEach(hobby => {
        let hobbyName = hobby.firstElementChild.innerText.toLowerCase();
        console.log(hobbyList);
        if(hobbyName.indexOf(filterValue) != -1){
            hobby.style.display = "block"; 
        } else {
            hobby.style.display = "none";
        }
    });
};

// Bron:
//  GTCoding. (2019, November 26). How To Add Search Functionality To Select Box (HTML, CSS & Vanilla JS). Retrieved 26 June 2020, from https://www.youtube.com/watch?v=VZzWzRVXPcQ


// TODO
// High order functions schrijven ipv dit alles
// Like knop handler

// https://codepen.io/CiTA/pen/PPJpOG