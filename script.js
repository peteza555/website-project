function filterProducts(category) {
    const items = document.querySelectorAll('.product-item');
    
    items.forEach(item => {
        // Hide or show products based on category
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
            item.classList.add('fade-in');
           } else {
            item.style.display = 'none';
        }
    });
}

function redeemCode() {
    const promoCode = document.getElementById('promo-code').value;
    if (promoCode) {
        alert(`Promo Code "${promoCode}" has been redeemed!`);
    } else {
        alert('Please enter a promo code.');
    }
}


function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        product.style.display = title.includes(input) ? '' : 'none';
    });
}

function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}

function setActiveLink() {
    const links = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname; // Get the current page path
    
    links.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add('active'); // Add active class
        } else {
            link.classList.remove('active'); // Remove active class
        }
    });
}

window.onload = setActiveLink; // Ensure the script runs when the page loads
