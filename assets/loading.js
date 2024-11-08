document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar la pantalla de carga
    const loadingScreen = document.getElementById("loading-screen");

    // Función para ocultar la pantalla de carga
    function hideLoadingScreen() {
        loadingScreen.classList.add("hidden");
    }

    // Función para mostrar la pantalla de carga
    function showLoadingScreen() {
        loadingScreen.classList.remove("hidden");
    }

    // Ocultar la pantalla de carga cuando el contenido esté listo
    hideLoadingScreen();

    // Escuchar clicks en los enlaces para mostrar la pantalla de carga
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(e) {
            const href = link.getAttribute("href");

            // Solo muestra la pantalla de carga si el enlace es interno
            if (href && !href.startsWith("#") && !link.target) {
                showLoadingScreen();
            }
        });
    });

    // Shopify AJAX navigation: manejar el evento de cambio de página
    document.addEventListener("shopify:section:load", hideLoadingScreen);
    document.addEventListener("shopify:section:unload", showLoadingScreen);

    // Escuchar cuando la nueva página esté lista (para la navegación AJAX)
    window.addEventListener("pageshow", hideLoadingScreen);
});
