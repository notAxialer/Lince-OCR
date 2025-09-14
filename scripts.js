// Обработка загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    // Скрываем прелоадер после загрузки страницы
    setTimeout(function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 800);
    
    // Инициализация плавных переходов
    initSmoothTransitions();
    
    // Инициализация анимаций при прокрутке
    initScrollAnimations();

    // Инициализация переходов между страницами
    initPageTransitions();

    // Инициализация демо-секции (только на главной)
    initDemoSection();

    // Инициализация видео-иконки
    initVideoIcon();

    // Убираем transition при загрузке страницы
    const pageTransition = document.querySelector('.page-transition');
    if (pageTransition) {
        pageTransition.classList.remove('active');
    }
});

// Инициализация демо-секции
function initDemoSection() {
    // Кнопка для открытия демо-секции
    const demoBtn = document.getElementById('check-accuracy-btn');
    if (demoBtn) {
        demoBtn.addEventListener('click', function () {
            document.getElementById('demo-section').classList.add('active');
            document.getElementById('overlay').classList.add('active');
            document.body.style.overflow = 'hidden'; // Отключаем прокрутку страницы
        });
    }

    // Кнопка для закрытия демо-секции
    const closeDemo = document.getElementById('close-demo');
    if (closeDemo) {
        closeDemo.addEventListener('click', function () {
            document.getElementById('demo-section').classList.remove('active');
            document.getElementById('overlay').classList.remove('active');
            document.body.style.overflow = 'auto'; // Включаем прокрутку страницы
        });
    }

    // Закрытие по клику на оверлее
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', function () {
            document.getElementById('demo-section').classList.remove('active');
            document.getElementById('overlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Простой скрипт для демонстрации функциональности загрузки
    const uploadArea = document.querySelector('.upload-area');
    if (uploadArea) {
        uploadArea.addEventListener('click', function () {
            alert('В демо-версии вы можете загрузить изображение для проверки точности распознавания текста. В реальной версии здесь будет интерактивная область для загрузки файлов.');
        });
    }
}

// Инициализация видео-иконки
function initVideoIcon() {
    const videoIcon = document.querySelector('.video-icon');
    if (videoIcon) {
        videoIcon.addEventListener('click', function () {
            alert('Здесь будет запускаться демонстрационный видео-ролик о работе Lince OCR Scanner.');
        });
    }
}

// Инициализация плавных переходов
function initSmoothTransitions() {
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Активируем переход между страницами
                const pageTransition = document.querySelector('.page-transition');
                if (pageTransition) {
                    pageTransition.classList.add('active');
                }
                
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Деактивируем переход
                    setTimeout(() => {
                        if (pageTransition) {
                            pageTransition.classList.remove('active');
                        }
                    }, 300);
                }, 300);
            }
        });
    });
}

// Инициализация анимаций при прокрутке
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .feature-icon, h1, h2');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Инициализация переходов между страницами
function initPageTransitions() {
    document.querySelectorAll('a').forEach(link => {
        // Проверяем, что это внутренняя ссылка и не якорь
        if (link.href && link.origin === window.location.origin && !link.hash) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = link.href;

                // Активируем переход
                const pageTransition = document.querySelector('.page-transition');
                if (pageTransition) {
                    pageTransition.classList.add('active');
                }

                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            });
        }
    });
}

// Обработка изменения размера окна для перезапуска видео на мобильных устройствах
window.addEventListener('resize', function() {
    const video = document.querySelector('.background-video');
    if (window.innerWidth <= 768 && video) {
        video.play().catch(e => {
            console.log('Автовоспроизведение видео заблокировано браузером');
        });
    }
});

// Попытка перезапуска видео на мобильных устройствах
if (window.innerWidth <= 768) {
    document.addEventListener('touchstart', function() {
        const video = document.querySelector('.background-video');
        if (video) {
            video.play().catch(e => {
                console.log('Автовоспроизведение видео заблокировано браузером');
            });
        }
    }, { once: true });
}

// Предзагрузка шрифтов для улучшения производительности
document.fonts.ready.then(function() {
    console.log('Все шрифты загружены');
});
