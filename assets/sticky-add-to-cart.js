document.addEventListener('DOMContentLoaded', function () {
  const stickyAddToCart = document.getElementById('stickyAddToCart');
  const productImage = document.querySelector('.product__description'); // Selector de la imagen del producto
  const addToCartButton = document.getElementById('stickyAddButton');
  const variantSelect = document.getElementById('stickyVariantSelect');
  const notification = document.createElement('div'); // Crear la notificación

  // Estilo para la notificación
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '20px';
  notification.style.backgroundColor = '#00aaff';
  notification.style.color = 'white';
  notification.style.padding = '10px';
  notification.style.borderRadius = '5px';
  notification.style.display = 'none'; // Ocultarlo por defecto
  notification.textContent = 'Producto añadido al carrito';
  document.body.appendChild(notification); // Añadir la notificación al cuerpo del documento

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

    // Cambiar color del botón al hacer clic
    addToCartButton.style.backgroundColor = '#0077cc'; // Cambia el color al hacer clic
    setTimeout(() => {
      addToCartButton.style.backgroundColor = '#00aaff'; // Restablecer el color después de un tiempo
    }, 200); // Cambiar de vuelta después de 200ms

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
      // Mostrar la notificación
      notification.style.display = 'block';
      setTimeout(() => {
        notification.style.display = 'none'; // Ocultar la notificación después de 3 segundos
      }, 3000);
    })
    .catch(error => {
      console.error('Error al añadir el producto al carrito:', error);
    });
  });
});
