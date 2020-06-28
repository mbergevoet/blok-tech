console.log("Gekoppelt");

const filterInput = document.querySelector(".filterInput");

const hobbyList = document.querySelectorAll(".hobby");

filterInput.addEventListener("keyup", function(e) {
    filterList(e.target.value);
})

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

// TODO
// High order functions schrijven ipv dit alles
// Like knop handler
// Keypress event voor live filter function
// html li uitlezen zodat filteren mogelijk is
//map filter of reduce
//Array maken van li met hobbies, die array filteren met filter()

// https://codepen.io/CiTA/pen/PPJpOG