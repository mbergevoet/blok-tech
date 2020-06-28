const filePicker = document.querySelector(".fileSelector");
const imagePreview = document.querySelector(".imagePreview");

function showImage(){
    selectedFile = this.files[0];
    if(selectedFile){
        fileReader = new FileReader();
        imagePreview.classList.add("show");
        fileReader.addEventListener("load", function() {
            console.log(this);
            imagePreview.setAttribute("src", this.result);
        });
        fileReader.readAsDataURL(selectedFile);
    } else {
        imagePreview.setAttribute("src", "");
    }
    
    var fileReader;
    var selectedFile;    
}

filePicker.addEventListener("change", showImage);