let actualindice = 0;

const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    'video'
];

function vercontenido(index) {
    actualindice = index;
    const mainImage = document.getElementById('main-image');
    const mainVideo = document.getElementById('main-video');
    

    if (images[index] === 'video') {
        mainImage.style.display = 'none';
        mainVideo.style.display = 'block';
    } else {
        mainVideo.pause(); 
        mainImage.style.display = 'block';
        mainVideo.style.display = 'none';
        mainImage.src = images[index];
    }
}

function navigate(direction) {
    actualindice = (actualindice + direction + images.length) % images.length;
    vercontenido(actualindice);
    console.log(actualindice)
}

function navigatevertical(direction) {
    actualindice = (actualindice + direction + images.length) % images.length;
    vercontenido(actualindice);
}
