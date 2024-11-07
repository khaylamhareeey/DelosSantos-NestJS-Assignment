const express = require('express');
const router = express.Router();
const { getFibonacciSequence } = require('../controller/Assignment1controller');

router.get('/fibonacci/:n', (req, res) => {
    const n = parseInt(req.params.n);
    const result = getFibonacciSequence(n);

    if (result.error) {
        return res.status(400).json(result);
    }

    res.json(result);
});

module.exports = router;
