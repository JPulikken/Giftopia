// Frontend JavaScript (frontend.js)

// Initialize contract object
let contract;
let contractAddress = '0x47934548d811B39fBbEf463E294a00454b9D5639';  // Replace with your deployed contract address
let contractABI = [
    // Replace with your contract ABI
    
        [
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "productId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    }
                ],
                "name": "ItemAddedToCart",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "productId",
                        "type": "uint256"
                    }
                ],
                "name": "ItemRemovedFromCart",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    }
                ],
                "name": "ProductAdded",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "ProductRemoved",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    }
                ],
                "name": "ProductUpdated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "totalAmount",
                        "type": "uint256"
                    }
                ],
                "name": "TransactionCompleted",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_description",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_quantity",
                        "type": "uint256"
                    }
                ],
                "name": "addProduct",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_productId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_quantity",
                        "type": "uint256"
                    }
                ],
                "name": "addToCart",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "carts",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "productId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "checkout",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "nextProductId",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "products",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_productId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_quantity",
                        "type": "uint256"
                    }
                ],
                "name": "removeFromCart",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_productId",
                        "type": "uint256"
                    }
                ],
                "name": "removeProduct",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_productId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_quantity",
                        "type": "uint256"
                    }
                ],
                "name": "updateProduct",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]
];

// Connect to the Ethereum blockchain
async function connectBlockchain() {
    if (window.ethereum) {
        try {
            // Request account access
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected:', accounts[0]);
            
            // Initialize contract
            contract = new ethers.Contract(contractAddress, contractABI, ethereum.selectedAddress.provider);
            console.log('Contract Initialized:', contract);
            
            // Update UI with account info
            updateAccountInfo();
        } catch (error) {
            console.error('Error connecting to blockchain:', error);
        }
    } else {
        console.error('Web3 provider not found');
    }
}

// Update UI with user account info
async function updateAccountInfo() {
    if (contract && ethereum.selectedAddress) {
        // Update user account info
        document.querySelector('.user-account p').textContent = ethereum.selectedAddress;
        
        // Fetch and display cart items
        await fetchCartItems();
        
        // Fetch and display total cart value
        await updateTotal();
    } else {
        console.log('Not connected to blockchain');
    }
}

// Fetch and display cart items
async function fetchCartItems() {
    if (contract && ethereum.selectedAddress) {
        const cartSection = document.querySelector('.cart-section .cart-items');
        if (cartSection) {
            try {
                const cartItems = await contract.carts(ethereum.selectedAddress);
                cartSection.innerHTML = '';
                cartItems.forEach(async item => {
                    const productId = item.productId.toNumber();
                    const product = await contract.products(productId);
                    const cartItem = document.createElement('div');
                    cartItem.classList.add('cart-item');
                    cartItem.innerHTML = `
                        <img src="images/placeholder.png" alt="${product.name}">
                        <div class="item-details">
                            <p>${product.name}</p>
                            <p>${product.price} wei</p>
                            <p>Quantity: ${item.quantity}</p>
                        </div>
                        <button class="remove-item" onclick="removeCartItem(${productId})">Remove</button>
                    `;
                    cartSection.appendChild(cartItem);
                });
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        }
    }
}

// Remove item from cart
async function removeCartItem(productId) {
    if (contract && ethereum.selectedAddress) {
        try {
            await contract.removeFromCart(productId, 1);
            console.log('Item removed from cart');
            await fetchCartItems();
            await updateTotal();
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    }
}

// Update total cart value
async function updateTotal() {
    if (contract && ethereum.selectedAddress) {
        try {
            const totalElement = document.querySelector('.cart-total h3');
            if (totalElement) {
                const cartItems = await contract.carts(ethereum.selectedAddress);
                let total = 0;
                for (const item of cartItems) {
                    const productId = item.productId.toNumber();
                    const product = await contract.products(productId);
                    total += product.price * item.quantity;
                }
                totalElement.textContent = `Total: ${total} wei`;
            }
        } catch (error) {
            console.error('Error calculating total:', error);
        }
    }
}

// Initialize app
async function initApp() {
    // Connect to blockchain
    await connectBlockchain();
    
    // Event listeners
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productItem = event.target.closest('.product-item');
            const productId = parseInt(productItem.dataset.productId);
            const quantity = 1; // Hardcoded for simplicity
            addToCart(productId, quantity);
        });
    });
    
    const checkoutButton = document.querySelector('.checkout-btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', async () => {
            try {
                await contract.checkout({ value: await calculateTotal() });
                console.log('Checkout completed');
                await fetchCartItems();
                await updateTotal();
                alert('Checkout completed successfully!');
            } catch (error) {
                console.error('Error during checkout:', error);
                alert('Error during checkout. Please try again later.');
            }
        });
    }
}

// Add item to cart
async function addToCart(productId, quantity) {
    if (contract && ethereum.selectedAddress) {
        try {
            await contract.addToCart(productId, quantity);
            console.log('Item added to cart');
            await fetchCartItems();
            await updateTotal();
            alert('Item added to cart!');
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    }
}

// Calculate total amount for checkout
async function calculateTotal() {
    if (contract && ethereum.selectedAddress) {
        try {
            const cartItems = await contract.carts(ethereum.selectedAddress);
            let total = 0;
            for (const item of cartItems) {
                const productId = item.productId.toNumber();
                const product = await contract.products(productId);
                total += product.price * item.quantity;
            }
            return total;
        } catch (error) {
            console.error('Error calculating total:', error);
        }
    }
}

// Run the app
initApp();
