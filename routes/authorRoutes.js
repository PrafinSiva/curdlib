
const express = require('express');

const authorsRouter = express.Router();
const Authordata = require('../models/authordata');
function router(nav){
    
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title:'Author',
                authors
        });
        
 
    });
    });
    
    authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    Authordata.findOne({_id:id})
    .then(function(author){
        res.render('author',{
            nav,
             title:'Author',
             author
      });
    
     });
    });
    authorsRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        Authordata.remove({_id:id},function(err,red){
            res.redirect("/authors");
        })
        
    });
    authorsRouter.get('/update/:id',function(req,res){
        res.render('updateauthor',{
            nav,
            title: 'Library'
            
        })
        var num = req.params.id;

        authorsRouter.post('/update',function(req,res){
            var item={
                title:req.body.title,
                book:req.body.book,
                genre:req.body.genre,
                image:req.body.image
            }
        
            
            
            Authordata.findOneAndUpdate({_id:num},{$set:item},function(err,red){
                res.redirect("/authors");
    
            })

        
    });

});

    return authorsRouter;
    
}

module.exports = router;