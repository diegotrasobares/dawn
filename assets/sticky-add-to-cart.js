document.addEventListener('DOMContentLoaded', function () {
  // Mostrar el sticky Add to Cart al hacer scroll
  const stickyAddToCart = document.getElementById('stickyAddToCart');
  
  // Asegúrate de cambiar el selector a la clase correcta de la imagen del producto
  const productImage = document.querySelector('.product-single__media'); // Cambia esta clase según tu tema

  const addToCartButton = document.getElementById('stickyAddButton');
  const variantSelect = document.getElementById('stickyVariantSelect');
  const stickyVariantImage = document.getElementById('stickyVariantImage');

  if (productImage) { // Comprobamos si la imagen existe
    // Mostrar el sticky cuando se scrollea por debajo de la imagen del producto
    window.addEventListener('scroll', function () {
      const imageBottom = productImage.offsetTop + productImage.offsetHeight;
      if (window.scrollY > imageBottom) {
        stickyAddToCart.style.display = 'flex'; // Mostrar el sticky
      } else {
        stickyAddToCart.style.display = 'none'; // Ocultar el sticky
      }
    });
  }

  // Cambiar la imagen cuando se selecciona una variante diferente
  variantSelect.addEventListener('change', function () {
    const selectedOption = variantSelect.options[variantSelect.selectedIndex];
    const variantImage = selectedOption.getAttribute('data-image');
    
    // Actualizar la imagen en el sticky
    if (variantImage) {
      stickyVariantImage.src = variantImage;
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
