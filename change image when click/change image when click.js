var dogImage = document.querySelector("img").getAttribute('src');
dogImage.onclick = function () {
    var myImages = dogImage.getAttribute('src');
    if (myImages === 'image/img1.jpg') {
        dogImage.setAttribute('src', 'image/img2.jpg');
    } else {
        dogImage.setAttribute('src', 'image/img1.jpg');
    }
}