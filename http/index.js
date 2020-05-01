const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.sendfile(__dirname+"/html/index.html")
});

app.get("/sobre", function(req,res){
    res.sendfile(__dirname+"/html/sobre.html")
});

app.get("/blog", function(req,res){
    res.send("Bem vindo ao blog.")
});

app.get('/ola/:nome/:sobrenome', function(req,res){
	res.send("Ola "+req.params.nome+ " "+req.params.sobrenome);	
})

app.listen(8081, function(){
	console.log("Servidor OK");
});
