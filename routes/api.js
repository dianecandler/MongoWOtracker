const router = require('express').Router();
const User = require('../models');


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

router.put("/api/workouts/:id", function(req, res){
    console.log(req.body);
    User.findByIdAndUpdate(req.params.id, {exercises: req.body}).then(function(data){
        return res.json(data);
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