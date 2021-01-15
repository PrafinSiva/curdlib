const express = require('express');

const booksRouter = express.Router();
const Bookdata = require('../models/bookdata');
function router(nav){
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Library',
                books
        });
        
 
    });
    });
    
    booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render('book',{
            nav,
             title:'Library',
             book
      });
    
     });
    });
    booksRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        Bookdata.remove({_id:id},function(err,red){
            res.redirect("/books");
        })
        
    });
    booksRouter.get('/update/:id',function(req,res){
        res.render('updatebook',{
            nav,
            title: 'Library'
            
        })
        var num = req.params.id;

        booksRouter.post('/update',function(req,res){
            var item={
                title:req.body.title,
                author:req.body.author,
                genre:req.body.genre,
                image:req.body.image
            }
            Bookdata.findOneAndUpdate({_id:num},{$set:item},function(err,red){
                res.redirect("/books");
    
            })

        
    });

});
    return booksRouter;
    
}

module.exports = router;