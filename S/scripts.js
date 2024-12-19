document.addEventListener('DOMContentLoaded', () => {
    const deals = document.querySelectorAll('.deal');

    deals.forEach(deal => {
        deal.addEventListener('click', () => {
            window.location.href = 'products.html';
        });
    });
});
