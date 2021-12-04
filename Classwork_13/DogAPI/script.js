const getBtn = document.getElementById('getPicBtn');
const imageHodler = document.getElementById('imageHolder');
const breedSelector = document.getElementById('select-bar');

getBtn.addEventListener('click', async function() {
    let breed = breedSelector.value;
    console.log(breed);
    let response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    if(response.status === 200){
        let responseJson = await response.json();
        imageHodler.src = responseJson.message;
    }
    else{
        imageHodler.src = '404.png';
    }
});