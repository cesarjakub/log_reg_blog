function newText(name, text, img){
    let textik = `<div class="all" id="all">
    <span id="logname">${name}</span>
    <div class="textimg">
        <div class="cont">${text}</div>
        <div class="img">
            <img src="${img}" alt="image">
        </div>
    </div>
    </div>`
    return textik;
}

const button = document.getElementById("buttonSub");
const content = document.getElementById("contant")
const txt = document.getElementById("textonpage");
const img = document.getElementById("imageFile")

button.addEventListener("click", () => {
    const selectedImage = img.files[0];
    if (selectedImage) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imgSrc = event.target.result;
            content.insertAdjacentHTML("beforeend", newText("jakub", txt.value, imgSrc));
        };
        reader.readAsDataURL(selectedImage);
    } else {
        // Handle the case where no image is selected
        console.error("No image selected");
    }
});