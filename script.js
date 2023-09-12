// Selecciona los elementos HTML con los IDs "no" y "si" y los almacena en variables
const botonNo = document.getElementById('no');
const botonSi = document.getElementById('si');

// Agrega un evento "mouseenter" al botón "No"
// "mouseenter" se activa cuando el cursor del mouse ingresa al area de un elemento
botonNo.addEventListener('mouseenter', () => {
    // Genera coordenadas X e Y aleatorias dentro de los limites de la ventana
    // la operacion "window.innerWidth - botonNo.clientWidth" obtiene el ancho maximo de la ventana
    const randomX = Math.random() * (window.innerWidth - botonNo.clientWidth);
    const randomY = Math.random() * (window.innerHeight - botonNo.clientHeight);

    // Mueve el boton "No" a la posicion aleatoria generada
    // randomX y randomY son valores en pixeles
    botonNo.style.left = randomX + 'px';
    botonNo.style.top = randomY + 'px';
});

// Agrega un evento "click" al boton "Si".
botonSi.addEventListener('click', () => {
    // Crea un nuevo elemento de div para mostrar una ventana emergente personalizada
    const customPopup = document.createElement('div');
    customPopup.className = 'custom-popup';
    customPopup.innerHTML = `
        <div class="popup-content">
            <p>Sabía que dirías que sí :3</p>
            <br>
            <img src="images/respuesta.gif" alt="GIF">
            <br>
            <button id="close-popup">❤ Acepto ser tu novia ❤</button>
        </div>
    `;

    // Agrega la ventana emergente al cuerpo del documento
    document.body.appendChild(customPopup);

    // Agrega un evento "click" al boton de cierre en la ventana emergente
    const closeButton = document.getElementById('close-popup');
    closeButton.addEventListener('click', () => {
        // Elimina la ventana emergente del cuerpo del documento al hacer clic en el boton de cierre
        document.body.removeChild(customPopup);
    });
});

/////// Gatitos aleatorios ///////

// Funcion para generar un valor aleatorio entre un rango
function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

// Función para mostrar y ocultar una imagen de forma aleatoria
function toggleImage(imageId) {
    const image = document.getElementById(imageId);

    // Genera coordenadas X e Y aleatorias dentro de los limites de la ventana
    const randomX = getRandomValue(0, window.innerWidth - image.clientWidth);
    const randomY = getRandomValue(0, window.innerHeight - image.clientHeight);

    // Asigna las coordenadas para posicionar la imagen
    image.style.left = randomX + 'px';
    image.style.top = randomY + 'px';

    // Muestra la imagen
    image.style.opacity = 1;

    // Espera un tiempo y luego oculta gradualmente la imagen
    setTimeout(() => {
        image.style.opacity = 0;
    }, 2000); // Cambia este valor para ajustar la velocidad de desaparicion
}

// Llama a la funcion para mostrar y ocultar cada imagen cada cierto intervalo de tiempo
setInterval(() => {
    toggleImage('image');
    toggleImage('image2');
    toggleImage('image3');
    toggleImage('image4');
    toggleImage('image5');
}, 3000); // Cambia este valor para ajustar la frecuencia de aparicion


/* para un solo gatito */
//// Funcion para mostrar y ocultar la imagen de forma aleatoria
//function toggleImage() {
//    const image = document.getElementById('random-image');
//
//    // Genera coordenadas X e Y aleatorias dentro de los limites de la ventana
//    const randomX = getRandomValue(0, window.innerWidth - image.clientWidth);
//    const randomY = getRandomValue(0, window.innerHeight - image.clientHeight);
//
//    // Asigna las coordenadas para posicionar la imagen
//    image.style.left = randomX + 'px';
//    image.style.top = randomY + 'px';
//
//    // Muestra la imagen
//    image.style.opacity = 1;
//
//    // Espera un tiempo y luego oculta gradualmente la imagen
//    setTimeout(() => {
//        image.style.opacity = 0;
//    }, 2000); // Cambia este valor para ajustar la velocidad de desaparicion
//}