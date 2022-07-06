const express = require('express');
const workoutControllers = require('../controllers/workoutControllers');
const router = express.Router();


router.get('/', workoutControllers.workout_get_all );
router.post('/', workoutControllers.workout_post );
router.get('/:id', workoutControllers.workout_get );
router.delete('/:id', workoutControllers.workout_delete );
router.get('/:id', workoutControllers.workout_update );



module.exports = router ; 