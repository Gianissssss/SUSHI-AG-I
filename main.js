

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

function clearInput() {
    document.getElementById("myInput").value = "";
}

document.getElementById("btn-sub").addEventListener('click', function(event) {
    event.preventDefault();
    var emailInput = document.getElementById("myInput");
    var emailValue = emailInput.value;
    // Expresión regular para validar el formato de correo electrónico
    var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (emailValue.trim() === "") {
        alert('Por favor, ingresa tu dirección de correo electrónico.');
    } else if (!emailRegex.test(emailValue)) {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
    } else {
        alert('suscrito con exito');
    }
});

