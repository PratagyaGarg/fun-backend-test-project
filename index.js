require('dotenv').config();

let express = require('express');
let app = express();
let port = 3000;
app.get('/',(req, res)=>{
    res.send("<h1>This is just the demo<h1>");
})
app.get('/login',(req, res)=>{
    res.send("<h1>This is just the demo of login page<h1>");
})
app.get('/about',(req, res)=>{
    res.send("<h6>This is just the demo of about page<h6>");
})
;
app.listen(port , ()=>{
    console.log(`The server is listening at port: http://localhost:${port}`);
})