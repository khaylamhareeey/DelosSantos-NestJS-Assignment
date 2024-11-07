const express = require('express');
const router = express.Router();
const { isPrimeNumber } = require('../controller/ass2controller');


router.get('/prime/:number', (req, res) => {
    const number = parseInt(req.params.number);

    if (isNaN(number) || number <= 0) {
        return res.status(400).json({ error: 'Invalid input. Please provide a positive integer.' });
    }


    const result = isPrimeNumber(number);


    res.json({ isPrime: result });
});

module.exports = router;