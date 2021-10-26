const express = require('express');
const app = express();
const path = require('path');

app.use('/cdns',express.static('cdns'));
app.use('/fonts',express.static('fonts'));
app.use('/images',express.static('images'));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'));
})

app.listen(5500,()=>{
    console.log('server started at port 5500');
})