// Налаштування конкретного івенту. Це ЄДИНИЙ файл (разом зі сторінками app.html / scanner.html),
// який відрізняється між ботами Nyako-kon і Dristic-con. Решта коду однакова в обох репозиторіях.
module.exports = {
    name: 'Dristic-con',
    ticketPrefix: 'DRISTIC', // початок ID квитка в QR-коді
    card: '4441 1110 6816 3314',
    // Ціни квитків. Назви мають збігатися з тими, що надсилає app.html.
    prices: {
        'Класичний': 300,
        'Для виступаючих': 250
    },
    // Адміни при першому запуску (далі список живе в admins.json і змінюється з бота).
    defaultAdminIds: ['789355423'],
    appUrl: 'https://zhutler.github.io/Dristic-tickets/app.html?v=3',
    scannerUrl: 'https://zhutler.github.io/Dristic-tickets/scanner.html?v=1'
};
