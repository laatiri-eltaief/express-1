const express = require('express')
const app = express()
const PORT = 5000
const fs = require('fs')
const path = require('path');


const d = new Date( Date.now());


function condition(req,res,next) {
    const day =d.getDay();
    const hour =d.getHours();
    if ((day >=2 && day<=6 )  && (hour >=13 && hour<=17 )  === false ) {
    console.log ("close");
    
    res.sendFile(__dirname +'/close.html');       

}  

else {
next();
}
}  
app.use(condition); 
app.use(express.static('Public'));


app.get('/Home', (req, res) => {
    fs.readFile('./public/Home/Home.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

app.get('/Service', (req, res) => {
    fs.readFile('./Public/Service/Service.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

app.get('/Contact', (req, res) => {
    fs.readFile('./Public/Contact/Contact.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data)
    })
}) 

app.listen(5000, () => console.log(`Server is listening on port ${PORT}`))