document.addEventListener('DOMContentLoaded', function () {
  const stickyAddToCart = document.getElementById('stickyAddToCart');
  const productImage = document.querySelector('.product__description'); // Selector de la imagen del producto
  const addToCartButton = document.getElementById('stickyAddButton');
  const variantSelect = document.getElementById('stickyVariantSelect');
  const notification = document.getElementById('notification'); // Seleccionar el div de notificación existente
  const spinner = document.createElement('div'); // Crear el spinner
  const pageHeader = document.querySelector('header'); // Seleccionar el encabezado de la página

  spinner.className = 'spinner';
  spinner.style.display = 'none'; // Ocultarlo por defecto
  spinner.style.width = '20px';
  spinner.style.height = '20px';
  spinner.style.border = '3px solid #f3f3f3'; // Color de fondo del spinner
  spinner.style.borderTop = '3px solid #ffffff'; // Color blanco para el spinner
  spinner.style.borderRadius = '50%';
  spinner.style.animation = 'spin 1s linear infinite'; // Animación
  addToCartButton.appendChild(spinner); // Añadir el spinner al botón

  window.addEventListener('scroll', function () {
    const imageBottom = productImage.offsetTop + productImage.offsetHeight;
    if (window.scrollY > imageBottom) {
      stickyAddToCart.style.display = 'flex'; // Mostrar el sticky
    } else {
      stickyAddToCart.style.display = 'none'; // Ocultar el sticky
    }
  });

  addToCartButton.addEventListener('click', function () {
    const selectedVariantId = variantSelect.value;

    const addToCartText = addToCartButton.querySelector('p');
    if (addToCartText) {
      addToCartText.style.display = 'none'; // Ocultar el texto del botón
    }
    spinner.style.display = 'flex'; // Mostrar el spinner
    addToCartButton.disabled = true;
    addToCartButton.style.opacity = '0.5';

    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({
        id: selectedVariantId,
        quantity: 1
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Producto añadido al carrito:', data);

      notification.style.display = 'block';
            setTimeout(() => {
        notification.style.display = 'none';
      }, 3000);
      if (pageHeader) {
        pageHeader.scrollIntoView({ behavior: 'smooth' }); 
      }


    })
    .catch(error => {
      console.error('Error al añadir el producto al carrito:', error);
    })
    .finally(() => {
      spinner.style.display = 'none';
      addToCartButton.disabled = false; 
      addToCartButton.style.opacity = '1';

      // Volver a mostrar el texto del botón
      if (addToCartText) {
        addToCartText.style.display = 'block'; // Mostrar el texto del botón nuevamente
      }
    });
  });
});
