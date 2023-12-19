/**
 * -> Fonction de création d'un nouveau noeud dans le DOM
 * @param {string} tag Balise HTML
 * @param {string} text Texte éventuel à afficher dans la balise ("" si vide)
 * @param {Array} attributes Attributs à affecter à la balise (class, id, value, src, ...)
 * @param {string} prevTag Balise HTML parente à laquelle rattacher le nouveau noeud
 * @returns {HTMLElement} Noeud HTML créé dans le DOM retourné dans la variable d'appel
 */
export function createDom (tag, text, attributes, prevTag) {
    let element = document.createElement(tag);
    setAttributes(element, text, attributes);
    prevTag.appendChild(element);
    return element;
}

/**
 * -> Fonction de détermination des différents attributs à intégrer à un élément HTML
 * @param {var} element Variable (constante) détenant le sélecteur HTML (par sa classe ou ID) sur lequel affecter les attributs
 * @param {string} text Chaîne de caractères détenant le texte à afficher dans la balise HTML. Doit être spécifiée dans l'appel à la fonction au minimum par "", auquel cas la balise n'aura pas de texte.
 * @param {string} attributes Chaîne de caractères sous forme de liste, regroupant les attributs et leurs propriétés.
 */
export function setAttributes(element, text="", attributes) {
    for(var key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
    if (text != "") {
        element.innerText = text;
    }
}