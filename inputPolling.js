var interactALT = false;
var interact = false;
var left = false;
var right = false;

function inputPolling(){
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') interactALT = true;
        if (event.key === 'ArrowLeft') left = true;
        if (event.key === 'ArrowDown') interact = true;
        if (event.key === 'ArrowRight') right = true;
    });

    document.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowUp') interactALT = false;
        if (event.key === 'ArrowLeft') left = false;
        if (event.key === 'ArrowDown') interact = false;
        if (event.key === 'ArrowRight') right = false;
    });
}
