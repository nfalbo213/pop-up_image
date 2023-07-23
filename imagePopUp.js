const imageArr = document.querySelectorAll('.pop-up-img');
const popUpFrame = document.querySelector('.pop-up-frame');
const exitButton = document.querySelector('.pop-up-exit-button');
const zoomedImg = document.querySelector('.zoomed-img');

const setImage = (target) => {
    if (target.dataset.prod === 'fire-craw') {
        zoomedImg.src = 'fire-craw-2.jpg';
    }
    else if (target.dataset.prod === 'pickle-flat') {
        zoomedImg.src = 'c_PickleFlat2.jpg';
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