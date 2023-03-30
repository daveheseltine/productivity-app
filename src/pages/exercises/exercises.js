// Import:
import React, { useEffect, useState } from "react";
import API from "../../utils/API.js";
import Masonry from "react-masonry-css";
import GridLoader from "react-spinners/GridLoader";

// Require:
const noResultsImg = require('../../assets/attackofsomeclones.jpg')


function Exercises() {
    // API loading indicator:
    const [apiLoading, setApiLoading] = useState(false);

    // API parameters:
    const [apiParams, setApiParams] = useState({
        type: "",
        muscle: "",
        difficulty: ""
    });

    // Masonry content (of API results):
    const [noResults, setNoResults] = useState(false);
    const [masonryContent, setMasonryContent] = useState([]);

    // Radio:
    const optionsType = ["cardio", "olympic_weightlifting", "plyometrics", "powerlifting", "strength", "stretching", "strongman"];
    const optionsMuscle = ["abdominals", "adductors", "biceps", "calves", "chest", "forearms", "glutes", "hamstrings", "lats", "lower_back", "middle_back", "neck", "quadriceps", "traps", "triceps"];
    const optionsDifficulty = ["beginner", "intermediate", "expert"];

    // Masonry formatting:
    const breakpointColumnsObj = {
        default: 3,
        1200: 2,
        992: 1
    }

    // Function to update API parameters to be called:
    const handleChange = (name, value) => {
        setApiParams({
            ...apiParams,
            [name]: value
        });    
    }

    const radioGenerate = (array, param) => {
        let radioGenerated = [];
        // let arrayLength = array.length;
        array.forEach((data, index) => {
            let text = data.replace("_", " ");
            text = text[0].toUpperCase() + text.slice(1);

            radioGenerated.push(
                <div key={index}>
                    <input type="radio" name={param} value={data} onChange={e=>handleChange(e.target.name, e.target.value)}/> {text}
                </div>
            );
        });

        radioGenerated.push(
            <div key={array.length}>
                    <input type="radio" name={param} value="" onChange={e=>handleChange(e.target.name, e.target.value)}/> [x]
                </div>
            );

        return (
            <div className="pt-2">
                <div className="px-3 py-2" style={{backgroundColor: "#f2f2f2", border: "solid 3px lightgrey", borderRadius: "20px"}}>
                    {radioGenerated}
                </div>
            </div>
        )
    }

    // Initialisation:
    // Function to run on Start and "onChange":
    useEffect(() => {
        setMasonryContent([]);
        setNoResults([]);
        setApiLoading(() => true);
        let resData = [];
        API(apiParams, 0)
            .then (res => {
                setApiLoading(() => false);
                resData.push(...res.data);
                resData = resData.sort((a, b) => a.name.localeCompare(b.name));
                console.log(resData.length);
                if (resData.length === 0) {
                    setNoResults(
                        <div className="col-12 d-flex flex-wrap justify-content-center">
                            <h3 className="col-10 text-center py-5">I hate to say it, but it looks like the exercise you're searching for doesn't exist.</h3>                            
                            <img className="col-10" src={noResultsImg} alt="Hello there!" style={{borderRadius: "30px"}}/>
                        </div>                        
                    );
                } else {

                    setMasonryContent(resData.map(
                        function(exercise, index) {
                            return (
                                <div key={index} className="p-3">
                                    <h1 className="col-12 text-center pb-3">{exercise.name}</h1>
                                    <div className="d-flex flex-wrap text-center pb-3">
                                        <p className="col-6"><strong>Type:</strong><br/>{exercise.type}</p>
                                        <p className="col-6"><strong>Muscle:</strong><br/>{exercise.muscle}</p>
                                        <p className="col-6"><strong>Equipment:</strong><br/>{exercise.equipment}</p>
                                        <p className="col-6"><strong>Difficulty:</strong><br/>{exercise.difficulty}</p>                                
                                    </div>
                                    <p className="col-12"><strong>Instructions:</strong><br/>{exercise.instructions}</p>
                                </div>
                            )
                        }
                    ))
                }
            })
    }, [apiParams])

    const radioType = radioGenerate(optionsType, "type");
    const radioMuscle = radioGenerate(optionsMuscle, "muscle");
    const radioDifficulty = radioGenerate(optionsDifficulty, "difficulty");

    return (
        
    <div>
        <div id="formbackground">
            <h2 >Exercises</h2>
            <p >Find an inspiration for your next workout</p>
        </div>

        <div className="d-flex flex-wrap">
            {/* Radios: */}
            <div className="col-lg-3 col-md-4 col-12 px-3">
                {radioType}
                {radioMuscle}
                {radioDifficulty}
            </div>

            {/* Masonry: */}
            <div className="col-lg-9 col-md-8 col-12 px-2 py-2">
                <div className="d-flex justify-content-center">
                    <GridLoader className="m-5" color={"#3E83C1"} loading={apiLoading} size={100} />
                    {noResults}
                </div>        
                <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {masonryContent}
                </Masonry>
            </div>
        </div>
    </div>
    )
}


// Export:
export default Exercises