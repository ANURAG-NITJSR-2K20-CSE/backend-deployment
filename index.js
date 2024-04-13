require('dotenv').config()
const express = require("express"); // module import
const app = express(); // factory function
const port = 4000;
const message = {
    "message": "Hello there, wayfaring stranger. If you’re reading this then you probably didn’t see our blog post a couple of years back announcing that this API would go away: http://git.io/17AROg Fear not, you should be able to get what you need from the shiny new Events API instead.",
    "documentation_url": "https://docs.github.com/v3/activity/events/#list-public-events-performed-by-a-user"
}

app.get('/message', (req, res)=> {
    res.json(message);
})
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


