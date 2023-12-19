import { createDom } from "./functions.js";
import faqContent from "../content/faq.json" assert { type: "json" };;

function generateContent(section) {
    for (let i = 0; i < section.length; i++) {
        const content = section[i];
        const sectionFaq = document.querySelector(".faq-container__content");

        const contentBloc = createDom("div", "", {class: "faq-container__section"}, sectionFaq)
        const titleBloc = createDom("div", "", {class: "faq-container__section-title"}, contentBloc)
        const title = createDom("h2", content.titre, "", titleBloc)
        const image = createDom("img", "", {src: "./assets/images/icon-plus.svg", alt: "icon to open section", class: "switchButton"}, titleBloc)
        const contentText = createDom("p", content.content, {class:"faq-container__section-content"}, contentBloc)
    }
}
generateContent(faqContent)

const sectionTitles = document.querySelectorAll('.faq-container__section-title');

sectionTitles.forEach(function (title) {
  const img = title.querySelector('img');
  const paragraph = title.nextElementSibling;

    img.addEventListener("click", function() {
        if(paragraph.style.maxHeight === '0px' || paragraph.style.maxHeight === '') {
            paragraph.style.maxHeight = paragraph.scrollHeight + 'px';
            img.src="./assets/images/icon-minus.svg"
        } else {
            paragraph.style.maxHeight = '0px';
            img.src="./assets/images/icon-plus.svg"
        }
    })
    
})