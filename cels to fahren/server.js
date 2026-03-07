const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/convert', (req, res) => {

 const { value, type } = req.body;

 let result;

 if(type === "CtoF"){
     result = (value * 9/5) + 32;
     res.json({ fahrenheit: result });
 }

 else if(type === "FtoC"){
     result = (value - 32) * 5/9;
     res.json({ celsius: result });
 }

 else{
     res.status(400).json({ error: "Invalid conversion type" });
 }

});

app.listen(port, () => {
 console.log(`Temperature conversion service running at http://localhost:${port}`);
});