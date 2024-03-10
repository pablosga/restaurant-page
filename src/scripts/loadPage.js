import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

import "../style.css";
export default loadPage;

function loadPage() {
    
    const btns = document.querySelectorAll("button");
    btns.forEach(btn => btn.addEventListener("click", () => {

        const content = document.getElementById("content");
        while (content.firstChild) {
                content.removeChild(content.firstChild);    
        }

        switch (btn.textContent) {
            case "Home":
                home();
                break;
            case "Menu":
                menu();
                break;
            case "About":
                about();
                break;
        }
    }))
}
