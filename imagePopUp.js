/*Copyright 2023 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0*/
const imageArr = document.querySelectorAll('.pop-up-img');
const popUpFrame = document.querySelector('.pop-up-frame');
const exitButton = document.querySelector('.pop-up-exit-button');
const zoomedImg = document.querySelector('.zoomed-img');

const setImage = (target) => {
    zoomedImg.src = `${target.src}`;
    zoomedImg.alt = `Enlarged - ${target.alt}`;
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

// add keydown event listener for accessibility 
imageArr.forEach(target => {
    target.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            setImage(target);
            enlargeImage();
        } 
    })
})

exitButton.addEventListener('click', (event) => {
    event.preventDefault();
    minimizeImage();
})

// add keydown event listener for accessibility 
exitButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        minimizeImage();
    }    
})
