var express = require('express');
var router = express.Router();

router.get('/api', function(req, res, next){
    res.status(200).json({message:"hello"});
})

module.exports = router;