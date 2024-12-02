import React, { useState } from "react";
import { SectionWrap } from "./SectionWrap";
import { SCHEMES, WORKOUTS } from "../utils/swoldire";
import { Button } from "./Button";

function Header(props) {
  const { title, index, description } = props;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export const Genrator = (props) => {
  const {poison,setPoison,goal,setGoal,muscles,setMuscles,updateWorkout}=props
  //  let shoeModel=false

  const [showModel, setshowModel] = useState(false);

  function toggleModel() {
    setshowModel(!showModel);
  }
  function updateMuscles(musclesGroup) {
    if (muscles.includes(musclesGroup)) {
      setMuscles(muscles.filter((val) => val !== musclesGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }
    if (poison !== "individual") {
      setMuscles([musclesGroup]);
      setshowModel(false)
      return;
    }
    if(muscles.length===2){
      setshowModel(false)
      return
    }
    setMuscles([...muscles, musclesGroup]);
  }

  return (
    <>
      <SectionWrap
        id={"generate"}
        header={"generate your workout"}
        title={["It's", "Huge", "o'clock"]}
      >
        {/* first section 01 */}
        <Header
          index={"01"}
          title={"Pick your poison"}
          description={"Select the workout you wish to endure."}
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
              <button
                onClick={() => {
                  setMuscles([])
                  setPoison(type);
                }}
                className={
                  "bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600 " +
                  (type === poison ? "border-blue-600" : "border-blue-400")
                }
                key={typeIndex}
              >
                <p className="capitalize">{type.replaceAll("_", " ")}</p>
              </button>
            );
          })}
        </div>

        {/* //second section 02 */}

        <Header
          index={"02"}
          title={"Lock on targets"}
          description={"Select the muscles judged for annihilation."}
        />
        <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
          <button
            onClick={toggleModel}
            className="relative flex px-4 py-3 items-center justify-center"
          >
            <p className="capitalize">{muscles.length==0? "Select muscles Groups":muscles.join(' ')}</p>
            <img
              src="/arrow.png"
              alt="Dropdown Arrow"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 filter invert"
            />
          </button>
          {showModel && (
            <div className="flex flex-col px-3 pb-3">
              {(poison === "individual"
                ? WORKOUTS[poison]  || [] 
                : Object.keys(WORKOUTS[poison] || {})
              ).map((musclesGroup, musclesGroupIndex) => {
                return (
                  <button
                    onClick={() => {
                        updateMuscles(musclesGroup)
                    }}
                    key={musclesGroupIndex}
                    className={"hover:text-blue-400 duration-200 "+(muscles.includes(musclesGroup)?'text-blue-400':"")}
                  >
                    <p className="capitalize">
                      {musclesGroup.replaceAll("_", " ")}
                    </p>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* 3rd section 03 */}
        <Header
          index={"03"}
          title={"Become Juggernaut"}
          description={"Select your ultimate objective."}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3  gap-4">
          {Object.keys(SCHEMES).map((scheme, schemesIndex) => {
            return (
              <button
                onClick={() => {
                  setGoal(scheme);
                }}
                className={
                  "bg-slate-950 border  py-3 rounded-lg duration-200 hover:border-blue-600 " +
                  (scheme === goal ? "border-blue-600" : "border-blue-400")
                }
                key={schemesIndex}
              >
                <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
              </button>
            );
          })}
        </div>
        <Button func={updateWorkout} text={"Fourmulate"}/>
      </SectionWrap>
    </>
  );
};
