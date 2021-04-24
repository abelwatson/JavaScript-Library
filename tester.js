// const display = function showPhotos() {
//     const image01 = document.getElementById('imageOne');
//     const image02 = document.getElementById('imageTwo');
// }


showPhotos();
async function showPhotos() {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await response.json();

    image1 = data.results[6].image
    image2 = data.results[10].image

    console.log(image1)
    console.log(image2)

    const image01 = document.getElementById('imageOne');
    const image02 = document.getElementById('imageTwo');

    image01.src = image1;
    image02.src = image2;
}