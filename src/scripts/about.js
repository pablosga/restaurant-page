export default aboutInfo;

function createIconText(iconContent, titleContent, textContent) {

    const container = document.createElement("div");
    const icon = document.createElement("i");
    const title = document.createElement("h2");
    const text = document.createElement("p");

    icon.classList.add(iconContent[0], iconContent[1]);
    title.innerHTML = titleContent;
    text.innerHTML = textContent;

    container.appendChild(icon);
    container.appendChild(title);
    container.appendChild(text);

    const content = document.getElementById("content");
    content.appendChild(container);

}

function aboutInfo() {
    const icons = [
        ["fa-solid", "fa-location-dot"],
        ["fa-solid", "fa-phone"],
        ["fa-solid", "fa-clock"]
    ];

    const titles = [
        "Direction",
        "Phone Numbers",
        "Schedule"
    ];

    const texts = [
        "Easy Street 6918, New York NY",
        "389 1234 5443, +32 567 4332",
        "Open every day: 11:30 a.m. to 4 p.m. - 6:30 p.m. to 1:00 a.m."

    ];

    for (let i = 0; i < 3; i++) {
        createIconText(icons[i], titles[i], texts[i])
    }
}

