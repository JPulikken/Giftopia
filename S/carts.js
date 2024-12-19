document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.querySelector('.checkout-btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            window.location.href = 'checkout.html';
        });
    }
    
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productItem = event.target.closest('.product-item');
            const product = {
                name: productItem.querySelector('h3').innerText,
                description: productItem.querySelector('p:nth-of-type(1)').innerText,
                price: productItem.querySelector('p:nth-of-type(2)').innerText,
                image: productItem.querySelector('img').src
            };
            addToCart(product);
        });
    });

    loadCart();
});

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}

function loadCart() {
    const cartSection = document.querySelector('.cart-section .cart-items');
    if (cartSection) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartSection.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <p>${item.name}</p>
                    <p>${item.price}</p>
                </div>
                <button class="remove-item">Remove</button>
            `;
            cartSection.appendChild(cartItem);
        });

        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const productItem = event.target.closest('.cart-item');
                removeFromCart(productItem.querySelector('.item-details p').innerText);
                productItem.remove();
            });
        });

        updateTotal();
    }
}

function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(product => product.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateTotal();
}

function updateTotal() {
    const totalElement = document.querySelector('.cart-total h3');
    if (totalElement) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = cart.reduce((sum, item) => {
            const price = parseInt(item.price.replace(/[^\d]/g, ''), 10);
            return sum + price;
        }, 0);
        totalElement.innerText = `Total: ${total}k`;
    }
}
// ...

