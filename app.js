const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    res.status(200).send({ token: 'Token_de_prueba' });
});

app.get('/products', (req, res) => {
    res.status(200).json({ products: [
        { id: 1, name: 'Product 1'},
        { id: 1, name: 'Product 1'},
    ] });
});

app.post('/cart/add', (req, res) => {
    const { product_id, quantity } = req.body;

    res.status(200).send({ message: `Product ${product_id} added to cart` });
});

app.post('/checkout', (req, res) => {
    const { payment_method } = req.body;

    res.status(200).send({ message: 'Checkout completed' });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});