const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/convert', (req, res) => {
 const amountInRs = req.body.amount_in_rs;

 const conversionRate = 0.0145;
 const amountInUsd = amountInRs * conversionRate;

 res.json({ amount_in_usd: amountInUsd });
});

app.listen(port, () => {
 console.log(`Currency conversion service is running at http://localhost:${port}`);
});