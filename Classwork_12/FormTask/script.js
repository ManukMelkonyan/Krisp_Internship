const form = document.getElementById('form');
form.addEventListener('submit', function() {
    let data = new FormData(form);
    let json = {};
    for(let [key, value] of data.entries()){
        json[key] = value;
    }
    alert(JSON.stringify(json));
})