//subscripcion
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



/* menu */
function actualizarNumero(btn, cambio) {
    // Encuentra el elemento del contador más cercano
    var contador = btn.closest('.counter-container').querySelector('.counter');
    var valorActual = parseInt(contador.textContent, 10);
    
    // Actualiza el contador con el cambio
    var nuevoValor = valorActual + cambio;
    nuevoValor = Math.max(0, nuevoValor); // Asegura que no sea negativo
    contador.textContent = nuevoValor;
}

var cantidadAgregada;
var cantidadTotalCarrito = 0;
function agregarAlCarrito(btn) {
    var contadorProducto = btn.closest('.counter-container').querySelector('.counter');
    //elemento padre de la información del producto
    var menuCard = btn.closest('.menu-card');

    var contadorProducto = menuCard.querySelector('.counter');
    cantidad = parseInt(contadorProducto.textContent, 10);
    //actualiza el numero en el carrito del nav y reinicia el contador
    cartItemCount = document.getElementById('cartItemCount');
    cartItemCount.textContent = parseInt(cartItemCount.textContent, 10) + cantidad;
    cantidadTotalCarrito = parseInt(cartItemCount.textContent, 10);
    cantidadAgregada = cantidad;
    contadorProducto.textContent = '0';
    
    // Estilos y notificación
    cartItemCount.style.backgroundColor = 'red';
    cartItemCount.style.padding = '6px 10px';

   

    // Restablecer el estilo 
    setTimeout(function () {
        cartItemCount.style.backgroundColor = '#fa7f01';
        cartItemCount.style.padding = '';
    }, 1000);

    return cantidad;
}


function mostrarNotificacion(mensaje) {
    var notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = mensaje;

    // Agrega la notificación 
    document.body.appendChild(notification);

    // Elimina la notificación 
    setTimeout(function () {
        notification.remove();
    }, 2000); // 
}


const btncarro = document.querySelectorAll('.menu-btn-carro');
btncarro.forEach(btnAdd => {
    btnAdd.addEventListener('click', addToCartClicked);
});

function addToCartClicked(event) {
    const boton = event.target;
    const item = boton.closest('.menu-card');
    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImg = item.querySelector('.item-img').src;

   if (cantidadAgregada == 0) {
    alert("ingrese una cantidad")
   } else {
    addItemCart(itemTitle, itemPrice, itemImg, cantidadAgregada);
    mostrarNotificacion('Producto agregado');
   }
}


var total=0;
function addItemCart(itemTitle, itemPrice, itemImg) {
    const cartItemList = document.getElementById('cartItemList');
    const totalFinal = document.getElementById('totalFinal');
    // Verificar si el producto ya está en el carrito
    const existingItem = cartItemList.querySelector(`[data-title="${itemTitle}"]`);
    if (existingItem) {
        const quantityElement = existingItem.querySelector('.cart-item-quantity');
        const quantity = parseInt(quantityElement.textContent) + cantidadAgregada;
        quantityElement.textContent = quantity;

        const totalElement = existingItem.querySelector('.cart-item-price');
        const totalPrice = parseFloat(itemPrice.replace('$', '')) * quantity; // Suponiendo que el precio tiene el formato $x.xx
        totalElement.textContent = `Sub-Total: $${totalPrice.toFixed(2)}`;

        total+=parseFloat(itemPrice.replace('$', '')) * cantidadAgregada;
    } else {
        const li = document.createElement('li');
        li.dataset.title = itemTitle;

        li.innerHTML = `
        <img src="${itemImg}" alt="" class="cart-item-img rounded-circle" style="width: 50px; height: 50px;">
        <span class="cart-item-details">
        <span class="cart-item-quantity">${cantidadAgregada} - </span>
        <span class="cart-item-title">${itemTitle} x (8u) --- precio unitario: ${itemPrice}</span>
        <span class="cart-item-price">Sub-Total: $${(parseFloat(itemPrice.replace('$', '')) * cantidadAgregada).toFixed(2)}</span>
        <span class="linea"></span>
        </span>
        `;
        total+=parseFloat(itemPrice.replace('$', '')) * cantidadAgregada;
        cartItemList.appendChild(li);
    }
    totalFinal.textContent = `TOTAL: $${total.toFixed(2)}`;
    console.log(total)
}


//formulario compra

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    var paymentMethod = document.getElementById('paymentMethod').value;
    
    if (paymentMethod === 'card') {
        var cardHolderName = document.getElementById('cardHolderName').value;
        var cardNumber = document.getElementById('cardNumber').value;
        
        if (!cardHolderName || !cardNumber) {
            alert('Por favor, complete la información de la tarjeta.');
            return;
        }
    }
    
    document.getElementById('paymentForm').reset();
    document.getElementById('successBanner').style.display = 'block';
    
    setTimeout(function() {
        document.getElementById('successBanner').style.display = 'none';
    }, 3000);
});

document.getElementById('paymentMethod').addEventListener('change', function() {
    var paymentMethod = this.value;
    
    if (paymentMethod === 'card') {
        document.getElementById('cardInfo').style.display = 'block';
    } else {
        document.getElementById('cardInfo').style.display = 'none';
    }
});

document.getElementById("btn-enviar").addEventListener('click',function(){
    alert("La compra fue exitosa")
    
})

function cerrarFormulario() {
    var formulario = document.getElementById("paymentForm");
    formulario.style.display = "none";
    window.location.href = "index.html";
}