/* Estilos para el sticky Add to Cart */
.sticky-add-to-cart {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border-top: 1px solid #e1e1e1;
  display: none; /* Hidden by default */
  padding: 10px;
  z-index: 1000;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  align-items: center;
}

.sticky-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4rem;
  margin: 0 auto;
}

.sticky-image {
  width: 50px;
  height: auto;
}

.sticky-info {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sticky-price {
  font-size: 16px;
  color: #333;
}

.discounted-price {
  color: #00aaff;
  font-weight: bold;
  margin-right: 5px;
}

.original-price {
  text-decoration: line-through;
  color: #aaa;
}

#stickyAddButton {
  background-color: #00aaff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

#stickyAddButton:hover {
  background-color: #0077cc;
}

/* Nuevos estilos para cambiar la imagen de la variante seleccionada */
.variant-options input[type="radio"] {
  display: none; /* Ocultar los radio buttons */
}

/* Estilo para los labels */
.variant-options label {
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #ddd;
  margin-right: 5px;
}

/* Resaltar el label seleccionado */
.variant-options input[type="radio"]:checked + label {
  background-color: #00aaff;
  color: white;
}
