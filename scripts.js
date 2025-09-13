// Кнопка для открытия демо-секции
document.getElementById('check-accuracy-btn').addEventListener('click', function () {
    document.getElementById('demo-section').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden'; // Отключаем прокрутку страницы
});

// Кнопка для закрытия демо-секции
document.getElementById('close-demo').addEventListener('click', function () {
    document.getElementById('demo-section').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = 'auto'; // Включаем прокрутку страницы
});

// Закрытие по клику на оверлее
document.getElementById('overlay').addEventListener('click', function () {
    document.getElementById('demo-section').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Простой скрипт для демонстрации функциональности загрузки
document.querySelector('.upload-area').addEventListener('click', function () {
    alert('В демо-версии вы можете загрузить изображение для проверки точности распознавания текста. В реальной версии здесь будет интерактивная область для загрузки файлов.');
});

document.querySelector('.video-icon').addEventListener('click', function () {
    alert('Здесь будет запускаться демонстрационный видео-ролик о работе Lince OCR Scanner.');
});