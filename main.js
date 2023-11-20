

function mostrarFormulario() {
    document.getElementById("formulario").style.display = "block";
}

function ocultarFormulario() {
    document.getElementById("formulario").style.display = "none";
}

/* menu */
function comprar() {
    alert("El producto ha sido agregado al carrito.");
}

function agregarFavoritos() {
    alert("El producto ha sido agregado a tus favoritos.");
}


function actualizarNumero(btn, cambio) {
    // Encuentra el elemento del contador más cercano
    var contador = btn.closest('.counter-container').querySelector('.counter');
    var valorActual = parseInt(contador.textContent, 10);
    
    // Actualiza el contador con el cambio
    var nuevoValor = valorActual + cambio;
    nuevoValor = Math.max(0, nuevoValor); // Asegura que no sea negativo
    contador.textContent = nuevoValor;
}


function agregarAlCarrito(btn) {
    var contadorProducto = btn.closest('.counter-container').querySelector('.counter');
    var cantidad = parseInt(contadorProducto.textContent, 10);
    //actualiza el numero en el carrito del nav y reinicia el contador
    var cartItemCount = document.getElementById('cartItemCount');
    cartItemCount.textContent = parseInt(cartItemCount.textContent, 10) + cantidad;
    contadorProducto.textContent = '0';
}
//btn-suscribe
document.getElementById("btn-sub").addEventListener('click', function() {
    alert('Te suscribiste');
   });
