// Mostrar/ocultar botón al hacer scroll
window.onscroll = function() {
    const btn = document.getElementById('topbackBtn');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
};

// Función para volver arriba
document.getElementById('topbackBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});