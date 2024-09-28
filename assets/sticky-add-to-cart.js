document.addEventListener('DOMContentLoaded', function () {
  // Mostrar el sticky Add to Cart al hacer scroll
  const stickyAddToCart = document.getElementById('stickyAddToCart');
  const productImage = document.querySelector('.product__media'); // Selector de la imagen del producto
  const addToCartButton = document.getElementById('stickyAddButton');
  const variantSelect = document.getElementById('stickyVariantSelect');

  // Mostrar el sticky cuando se scrollea por debajo de la imagen del producto
  window.addEventListener('scroll', function () {
    const imageBottom = productImage.offsetTop + productImage.offsetHeight;
    if (window.scrollY > imageBottom) {
      stickyAddToCart.style.display = 'flex'; // Mostrar el sticky
    } else {
      stickyAddToCart.style.display = 'none'; // Ocultar el sticky
    }
  });

  // Añadir al carrito
  addToCartButton.addEventListener('click', function () {
    const selectedVariantId = variantSelect.value;

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
      // Opcional: Actualizar el número de productos en el carrito
      // window.location.href = '/cart'; // Redireccionar al carrito si se desea
    })
    .catch(error => {
      console.error('Error al añadir el producto al carrito:', error);
    });
  });
});
