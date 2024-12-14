// Cambiar color de los divs a negro al hacer clic
document.querySelectorAll('.color-box').forEach(function(box) {
    box.addEventListener('click', function() {
        box.style.backgroundColor = 'black';
    });
});

// Variable global para almacenar el color seleccionado
let colorGlobal;

document.addEventListener('keydown', function(event) {
    const key = document.getElementById('key');

    switch(event.key) {
        case 'a':
            colorGlobal = 'pink';
            key.style.backgroundColor = colorGlobal;
            break;
        case 's':
            colorGlobal = 'orange';
            key.style.backgroundColor = colorGlobal;
            break;
        case 'd':
            colorGlobal = 'skyblue';
            key.style.backgroundColor = colorGlobal;
            break;
        case 'q':
            createNewDiv('purple');
            break;
        case 'w':
            createNewDiv('gray');
            break;
        case 'e':
            createNewDiv('brown');
            break;
    }
});

function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.marginTop = '10px';
    document.body.appendChild(newDiv);
}
