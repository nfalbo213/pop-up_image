/*Copyright 2023 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0*/
const imageArr = document.querySelectorAll('.pop-up-img');
const popUpFrame = document.querySelector('.pop-up-frame');
const exitButton = document.querySelector('.pop-up-exit-button');
const zoomedImg = document.querySelector('.zoomed-img');

const setImage = (target) => {
    if (target.dataset.pic === 'oregon-tree') {
        zoomedImg.src = './images/oregon-tree.jpg';
        zoomedImg.alt = 'Enlarged image of a tree in an Oregon forest';
    }
    if (target.dataset.pic === 'oregon-beach') {
        zoomedImg.src = './images/oregon-beach.jpg';
        zoomedImg.alt = 'Enlarged image of a beach on the Oregon coast';
    }
    if (target.dataset.pic === 'kady-poodle') {
        zoomedImg.src = './images/kady-poodle.jpg';
        zoomedImg.alt = 'Enlarged image of Kady the poodle at Nauset Beach in Massachusetts';
    }
    if (target.dataset.pic === 'gale-meadows-vt') {
        zoomedImg.src = './images/gale-meadows-vt.jpg';
        zoomedImg.alt = 'Enlarged image of a sunset at Gale Meadows Pond in Vermont';
    }
}

const enlargeImage = () => {
    popUpFrame.style.display = 'flex';
}

const minimizeImage = () => {
    popUpFrame.style.display = 'none';
}

imageArr.forEach(target => {
    target.addEventListener('click', (event) => {
        event.preventDefault();
        setImage(target);
        enlargeImage();
    })
})

exitButton.addEventListener('click', (event) => {
    event.preventDefault();
    minimizeImage();
})