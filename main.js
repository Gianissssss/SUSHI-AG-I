

function mostrarFormulario() {
    document.getElementById("formulario").style.display = "block";
}

function ocultarFormulario() {
    document.getElementById("formulario").style.display = "none";
}

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



function getProductsFromStorage() {
    var products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
}
function agregarAlCarrito(btn,productId, productName, productImage, productPrice) {
    var count = 1;
    var products = getProductsFromStorage();
    var existingProductIndex = products.findIndex(p => p.id === productId);
    if (existingProductIndex !== -1) {
        count = products[existingProductIndex].count + 1;
    }
    products.push({ id: productId, nombre: productName, img: productImage, precio: productPrice, cont: count });
    localStorage.setItem('products', JSON.stringify(products));
    //elemento padre de la información del producto
    var menuCard = btn.closest('.menu-card');

    var contadorProducto = menuCard.querySelector('.counter');
    var cantidad = parseInt(contadorProducto.textContent, 10);

    // Actualizar el número en el carrito del navbar y reiniciar el contador
    var cartItemCount = document.getElementById('cartItemCount');
    cartItemCount.textContent = parseInt(cartItemCount.textContent, 10) + cantidad;
    contadorProducto.textContent = '0';

    // Estilos y notificación
    cartItemCount.style.backgroundColor = 'red';
    cartItemCount.style.padding = '6px 10px';

    mostrarNotificacion('Producto agregado');

    // Restablecer el estilo 
    setTimeout(function () {
        cartItemCount.style.backgroundColor = '#fa7f01';
        cartItemCount.style.padding = '';
    }, 1000);

  
    
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

    addItemCart(itemTitle, itemPrice, itemImg);
    
}

function addItemCart(itemTitle, itemPrice, itemImg) {
    const cartItemList = document.getElementById('cartItemList');

    // Verificar si el producto ya está en el carrito
    const existingItem = cartItemList.querySelector(`[data-title="${itemTitle}"]`);
    if (existingItem) {
        const quantityElement = existingItem.querySelector('.cart-item-quantity');
        const quantity = parseInt(quantityElement.textContent) + 1;
        quantityElement.textContent = quantity;
    } else {
        const li = document.createElement('li');
        li.dataset.title = itemTitle;

        li.innerHTML = `
            <img src="${itemImg}" alt="" class="cart-item-img" style="width: 50px; height: 50px;">
            <span class="cart-item-title">${itemTitle}</span>
            <span class="cart-item-price">${itemPrice}</span>
            <span class="cart-item-quantity">1</span>
        `;

        cartItemList.appendChild(li);
    }
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