const mongoose = require('mongoose');


const workoutSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
},{ timestamps: true });

const Workout = mongoose.model('wourkout',workoutSchema);

module.exports = Workout ; 