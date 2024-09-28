document.addEventListener('DOMContentLoaded', function () {
  const stickyAddToCart = document.getElementById('stickyAddToCart');
  const productImage = document.querySelector('.product__description'); // Selector de la imagen del producto
  const addToCartButton = document.getElementById('stickyAddButton');
  const variantSelect = document.getElementById('stickyVariantSelect');
  const notification = document.createElement('div'); // Crear la notificación
  const spinner = document.createElement('div'); // Crear el spinner

  // Estilo para la notificación
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '20px';
  notification.style.backgroundColor = 'var(--color-foreground)';
  notification.style.color = 'white';
  notification.style.padding = '10px';
  notification.style.borderRadius = '5px';
  notification.style.display = 'none'; // Ocultarlo por defecto
  notification.textContent = 'Producto añadido al carrito';
  document.body.appendChild(notification); // Añadir la notificación al cuerpo del documento

  // Estilo para el spinner
  spinner.className = 'spinner';
  spinner.style.display = 'none'; // Ocultarlo por defecto
  spinner.style.width = '20px';
  spinner.style.height = '20px';
  spinner.style.border = '3px solid #f3f3f3'; // Color de fondo del spinner
  spinner.style.borderTop = '3px solid #3498db'; // Color del spinner
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

    // Mostrar el spinner al hacer clic
    spinner.style.display = 'flex';
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
        notification.style.display = 'none'; // Ocultar la notificación después de 3 segundos
      }, 3000);
    })
    .catch(error => {
      console.error('Error al añadir el producto al carrito:', error);
    })
    .finally(() => {
       spinner.style.display = 'none';
        addToCartButton.disabled = false; 
        addToCartButton.style.opacity = '1';
    });
  });
});
