const express = require('express')

const path = require('path')

const bodyParser = require('body-parser')

const app = express()
const port = 5009;

//midelware section

app.use(bodyParser.urlencoded({exorended:true}));
app.use(bodyParser.json())

// configuration from templating engine

app.set('veiw engine','ejs');

app.get('/',(req,res) =>{
    res.render('index.ejs')
})

app.listen(port), () => {
    console.log("server started successfully on",port);
}
