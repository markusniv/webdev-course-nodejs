'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const cat = {
        name: 'Frank',
        birthdate: '2010-12-25',
        weight: 5,
    };
    res.render('index', { title: 'Title', h1: 'Click on the cat!', name_p: cat.name, age: cat.birthdate, weight_p: cat.weight })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})