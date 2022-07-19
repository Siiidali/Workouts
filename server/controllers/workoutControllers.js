const Workout = require("../models/WorkoutModel");
const mongoose = require('mongoose');
// get all the workouts
const workout_get_all = async (req,res)=>{
   try {
    const workouts = await Workout.find()
    res.status(200).json(workouts);
   } catch (error) {
    res.status(400).json({error: error.message});
   }
};

// create a workout
const workout_post = async (req,res)=>{
    const {title,reps,load} = req.body ; 

    let emptyFields = []

    if (!title) {
      emptyFields.push('title')
    }
    if (!load) {
      emptyFields.push('load')
    }
    if (!reps) {
      emptyFields.push('reps')
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    try {
        const workout = await Workout.create({title,reps,load}); 
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
        console.log(error.message);
    }
};

// get a signle workout
const workout_get = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'});
    }
        const workout = await Workout.findById(id);
        if(!workout){
            return res.status(400).json({error: "No such workout"});
        }
        res.status(200).json(workout);

};

// delete a single workout
const workout_delete = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'});
    }
    const workout = await Workout.findOneAndDelete({_id:id});
    if(!workout){
        return res.status(400).json({error: "No such workout"});
    }
    res.status(200).json(workout);
};

// update a single workout
const workout_update = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'});
    }
    const workout = await Workout.findOneAndUpdate({_id:id},{...req.body});
    if(!workout){
        return res.status(400).json({error: "No such workout"});
    }
    res.status(200).json(workout);
};






module.exports = {
    workout_get_all,
    workout_post,
    workout_get,
    workout_delete,
    workout_update
}