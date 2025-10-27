// ========== Chart.js 營養比例圓餅圖 ==========
const ctx = document.getElementById('nutritionChart');
if (ctx) {
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['蛋白質', '碳水化合物', '脂肪'],
            datasets: [{
                data: [18, 4, 20],
                backgroundColor: ['#ffb703', '#8ecae6', '#fb8500'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '70%',
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// ========== Carousel 左右控制 ==========
function setupCarousel(carouselId, prevBtn, nextBtn) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    document.getElementById(prevBtn)?.addEventListener('click', () => {
        carousel.scrollBy({ left: -250, behavior: 'smooth' });
    });
    document.getElementById(nextBtn)?.addEventListener('click', () => {
        carousel.scrollBy({ left: 250, behavior: 'smooth' });
    });
}

setupCarousel('carouselList', 'prevBtn', 'nextBtn');
setupCarousel('recommendCarousel', 'recommendPrev', 'recommendNext');