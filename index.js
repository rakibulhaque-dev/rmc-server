const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware

app.use(cors());
app.use(express.json());


app.get('/', (req, res) =>{
    res.send('Rakib Medicine Corner Server is ready to use')
})

app.listen(port, ()=>{
    console.log(`RMC server sitting on port ${port}`)
})