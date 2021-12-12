const mainContainer = document.getElementById('main-container');

const countryName = window.location.href.split('=').pop();
document.getElementById('title').innerText = countryName.replace('%20', ' ');

function getMapDiv(key, value){
    let nameDiv = document.createElement('div');

    nameDiv.classList.add('flex-div');
    
    const nameSpan = document.createElement('span');
    nameSpan.innerText = key + ': ';

    const nameValueSpan = document.createElement('span');
    nameValueSpan.append(value);
    nameDiv.append(nameSpan, nameValueSpan);
    return nameDiv;
}

function renderCountryDetails(info){
    let infoContainer = document.createElement('div');

    
    const flagImg = document.createElement('img');
    flagImg.src = info.flags.png;
    flagImg.height = "80";

    const coatOfArmsImg = document.createElement('img');
    coatOfArmsImg.src = info.coatOfArms.png;
    coatOfArmsImg.height = "80";

    infoContainer.append(
        getMapDiv('Common name', info.name.common),
        getMapDiv('Official name', info.name.official),
        getMapDiv('Flag', flagImg),
        getMapDiv('Capital city', info.capital),
        getMapDiv('Languages', Object.values(info.languages).toString().replace(',', ', ')),
        getMapDiv('Coat of arms', coatOfArmsImg),
    );
    mainContainer.append(infoContainer);
}

fetch('https://restcountries.com/v3.1/name/' + countryName)
    .then(response => response.json())
    .then(result => {
        const countryInfo = result[0];
        document.getElementById('countryName').innerText = countryInfo.name.common;
        document.getElementById('countryOfficialName').innerText = countryInfo.name.official;
        renderCountryDetails(countryInfo);
    });