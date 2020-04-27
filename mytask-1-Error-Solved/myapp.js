const express = require('express');
const app = express();
app.use(express.json());
const port = 6060;
var items = [
    {
        "Name": "Aman",
        "User ID":002
    },

    {
        "Name": "Abhijeet",
        "User ID":004
    },

    {
        "Name": "Satyam",
        "User ID":09
    }
];
var count=3;
app.get('/',function(req,res){
    //console.log("<h1>Home Page<h1>");
  res.send("<h1>Home Page</h1>");
});

app.get('/all',function(req,res){
  res.send(items);
});
app.get('/item/:id',function(req,res){
//console.log("Our parameter is" + req.params.id);
//res.send("Parameter is"+ req.params.id);
    //let i;
    /*for(i=0;i<count;i++)
{

    if(items[i]["User ID"]==req.params.id)
    {   
        console.log(items[i].Name);
        res.send(items[i].Name);
        break;
    }
}*/
    const a=items.find(function(element){
        return element["User ID"]=== parseInt(req.params.id); 
    });
    if(!a)
    res.send("Not Found");
    else
    {
     console.log(a);
     console.log(a.Name);
     res.send(a.Name);
    }
});

//POST Request
app.post('/additems',function(req,res){
 const newitem=[{
     "Name": req.body.Name,
     "User ID": req.body.ID
 }]
 items.push(newitem);
 console.log("Items Added from terminal");
 req.send("Item Added");
});

app.listen(port, () => console.log(`Listening at port ${port}`));
