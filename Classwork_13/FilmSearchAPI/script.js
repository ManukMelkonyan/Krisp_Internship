const mainContainer = document.getElementById('main-container');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const showAllBtn = document.getElementById('showAllBtn');
let filmData = [];

searchBtn.addEventListener('click', () => {
    mainContainer.textContent = '';
    let inputValue = searchInput.value.toLowerCase().trim();
    searchInput.value = '';
    if(inputValue !== ''){
        renderFilmComponents(
            filmData.filter(e => e.title.toLowerCase().startsWith(inputValue))
            );
    }
});

showAllBtn.addEventListener('click', () => {
    mainContainer.textContent = '';
    renderFilmComponents(filmData);
});

function createDataMapDiv(name, value){
    let spanName = document.createElement('span');
    spanName.innerText = name;
    spanName.classList.add('info-span');
    spanName.style = "font-weight: 700;"

    let spanValue = document.createElement('span');
    spanValue.innerText = value;
    spanValue.classList.add('info-span');

    let container = document.createElement('div');
    container.append(spanName, spanValue);
    container.classList.add('info-div');
    return container;
}

function createFilmInfoDiv(infoArray){
    const fileInfoDiv = document.createElement('div');
    fileInfoDiv.classList.add('film-info');
    for(let info of infoArray){
        const innerDiv = createDataMapDiv( info.name, info.value);
        fileInfoDiv.append(innerDiv);
    }

    return fileInfoDiv;
}

function renderFilmComponents(filmInfoArray){
    for(let filmInfo of filmInfoArray){
        const {title, description, producer, director, release_date} = filmInfo;
        const filmInfoDiv = createFilmInfoDiv(
            [
                { name: 'Title:', value: title },
                { name: 'Description:', value: description },
                { name: 'Producer:', value: producer },
                { name: 'Director:', value: director },
                { name: 'Release Date:', value: release_date },
            ]
        );
        mainContainer.append(filmInfoDiv);
    }
}

fetch('https://ghibliapi.herokuapp.com/films')
    .then(result => result.json())
    .then(filmInfoArray => {
        filmData = filmInfoArray;
        renderFilmComponents(filmInfoArray);
    });


