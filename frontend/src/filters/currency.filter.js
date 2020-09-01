export default function currencyFilter(value, currency = 'BYN') {
    return new Intl.NumberFormat('ru-Ru', {
        style: 'currency',
        currency
    }).format(value);
}