import React from "react";
import Typewriter from "typewriter-effect/dist/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-bootstrap";

export function TransformURL(url) {
    var available = false;
    var textURL = 'Sin enlace';
    if (url.substring(0, 18) === 'https://hernanreiq') {
        textURL = 'Proyecto desplegado con GitHub Pages';
        available = true;
    } else if (url.substring(0, 18) === 'https://github.com') {
        textURL = 'Repositorio con el código de este proyecto';
        available = true;
    } else if (url.substring(0, 18) !== ''){
        textURL = 'Proyecto desplegado con Heroku';
        available = true;
    } else {
        textURL = 'Este proyecto no está disponible';
        available = false;
    } 
    
    if (available) {
        return <a href={url} target="_blank" rel="noreferrer" className="">{textURL} <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
    } else {
        return textURL;
    }
}

export function getImagesCarousel(numberOfImages, routeImage, nameProject) {
    var arrayImages = [];
    for (var i = 0; i < numberOfImages; i++) {
        var image = require(`../../${routeImage + nameProject} (${i + 1}).jpg`);
        var imageComplete = (
            <Carousel.Item key={i}>
                <img src={image.default} alt={nameProject} />
            </Carousel.Item>
        )
        arrayImages.push(imageComplete);
    }
    return arrayImages;
}

export function rainingBadges() {
    var skill_badges = ['css3', 'javascript', 'react', 'bootstrap', 'git', 'mongodb', 'nodejs', 'mysql', 'php', 'html5'];
    var arrayBadges = [];
    for (var i = 0; i < skill_badges.length; i++) {
        var badge = require(`../../img/Habilidades/${skill_badges[i]}.svg`);
        arrayBadges.push(
            <div className="snowflake" key={i}>
                <img src={badge.default} alt={skill_badges[i] + ' skill badge'} className="skill-badge" />
            </div>
        )
    }
    return arrayBadges;
}

export function nameWriter(container) {
    var animateText = new Typewriter(container, {
        loop: false
    });

    animateText.typeString('Hernan.Reiq')
        .pauseFor(1500)
        .deleteChars(5)
        .typeString(' Virgilio')
        .pauseFor(200)
        .deleteChars(7)
        .typeString('. Demorizi Ureña')
        .pauseFor(13000)
        .start();

}

export function professionWriter(container) {
    var animarTitulo = new Typewriter(container, {
        loop: true
    });

    animarTitulo.typeString('Desarrollador y Diseñador Web')
        .pauseFor(3500)
        .deleteAll()
        .typeString('Ingeniero de Sistemas y Computación')
        .pauseFor(6000)
        .start();
}