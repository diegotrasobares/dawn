document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar la pantalla de carga
    const loadingScreen = document.getElementById("loading-screen");
    // Ocultar la pantalla de carga al cargar la página
    function hideLoadingScreen() {
        loadingScreen.classList.add("hidden");
          console.log("loading screen hidden")

    }

    // Mostrar la pantalla de carga antes de salir de la página
    function showLoadingScreen() {
        loadingScreen.classList.remove("hidden");
                console.log("loading screen SHOWN")

    }

    // Ocultar la pantalla de carga cuando el contenido esté listo
    showLoadingScreen();

    // Agregar el evento para mostrar la pantalla de carga en los enlaces
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(e) {
            const href = link.getAttribute("href");
        });
    });

    // Ocultar la pantalla de carga nuevamente al cargar la nueva página
    window.addEventListener("pageshow", hideLoadingScreen);
});
