const express = require('express');
const adminRoutes =express.Router();
const Bookdata = require('../models/bookdata');
function router(nav){
    adminRoutes.get('/',function(req,res){
        res.render('newbook',{
            nav,
            title: 'Library'
        })
    })
    adminRoutes.post('/add',function(req,res){
        var item={
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.body.image
        }

       var book =  Bookdata(item)
       book.save(); //saving to db
       res.redirect('/books');
       
});

    return adminRoutes;
}

module.exports = router;
