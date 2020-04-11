const express = require('express');
const app = express();
const port = 6000;
var items = [
   {
       "Name":"Aman",
       "id":0
   },
   {
       "Name":"Abhijeet",
       "id":1
   },
   {
       "Name":"Satyam",
       "id":2
   },
];
var count=4;
app.get('/', (req, res) =>{
    res.send("Hello World");
}); 

app.listen(port, () => console.log(`Listening at port ${port}`));
