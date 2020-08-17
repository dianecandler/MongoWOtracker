const router = require('express').Router();
const User = require('../models');

router.get('/api/workouts', function (req, res){
    User.find().then(function (data){
        res.json(data);
    })
})

router.post('/api/workouts', function (req, res){
    User.create({}).then(function (workout){
        res.json(workout);
    }).catch(function (err){res.json(err);});
}
);

module.exports = router;