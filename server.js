// Adding some basic animations to homepage for parallax scrolling effect
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const heroBackground = document.querySelector('.hero-background');
  
    // Parallax effect for background
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  });
  
  // Add "Add to Cart" animation on hover
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.1)';
    });
  
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });
  });
  // DOM elements
const addToCartBtn = document.getElementById('add-to-cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeModalBtn = document.getElementById('close-modal');
const viewCartBtn = document.getElementById('view-cart');

// Product data (In a real application, this would likely come from a database or API)
const product = {
    name: "Sample Product",
    price: 49.99
};

// Add to Cart Button click event
addToCartBtn.addEventListener('click', function() {
    // Show the modal with product details
    cartModal.style.display = 'flex';
    document.getElementById('cart-item-name').textContent = product.name;
});

// Close the modal
closeModalBtn.addEventListener('click', function() {
    cartModal.style.display = 'none';
});

// View Cart Button (for demonstration purposes, you can extend this to navigate to the actual cart page)
viewCartBtn.addEventListener('click', function() {
    window.location.href = '/cart'; // Redirect to the cart page (this would be a URL for your cart page)
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});
