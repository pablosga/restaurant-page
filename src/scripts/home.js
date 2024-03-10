export default home;
import image from "../images/homeWideImage.webp";

function home() {
    
    const divTitle = document.createElement("div");
    const title = document.createElement("h1");
    const descriptionOne = document.createElement("p");
    const descriptionTwo = document.createElement("p");
    divTitle.classList.add("home", "title")
    title.innerHTML = "Pablo's Argentine Grill"
    descriptionOne.innerHTML = "Pablo's Argentine Grill is a meat house that respects the tradition and essence of the Argentine family, paying a proud tribute to the culinary culture of the Río de la Plata.";
    descriptionTwo.innerHTML = "The entire journey that people experience from the moment they arrive until they leave is designed to awaken their senses, where the aromas and flavors of the place make them live a unique and unmatched gastronomic experience.";
    divTitle.appendChild(title);
    divTitle.appendChild(descriptionOne);
    divTitle.appendChild(descriptionTwo);
    
    const divSub = document.createElement("div");
    const subTitle = document.createElement("h2");
    const subDescription = document.createElement("p");
    const wideImage = document.createElement("img");
    wideImage.src = image;
    divSub.appendChild(subTitle);
    divSub.appendChild(subDescription);
    divSub.appendChild(wideImage);

    const content = document.getElementById("content");
    content.appendChild(divTitle);
    content.appendChild(divSub);
}
