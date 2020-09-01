export default {
    error: null,
    sidebarNav: [
        {title: 'Главная', url: '/', exact: true},
        {title: 'Профиль', url: '/profile'},
        {title: 'Пользователи', url: '/users'},
        /*{title: 'История', url: '/history'},
        {title: 'Планирование', url: '/planning'},
        {title: 'Новая запись', url: '/record'},
        {title: 'Категории', url: '/categories'}*/
    ],
    Auth: {
        login: false,
        user_id: null,
        api_token: null
    },
    userInfo: {},
    currencies: ['BYN', 'RUB', 'USD', 'EUR']
}