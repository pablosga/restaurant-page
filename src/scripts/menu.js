import imageOne from "../images/menuOne.jpg"
import imageTwo from "../images/menuTwo.jpg"
import imageThree from "../images/menuThree.jpg"
import imageFour from "../images/menuFour.jpg"
export default menuDescription;

function createImageText(textContent, imgSrc) {

    const container = document.createElement("div");
    const img = document.createElement("img");      
    const text = document.createElement("p");
    
    img.src = imgSrc;
    text.innerHTML = textContent;
    
    container.appendChild(img);
    container.appendChild(text);

    const content = document.getElementById("content");
    content.appendChild(container);

}

function menuDescription() {
    const imgSrc = [
        imageOne, 
        imageTwo, 
        imageThree, 
        imageFour];
        
    const textContent = [
        "Meat cooked by innovative methods", 
        "The quality of our food and drinks", 
        "Select each ingredient with fine care", 
        "The art that our chefs display"
        ];
    
    for (let i = 0; i < 4; i++) {
        createImageText(textContent[i], imgSrc[i])
    }
}






