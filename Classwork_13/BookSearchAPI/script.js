const searchBtn = document.getElementById('searchBtn');
const queryInput = document.getElementById('queryInput');
const tableBody = document.getElementById('table-body');
const searchResultSpan = document.getElementById('searchResult');
const pageSelector = document.getElementById('pageSelector');

let pageCount = 0;

function getRow(title, author, publishYear, subject){
    const row = document.createElement('tr');
    
    const titleCol = document.createElement('td');
    titleCol.innerText = title;

    const authorCol = document.createElement('td');
    authorCol.innerText = author;

    const publishYearCol = document.createElement('td');
    publishYearCol.innerText = publishYear;
    
    const subjectCol = document.createElement('td');
    subjectCol.innerText = subject;

    row.append(titleCol, authorCol, publishYearCol, subjectCol);

    return row;
}

async function fetchData(page) {
    const inputValue = queryInput.value;
    if(inputValue){
        const response = await fetch(`http://openlibrary.org/search.json?q=${inputValue.trim().replace(/[\s]+/g, '+')}&page=${page}`);
        const responseJson = await response.json();
        const numFound = Number(responseJson['numFound']);

        const docs = responseJson['docs'];
        
        tableBody.textContent = '';
        for(let doc of docs){
            const title = doc['title'];
            const author = doc['author_name'];
            let publishYear = doc['publish_year'];
            let subject = doc['subject'];

            if(publishYear){
                publishYear = publishYear[0];
            }

            if(subject){
                subject = subject[0];
            }
            if(title && author && publishYear && subject){
                const newRow = getRow(title, author, publishYear, subject);
                tableBody.append(newRow);
            }
        }
        return numFound;
    }
}

function genereatePageOptions(pageCount){
    let res = [];
    for(let i = 1; i <= pageCount; ++i){
        let option = document.createElement('option');
        option.innerText = i;
        res.push(option);
    }

    return res;
}

searchBtn.addEventListener('click', () => {
    fetchData(1).then(numFound => {
        searchResultSpan.innerText = 'Search result: ' + numFound;
        pageSelector.textContent = '';
        let pageCount = Math.ceil(numFound / 100);
        const optionElements = genereatePageOptions(pageCount);
        pageSelector.append(...optionElements);
    });
});

pageSelector.addEventListener('change', (e) => {
    fetchData(e.target.value);
})
