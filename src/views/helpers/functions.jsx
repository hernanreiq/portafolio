import React from "react";

export function getImagesCarousel(numberOfImages, routeImage, nameProject) {
    var arrayImages = [];
    var active = '';
    for (var i = 0; i < numberOfImages; i++) {
        var image = require(`../../${routeImage + nameProject} (${i + 1}).jpg`);
        if (i === 0) {
            active = 'carousel-item active';
        } else {
            active = 'carousel-item';
        }
        var imageComplete = (
            <div className={active} key={i}>
                <img src={image.default} alt={nameProject} />
            </div>
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
                <img src={badge.default} alt={skill_badges[i] + ' skill badge'} class="skill-badge" />
            </div>
        )
    }
    return arrayBadges;
}