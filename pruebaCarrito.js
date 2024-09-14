import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    vus: 10, // 10 users looping during 30 seconds
    duration: '30s', // duration of the test is 30 seconds
};

export default function () {
    let loginRes = http.post('http://localhost:3001/login', { username: 'admin'});
    check(loginRes, { 'Inicio de sesion exitoso': (r) => r.status === 200 });
    sleep(1);

    let productsRes = http.get('http://localhost:3001/products');
    check(productsRes, { 'Productos obtenidos': (r) => r.status === 200 });
    sleep(1);

    let addCartRes = http.post('http://localhost:3001/cart/add', { product_id: 1, quantity: 1 });
    check(addCartRes, { 'Producto agregado al carrito': (r) => r.status === 200 });

    let checkoutRes = http.post('http://localhost:3001/checkout', { payment_method: 'credit_card' });
    check(checkoutRes, { 'Compra realizada': (r) => r.status === 200 });
}