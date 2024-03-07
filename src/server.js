var exp=require('express')

var app=exp();
//var nod=require("nodemon")

var mysql=require('mysql');
var path=require('path')
var bodyparse=require('body-parser');
app.use(bodyparse.json())

app.use(exp.static(path.join(__dirname,'../dist/meanstack')))

var dburl="mongodb+srv://sarath:mongodb@sarath.pwemxqm.mongodb.net/?retryWrites=true&w=majority";

var mc=require("mongodb").MongoClient;

mc.connect(dburl,(err)=>{


    if(err){
        console.log(err)
    }

    else{
      // var dbo= client.db('employ');
       // dj=dbo.collection('order');

     console.log("connected mongodb")
    }
})

app.post('/user',(req,re)=>{

    re.json("hi sir")
    console.log(req.body);

    

})

app.post('/d',(_req,_res)=>{


})

app.listen(478,(err)=>{

if(err){
    console.log("err")
}

else{
    console.log("listening on port")
}
})

console.log("water")
