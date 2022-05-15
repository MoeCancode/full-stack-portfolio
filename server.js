const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();
var PORT =  process.env.PORT || 3003;


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static('public'));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));