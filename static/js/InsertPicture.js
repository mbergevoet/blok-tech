// Gebruik gemaakt van scope want deze variabelen worden later gebruikt in de function showImage
const filePicker = document.querySelector(".fileSelector");
const imagePreview = document.querySelector(".imagePreview");

function showImage(){
    selectedFile = this.files[0];
    if(selectedFile){
        fileReader = new FileReader();
        imagePreview.classList.add("show");
        fileReader.addEventListener("load", function() {
// Gebruikt gemaakt van Context door .thisresult
            imagePreview.setAttribute("src", this.result);
            console.log(this);
        });
        fileReader.readAsDataURL(selectedFile);
    } else {
        imagePreview.setAttribute("src", "");
    }

// fileReader en SelectedFile worden hier gehoist
    var fileReader;
    var selectedFile;    
}

// Bron:
// Closures. (2020, May 31). Retrieved 2 June 2020, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

filePicker.addEventListener("change", showImage);