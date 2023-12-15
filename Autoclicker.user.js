// ==UserScript==
// @name         LSS Easter Egg Clicker
// @namespace    www.leitstellenspiel.de
// @version      1.0
// @description  Automatically click the Easter Egg link when an Easter Egg is detected
// @author       Afilia
// @match        https://www.leitstellenspiel.de/missions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Prüfe, ob das Element mit der ID "easter-egg-link" vorhanden ist
    var easterEggLink = document.getElementById('easter-egg-link');

    if (easterEggLink) {
        var imageSrc = easterEggLink.querySelector('img').getAttribute('src');

        // Prüfe, ob der Bild-Quelltext das Wort "Pumpkin" enthält
        if (imageSrc.includes('pumpkin')) {
            // For Pumpkin, automatically click the Easter Egg link
            easterEggLink.click();
        } else if (imageSrc.includes('Easter')) {
            // For Easter, automatically click the Easter Egg link
            easterEggLink.click();
        } else if (imageSrc.includes('santa_item')) {
            // For Christmas, automatically click the Easter Egg link
            easterEggLink.click();
        }
    }
})();
