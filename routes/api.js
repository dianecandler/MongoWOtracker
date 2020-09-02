const router = require('express').Router();
const User = require('../models');

/* 
const router = require("express").Router(); const Workout = require("../models/workout.js"); LINE 1 and 2 sub User for Workout

router.post("/api/workouts", (req, res) => { Workout.create({}) .then(dbWorkout => { res.json(dbWorkout); }) .catch(err => { res.json(err); }); });


router.get("/api/workouts", (req, res) => { Workout.find() .then(dbWorkouts => { res.json(dbWorkouts); }) .catch(err => { res.json(err); }); });

router.get("/api/workouts/range", (req, res) => { Workout.find({}).limit(7) .then(dbWorkouts => { console.log(dbWorkouts) res.json(dbWorkouts); }) .catch(err => { res.json(err); }); });

router.delete("/api/workouts", ({ body }, res) => { Workout.findByIdAndDelete(body.id) .then(() => { res.json(true); }) .catch(err => { res.json(err); }); });

module.exports = router;


*/
/* 
C   =   CREATE  =   router.post
R   =   READ    =   router.get
U   =   UPDATE  =   router.put
D   =   DELETE  =   router.delete
*/

router.get("/api/workouts/range", function(req, res){
    User.find().sort({day: 1}).limit(10).then(function(data){
        res.json(data);
    });
});

router.get("/api/workouts", function(req, res){
    User.find({}).then(function(data){
        res.json(data);
    });
});

router.post("/api/workouts", function(req, res){
    console.log(req.body);
    User.create({}).then(function(data){
        console.log(data);
        return res.json(data);
    }).catch(function(err){
        res.json(err);
    });
});

// router.post('/api/workouts', function(req, res){
//     const workout = req.body;
//     workout.day = new Date();
//     console.log(workout);
//     const addWorkout = new User(workout);

//     addWorkout.save().then(()=>{
//         res.send(addWorkout);
//     }).catch(err=>{
//         console.log(err);
//     })
// })


// router.put("/api/workouts/:id", ({ body, params }, res) => { Workout.findByIdAndUpdate( params.id, { $push: { exercises: body } }, // "runValidators" will ensure new exercises meet our schema requirements { new: true, runValidators: true } ) .then(dbWorkout => { res.json(dbWorkout); }) .catch(err => { res.json(err); }); });

router.put("/api/workouts/:id", function(req, res){
    console.log(req.body);
    User.findByIdAndUpdate(req.params.id, {exercises: req.body}).then(function(data){
        return res.json(data);exercises
    }).catch(function(err){
        res.json(err);
    });
});

// const newWorkout = await Workout.findById(req.params.id);
// newWorkout.exercises.push(req.body);
// newWorkout
//   .save()
//   .then(() => {
//     res.send(newWorkout);
//   })
//   .catch(error => {
//     console.log(error);
//     res.status(500).send(error);
//   });
// router.put("/api/workouts/:id", async (req, res) => {
//     const newWorkout = await User.findByIdAndUpdate(req.params.id, {exercises: req.body});
//     newWorkout.save().then(() =>{
//         res.send(newWorkout);
//     })
//     .catch(error => {
//         console.log(error);
//     })
// })

module.exports = router;