const express = require('express');
const homeRoutes =express.Router();

function router(nav){
    homeRoutes.get('/',function(req,res){
        res.render('home',{
            nav,
            title: 'Library'
        })
    })

return homeRoutes;
}

module.exports = router;
