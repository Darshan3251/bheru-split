import React from "react";
import { SectionWrap } from "./SectionWrap";
import { ExerciseCard } from "./ExerciseCard";
import { Button } from "./Button";

export const Workout = (props) => {
  const { workout } = props;
  return (
    <SectionWrap
      id={"workout"}
      header={"welcome to"}
      title={["The", "DANGER", "zone"]}
    >
      <div>
        <p className="text-sm text-slate-400">
          *Note -  <span className="text-blue-400 font-medium">reps</span> is the number of repetitions, <span className="text-blue-400 font-medium">rest</span> is specified in
          seconds, and <span className="text-blue-400 font-medium">tempo</span> is the number of seconds for each movement phase in
          the order of eccentric - isometric - concentric (or down - pause -
          up).<br/><br/> For <span className="text-blue-400 font-medium">weight selection</span>, choose a weight that allows you to complete
          the repetitions with minimal sacrifice to form.<br/><br/> Happy lifting!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <ExerciseCard exercise={exercise} i={i} key={i} />;
        })}
      </div>
      <div className="flex flex-center">
      <Button func={()=>{
        window.location.href='#generate'
      }} text={"Start over"}/>
      </div>
    </SectionWrap>
  );
};
