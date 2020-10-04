

export   const colorFondo = () => {

    const mensaje = document.getElementById('colorFondo').innerHTML
    if (mensaje === 'Modo Oscuro') {
        document.getElementById('colorFondo').innerHTML = 'Modo Normal';
        document.body.style.background = 'black';

    } else {
        document.getElementById('colorFondo').innerHTML = 'Modo Oscuro';
        document.body.style.background = 'linear-gradient(to right, #1565C0, #b92b27)';
    }
}