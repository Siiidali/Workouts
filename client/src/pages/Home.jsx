import { useEffect} from "react";
import Workout from "../components/Workout";
import WorkoutForm from "../components/WorkoutForm";
import {useWorkoutsContext} from "../hooks/useWorkoutsContext"

const Home = () => {

  const {workouts,dispatch} = useWorkoutsContext();

useEffect(()=>{
  const fetchWorkouts = async ()=>{
    const responce = await fetch('api/workouts');
    if(responce.ok){
      const data = await responce.json();
      dispatch({type: 'SET_WORKOUTS', payload: data})
    }
  };

  fetchWorkouts();
},[dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout)=>(
          <Workout key={workout._id} workout={workout}/>
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home

