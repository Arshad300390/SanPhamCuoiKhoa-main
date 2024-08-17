function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} đã được thêm vào giỏ hàng!`);
}
function seeProduct(Describe, Price) {
    // Display the product details in the modal
    document.getElementById("modal-description").textContent = Describe;
    document.getElementById("productPrice").textContent = Price;

    // Show the modal
    var modal = document.getElementById("description-modal");
    modal.style.display = "block";
}

function closeViewProduct() {
    var modal = document.getElementById("description-modal");
    modal.style.display = "none";
}

    
