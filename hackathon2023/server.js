const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname , 'public')));


app.get('/' , (req , res) => {
    res.status(200).render('index');
});

app.listen(3000 , () => {
    console.log('server is plugged on port 3000');
});