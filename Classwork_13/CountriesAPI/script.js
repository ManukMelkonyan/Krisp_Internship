const searchBtn = document.getElementById('searchBtn');
const showAllBtn = document.getElementById('showAllBtn');
const searchInput = document.getElementById('searchInput');
const mainContainer = document.getElementById('main-container');

function getCountryNameDiv(name){
    let nameDiv = document.createElement('div');

    nameDiv.classList.add('flex-div');
    
    const nameSpan = document.createElement('span');
    nameSpan.innerText = 'Name:';

    const nameValueSpan = document.createElement('span');
    nameValueSpan.innerText = name;
    nameDiv.append(nameSpan, nameValueSpan);
    return nameDiv;
}

function getCountryFlagDiv(flagUrl){
    let flagDiv = document.createElement('div');

    flagDiv.classList.add('flex-div');
    const nameSpan = document.createElement('span');
    nameSpan.innerText = 'Flag:';

    const flagImg = document.createElement('img');
    flagImg.src = flagUrl;
    flagImg.classList.add('flag-img');
    flagDiv.append(nameSpan, flagImg);
    
    return flagDiv;
}

function getCountryPageAnchor(name){
    let countryPageAnchor = document.createElement('a');
    countryPageAnchor.href = `./country.html?name=${name}`;
    countryPageAnchor.innerText = "More...";
    return countryPageAnchor;
}

function createCountryInfoDiv(info){
    const fileInfoDiv = document.createElement('div');
    fileInfoDiv.classList.add('country-info');
    fileInfoDiv.append(
        getCountryNameDiv(info.Name),
        getCountryFlagDiv(info.Flag),
        getCountryPageAnchor(info.Name)
    )

    return fileInfoDiv;
}


function renderSearchResult(resultArray){
    mainContainer.textContent = '';
    for(let country of resultArray){
        let { name: { common: name }, flags: { png: flagUrl } } = country;
        console.log({name, flagUrl});
        mainContainer.append(
                createCountryInfoDiv({ Name: name, Flag: flagUrl })
        );
    }
}

searchBtn.addEventListener('click', () => {
    let inputValue = searchInput.value.trim();
    if(inputValue !== ''){
        fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
            .then(response => response.json())
            .then(result => {
                renderSearchResult(result);
            });
    }
});

showAllBtn.addEventListener('click', () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(result => {
            renderSearchResult(result);
        });
});