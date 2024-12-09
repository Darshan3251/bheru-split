// import { useState } from "react";

// import "./App.css";
// import { Hero } from "./components/Hero";
// import { Genrator } from "./components/Genrator";
// import { Workout } from "./components/Workout";
// import { generateWorkout } from "./utils/generateworkout";

// function App() {
//   const [workout,setWorkout]=useState(null)
//   const [poison, setPoison] = useState("individual");
//   const [muscles, setMuscles] = useState([]);
//   const [goal, setGoal] = useState([]);

//   function updateWorkout(){
//     window.location.href='#workout'

//     if(muscles.length<1){
//       return
//     }
//     let newWorkout=generateWorkout({poison,muscles,goal})
//     // console.log(newWorkout);
//     setWorkout(newWorkout)

//   }
//   return (
//     <>
//       <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
//         <Hero></Hero>
//         <Genrator
//         poison={poison}
//         setPoison={setPoison}
//         muscles={muscles}
//         setMuscles={setMuscles}
//         goal={goal}
//         setGoal={setGoal}
//         updateWorkout={updateWorkout}
//         />
//         {workout && (<Workout workout={workout}/>)}
//       </main>
//     </>
//   );
// }

// export default App;



// auth


import { useState, useEffect } from "react";
import "./App.css";
import { Hero } from "./components/Hero";
import { Genrator } from "./components/Genrator";
import { Workout } from "./components/Workout";
import { generateWorkout } from "./utils/generateworkout";
import Login from "./components/Login";
import { auth } from "./firebase/firebase"; // Firebase configuration
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState([]);
  const [user, setUser] = useState(null); // Manage user state

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state
    });
    return () => unsubscribe();
  }, []);

  function updateWorkout() {
    window.location.href = "#workout";

    if (muscles.length < 1) {
      return;
    }
    let newWorkout = generateWorkout({ poison, muscles, goal });
    setWorkout(newWorkout);
  }

  if (!user) {
    // Show login screen if no user is logged in
    return <Login setUser={setUser} />;
  }

  // Main app content for logged-in users
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Genrator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
