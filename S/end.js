// Retrieve cart items from local storage
function getCartItems() {
  return JSON.parse(localStorage.getItem('cartItems')) || [];
}

// Retrieve total cost from local storage
function getTotalCost() {
  return localStorage.getItem('totalCost') || '0';
}

// Update the items purchased list and total cost on end.html
function updateItemsPurchased() {
  const itemsPurchasedList = document.querySelector('.confirmation ul');
  const cartItems = getCartItems();
  const totalCost = getTotalCost();
  
  itemsPurchasedList.innerHTML = '';
  cartItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.name;
      itemsPurchasedList.appendChild(listItem);
  });

  // Update the total cost
  const totalElement = document.querySelector('.confirmation p strong:last-of-type');
  totalElement.textContent = `${totalCost}Rs ETHES`;
}

// Call the update function on page load
document.addEventListener('DOMContentLoaded', updateItemsPurchased);
