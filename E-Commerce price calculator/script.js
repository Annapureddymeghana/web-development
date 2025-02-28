// JavaScript for handling product interactions, cart functionality, etc.
function addProduct() {
    let productList = document.getElementById('product-list');

    let newProduct = document.createElement('div');
    newProduct.classList.add('product');
    newProduct.innerHTML = `
        <label>Product Price ($):</label>
        <input type="number" class="price" placeholder="Enter price">
        <label>Quantity:</label>
        <input type="number" class="quantity" placeholder="Enter quantity" value="1">
    `;

    productList.appendChild(newProduct);
}

function calculateTotal() {
    let prices = document.querySelectorAll('.price');
    let quantities = document.querySelectorAll('.quantity');

    let discount = parseFloat(document.getElementById('discount').value) || 0;
    let taxRate = parseFloat(document.getElementById('tax').value) || 0;
    let shippingFee = parseFloat(document.getElementById('shipping').value) || 0;

    let subtotal = 0;

    prices.forEach((price, index) => {
        let priceValue = parseFloat(price.value) || 0;
        let quantityValue = parseInt(quantities[index].value) || 1;
        subtotal += priceValue * quantityValue;
    });

    let discountAmount = (discount / 100) * subtotal;
    let taxAmount = (taxRate / 100) * subtotal;
    
    let total = subtotal - discountAmount + taxAmount + shippingFee;

    document.getElementById('total-cost').innerHTML = `Total Cost: $${total.toFixed(2)}`;
}
