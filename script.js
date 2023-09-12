const botonNo = document.getElementById('no');
const botonSi = document.getElementById('si');

botonNo.addEventListener('mouseenter', () => {
    const randomX = Math.random() * (window.innerWidth - botonNo.clientWidth);
    const randomY = Math.random() * (window.innerHeight - botonNo.clientHeight);
    botonNo.style.left = randomX + 'px';
    botonNo.style.top = randomY + 'px';
});

botonSi.addEventListener('click', () => {
    const customPopup = document.createElement('div');
    customPopup.className = 'custom-popup';
    customPopup.innerHTML = `
        <div class="popup-content">
            <p>Sabía que dirias que sí :3</p>
            <img src="images/respuesta.gif" alt="GIF">
            <button id="close-popup">❤ Acepto ser tu novia ❤</button>
        </div>
    `;

    document.body.appendChild(customPopup);

    const closeButton = document.getElementById('close-popup');
    closeButton.addEventListener('click', () => {
        document.body.removeChild(customPopup);
    });
});
