// Sample cart data (in a real-world application, this would come from the backend or local storage)
let cartItems = [
    {
        id: 1,
        name: 'DAHNILL',
        price: 1199,
        quantity: 2,
        imageUrl: 'product1.jpg'
    },
    {
        id: 2,
        name: 'GOLD JANAN',
        price: 1199,
        quantity: 1,
        imageUrl: 'product2.jpg'
    },
    {
        id: 3,
        name: 'BLACK MUSK',
        price: 1199,
        quantity: 1,
        imageUrl: 'download.jpg'
    }
];

// Function to render cart items in the table
function renderCart() {
    const cartTableBody = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;

    // Clear existing rows
    cartTableBody.innerHTML = '';

    // Add rows for each item in the cart
    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.classList.add('cart-item');

        row.innerHTML = `
            <td>
                <img src="${item.imageUrl}" alt="${item.name}">
                <span>${item.name}</span>
            </td>
            <td>Rs${item.price.toFixed(2)}</td>
            <td>
                <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
            </td>
            <td>Rs${(item.price * item.quantity).toFixed(2)}</td>
            <td>
                <button class="remove-btn" data-id="${item.id}">Remove</button>
            </td>
        `;

        // Add event listener for quantity change
        row.querySelector('.quantity-input').addEventListener('input', handleQuantityChange);

        // Add event listener for remove button
        row.querySelector('.remove-btn').addEventListener('click', handleRemoveItem);

        cartTableBody.appendChild(row);

        // Update total price
        total += item.price * item.quantity;
    });

    // Update the total price
    totalPriceElement.textContent = total.toFixed(2);
}

// Handle quantity change
function handleQuantityChange(event) {
    const productId = event.target.getAttribute('data-id');
    const newQuantity = parseInt(event.target.value, 10);

    // Find the product in the cart and update the quantity
    const product = cartItems.find(item => item.id == productId);
    if (product) {
        product.quantity = newQuantity;
    }

    // Re-render the cart
    renderCart();
}

// Handle remove item from cart
function handleRemoveItem(event) {
    const productId = event.target.getAttribute('data-id');

    // Remove the product from the cart
    cartItems = cartItems.filter(item => item.id != productId);

    // Re-render the cart
    renderCart();
}

// Handle checkout (this can be extended to redirect to an actual checkout page)
document.getElementById('checkout-btn').addEventListener('click', function() {
    alert('Proceeding to checkout...');
    // In a real application, this would navigate to the checkout page or trigger a form submission
});

// Initial render
renderCart();
