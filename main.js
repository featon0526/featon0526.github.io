// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        backToTop.style.display = 'block';
    } else {
        navbar.classList.remove('scrolled');
        backToTop.style.display = 'none';
    }
});

// 返回顶部功能
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 初始化轮播图
const carousel = new bootstrap.Carousel(document.getElementById('mainCarousel'), {
    interval: 5000, // 5秒切换一次
    wrap: true
}); 