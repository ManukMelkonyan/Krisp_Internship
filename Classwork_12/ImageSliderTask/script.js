const state = {
    sources: [
        './Assets/Images/lion.jpeg',
        './Assets/Images/panda.jpeg',
        './Assets/Images/rabbit.jpeg',
        './Assets/Images/squirrel.jpeg',
    ],
    current: 0,
};
const imageHolder = document.getElementById('img-holder');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

setInterval(switchImage, 3000, 'right');

leftButton.addEventListener('click', function(){
    switchImage('left');
})
rightButton.addEventListener('click', function(){
    switchImage('right');
})

function switchImage(direction){
    let currentIndex = state.current;
    let newIndex;
    switch(direction){
        case 'left':
            newIndex = currentIndex === 0 ? state.sources.length - 1 : currentIndex - 1;
            state.current = newIndex;
            imageHolder.setAttribute('src', state.sources[newIndex]);
            break;
        case 'right':
            newIndex = currentIndex === state.sources.length - 1 ? 0 : currentIndex + 1;
            state.current = newIndex;
            imageHolder.setAttribute('src', state.sources[newIndex]);
            break;
    }
}