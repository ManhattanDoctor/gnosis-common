export enum LoginResource {
    // Единая дверь входа: Google/Yandex/Mail/VK/Telegram-виджет брокерит Keycloak
    KEYCLOAK = 'KEYCLOAK',

    VK_INTERNAL = 'VK_INTERNAL',
    TELEGRAM_INTERNAL = 'TELEGRAM_INTERNAL',

    VK = 'VK',
    MAIL = 'MAIL',
    YANDEX = 'YANDEX',
    GOOGLE = 'GOOGLE',
    ETHEREUM = 'ETHEREUM',
    TELEGRAM = 'TELEGRAM',
}