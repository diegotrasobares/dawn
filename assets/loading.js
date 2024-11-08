document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar la pantalla de carga
    const loadingScreen = document.getElementById("loading-screen");

    // Ocultar la pantalla de carga al cargar la página
    function hideLoadingScreen() {
        loadingScreen.classList.add("hidden");
    }

    // Mostrar la pantalla de carga antes de salir de la página
    function showLoadingScreen() {
        loadingScreen.classList.remove("hidden");
    }

    // Ocultar la pantalla de carga cuando el contenido esté listo
    hideLoadingScreen();

    // Agregar el evento para mostrar la pantalla de carga en los enlaces
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(e) {
            const href = link.getAttribute("href");

            // Si el enlace lleva a una nueva página, muestra la pantalla de carga
            if (href && !href.startsWith("#") && !link.target) {
                showLoadingScreen();
            }
        });
    });

    // Ocultar la pantalla de carga nuevamente al cargar la nueva página
    window.addEventListener("pageshow", hideLoadingScreen);
});
