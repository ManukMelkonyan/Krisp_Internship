const fileInput = document.getElementById('fileInput');
const imgElement = document.getElementById('img-elem')

fileInput.addEventListener('change', function() {
    if(this.files[0]){
        imgElement.src = URL.createObjectURL(this.files[0]);
    }
    else{
        imgElement.src = 'Assets/Images/default.png';
    }
});
