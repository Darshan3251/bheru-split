import React, { useState } from "react";

export const ExerciseCard = (props) => {
  const { exercise, i } = props;
  const [setComplete, setsetComplete] = useState(0);
  const [description, setdescription] = useState(false)

  function handlesetcomplete() {
    setsetComplete((setComplete + 1) % 6);
  }
  function handaldescription(){
    setdescription((prev) => !prev);
  }

  return (
    <>
      <div className="p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap">
      
        <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
          <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400">
            0{i + 1}
          </h4>
          <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center">
            {exercise.name.replaceAll("_", " ")}
          </h2>
          <p className="text-sm text-slate-400 capitalize">{exercise.type}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-slate-400 text-sm">Muscles Groups</h3>
          <p className="capitalize">{exercise.muscles.join(" & ")}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
          {["reps", "rest", "tempo"].map((info) => (
            <div
              key={info}
              className="flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full"
            >
              <h3 className="capitalize text-slate-400 text-sm">
                {info === "reps" ? `${exercise.unit}` : info}
              </h3>
              <p className="font-medium">{exercise[info]}</p>
            </div>
          ))}
          <button
            onClick={handlesetcomplete}
            className="flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600 w-full "
          >
            <h3 className="text-slate-400 text-sm capitalize">Sets Completd</h3>
            <p className="font-medium">{setComplete}/5</p>
          </button>
        </div>

          {/* description logic too hide and show */}
      
          <div>

      {/* Button with Toggle Logic */}
      <div className="relative bg-slate-900 border border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          onClick={handaldescription}
          className="relative flex px-3 py-1 focus:outline-none focus:ring-0 focus:border-none"
        >
          <p className="text-white">Description</p>
        </button>
        <div className="absolute top-0 right-0 w-6 h-6 flex items-center justify-center mr-3 mt-1 text-white cursor-pointer">
          {description ? "-" : "+"}
        </div>
      </div>

            {/* Description Container */}
    

        {description && (
        <div className="flex flex-col bg-slate-950 rounded gap-2  py-2 px-2">
          {exercise.description.split("___").map((val, index) => (
            <div key={index} className="text-sm   text-slate-400">
              {val}
            </div>
          ))}
        </div>
      )}

    </div>
  
{/* end logic    */}

      </div>
    </>
  );
};
