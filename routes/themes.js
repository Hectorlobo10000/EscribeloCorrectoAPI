var express = require('express');
var router = express.Router();
var paragraphModel = require('../models/paragraph');

router.get('/api/chapter/:chapterId/theme/:themeId', function(req, res, next) {
    paragraphModel.find({'number_paragraph': 0}, function(err, doc){
        if(err){
            res.send(err.message);
        }
        else{
            res.send(doc);
        }
    });
});

module.exports = router;