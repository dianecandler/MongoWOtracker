const router = require('express').Router();
const User = require('../models');


/* 
C   =   CREATE  =   router.post
R   =   READ    =   router.get
U   =   UPDATE  =   router.put
D   =   DELETE  =   router.delete
*/

router.get("/api/workouts/range", function(req, res){
    User.find().then(function(data){
        res.json(data)
    })
});

router.get("/api/workouts", function(req, res){
    User.find().then(function(data){
        res.json(data)
    })
});

router.post("/api/workouts", function(req, res){
    console.log(req.body);
    User.create({}).then(function(data){
        console.log(data);
        return res.json(data)
    }).catch(function(err){
        res.json(err);
    })
});

router.put("/api/workouts/:id", function(req, res){
    console.log(req.body);
    User.findByIdAndUpdate(req.params.id, {exercises: req.body}).then(function(data){
        return res.json(data)
    }).catch(function(err){
        res.json(err);
    })
});

module.exports = router;