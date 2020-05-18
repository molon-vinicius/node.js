const express = require("express");
const router = express.Router();

router.get('/', function(req,res){
    res.render("admin/index");
})

router.get('/posts', function(req,res){
    res.send("Páginas de Posts");
})

router.get('/categorias', function(req,res){
    res.render('admin/categorias');
})

router.get('/categorias/add', function(req,res){
    res.render('admin/addcategorias');
})

router.get("/teste", function(req,res){
    res.send("Isso é um teste");
})

module.exports = router