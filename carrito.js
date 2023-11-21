function getProductsFromStorage() {
    var products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
}

var products = getProductsFromStorage();
    var productList = document.getElementById('cartBody');
    products.forEach(function (product) {
    var row = document.createElement('tr');
    var nombre = document.createElement('td');
    var cont = document.createElement('td');
    var precio = document.createElement('td');
    var img = document.createElement('td');
    nombre.textContent = product.nombre;
    cont.textContent = product.cont;
    precio.textContent = product.precio;
    img.textContent = product.img;
    row.appendChild(img);
    row.appendChild(nombre);
    row.appendChild(precio);
    row.appendChild(cont);
    productList.appendChild(row);
});