import { useState } from "react";

import "./App.css";
import { Hero } from "./components/Hero";
import { Genrator } from "./components/Genrator";
import { Workout } from "./components/Workout";
import { generateWorkout } from "./utils/generateworkout";

function App() {
  const [workout,setWorkout]=useState(null)
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState([]);

  function updateWorkout(){
    window.location.href='#workout'

    if(muscles.length<1){
      return
    }
    let newWorkout=generateWorkout({poison,muscles,goal})
    // console.log(newWorkout);
    setWorkout(newWorkout)

  }
  return (
    <>
      <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
        <Hero></Hero>
        <Genrator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
        />
        {workout && (<Workout workout={workout}/>)}
      </main>
    </>
  );
}

export default App;
