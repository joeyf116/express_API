const express = require("express");
    router = express.Router();

router.get("/", (req,res) => {
    res.render('template', {
        locals: {
            title: '<h1 style="text-align:center">Welcome!</h1>'
        },
        partials: {
            partial: 'partial-index'
        }
    })
});
   

module.exports = router;