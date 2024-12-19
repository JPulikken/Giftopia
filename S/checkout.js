document.addEventListener('DOMContentLoaded', () => {
  loadOrderSummary();

  const confirmBtn = document.querySelector('.confirm-btn');
  if (confirmBtn) {
      confirmBtn.addEventListener('click', storeCartItems);
  }
});

function loadOrderSummary() {
  const orderList = document.getElementById('order-list');
  const totalElement = document.getElementById('total');

  orderList.innerHTML = ''; // Clear the list

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;

  cart.forEach(item => {
      const itemName = item.name;
      const itemPrice = parseInt(item.price.replace('k', '').replace(/[^\d]/g, ''), 10);

      total += itemPrice;

      const listItem = document.createElement('li');
      listItem.textContent = `${itemName} - ${itemPrice}k`;
      orderList.appendChild(listItem);
  });

  totalElement.textContent = `Total: ${total}Rs`;
}

function storeCartItems() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  localStorage.setItem('cartItems', JSON.stringify(cart));

  // Calculate and store the total cost
  let total = cart.reduce((sum, item) => {
      return sum + parseInt(item.price.replace('k', '').replace(/[^\d]/g, ''), 10);
  }, 0);
  localStorage.setItem('totalCost', total.toString()); // Convert total to string before storing
}
