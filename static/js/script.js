console.log("Gekoppelt");
let checkbox = document.querySelector("#checkboxDropdown");
let dropdown = document.querySelector(".disabledDropdown");
let filterform = document.querySelector("#filterForm");
//idee om code compacter te maken
//stop alle id's van de dropdownes en dropdowns in een array
//filter door de array als er op een knop gedrukt wordt
//plaatst de dingen in de template functie
//voer de functie uit

function toggleDropdown(){
    console.log("klik");
    dropdown.classList.toggle("active");
}

// function toggleVisibility() {
//     console.log("klik");
//     if(disabledDropdown.style.display == 'block'){
//         disabledDropdown.style.display = 'none';
//     } else {
//         disabledDropdown.style.display = 'block';
//     }
// };

checkbox.addEventListener("click", toggleDropdown);