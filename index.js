require('dotenv').config()
const express = require("express"); // module import
const app = express(); // factory function
const port = 3000;

app.get('/', (req, res) => { // get request
    res.send("Hello world!");
});

app.get('/twitter', (req, res) => { 
    res.send("anuragrai2222003@gmail.com");
});
app.get('/youtube', (req,res) => {
    res.send("<marquee> this is the youtube corner </marquee>")
})
app.get('/login',(req, res)=> {
    res.send("<h1> please login here </h1>");
})

// first method (bad practice)
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

// second method using dotenv for dynamic select the port (good practice)
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});


