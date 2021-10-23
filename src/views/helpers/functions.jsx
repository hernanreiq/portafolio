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