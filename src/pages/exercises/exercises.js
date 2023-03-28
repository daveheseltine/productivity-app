// Import:
import React, { useEffect, useState } from "react";
import API from "../../utils/API.js";
import Masonry from "react-masonry-css";
import "./exercises.css";

import { Container } from 'react-bootstrap';
import Row from '../../components/Row';

function Exercises() {
    // API loading indicator:
    // const [apiLoading, setApiLoading] = useState(false);

    // API parameters:
    const [apiParams, setApiParams] = useState({
        type: "",
        muscle: "",
        difficulty: ""
    });

    // Masonry content (of API results):
    const [masonryContent, setMasonryContent] = useState([]);

    // Radio:
    const optionsType = ["cardio", "olympic_weightlifting", "plyometrics", "powerlifting", "strength", "stretching", "strongman"];
    const optionsMuscle = ["abdominals", "abductors", "adductors", "biceps", "calves", "chest", "forearms", "glutes", "hamstrings", "lats", "lower_back", "middle_back", "neck", "quadriceps", "traps", "triceps"];
    const optionsDifficulty = ["beginner", "intermediate", "expert"];

    // Masonry formatting:
    const breakpointColumnsObj = {
        default: 3,
        1200: 2,
        992: 1
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
            <div class="pt-2">
                <div class="px-3 py-2" style={{backgroundColor: "#f2f2f2", border: "solid 3px lightgrey", borderRadius: "20px"}}>
                    {radioGenerated}
                </div>
            </div>
        )
    }


    // Function to update API parameters to be called:
    const handleChange = (name, value) => {
        setApiParams({
            ...apiParams,
            [name]: value
        });    
    }

    // Initialisation:
    // Function to run on Start and "onChange":
    useEffect(() => {
        // setApiLoading(true);
        let resData = [];
        API(apiParams, 0)
            .then (res => {
                resData.push(...res.data);
                resData = resData.sort((a, b) => a.name.localeCompare(b.name));
                setMasonryContent(resData.map(
                    function(exercise, index) {
                        return (
                            <div key={index} class="p-3">
                                <h1 class="col-12 text-center pb-3">{exercise.name}</h1>
                                <div class="d-flex flex-wrap text-center pb-3">
                                    <p class="col-6"><strong>Type:</strong><br/>{exercise.type}</p>
                                    <p class="col-6"><strong>Muscle:</strong><br/>{exercise.muscle}</p>
                                    <p class="col-6"><strong>Equipment:</strong><br/>{exercise.equipment}</p>
                                    <p class="col-6"><strong>Difficulty:</strong><br/>{exercise.difficulty}</p>                                
                                </div>

                                <p  class="col-12"><strong>Instructions:</strong><br/>{exercise.instructions}</p>
                            </div>
                        )
                    }
                ))
            })
        // setApiLoading(false);
    }, [apiParams])

    const radioType = radioGenerate(optionsType, "type");
    const radioMuscle = radioGenerate(optionsMuscle, "muscle");
    const radioDifficulty = radioGenerate(optionsDifficulty, "difficulty");

    return (
        <div>
            <div>
            <Container id='formbackground'  style={{fontFamily: 'Georgia'}}>
                <Row>
                <div>
                    <h2>Exercises</h2>
                    <p>Find an inspiration for your workout</p>
                    <p></p>
                </div>
                </Row>
            </Container>
          </div>  

        <div class="d-flex flex-wrap" style={{backgroundColor: "#aec4e8"}}>
            {/* Radios: */}
            <div class="col-lg-3 col-md-4 col-12 px-3" style={{positon: "fixed !important", height: "100vh"}}>
                {radioType}
                {radioMuscle}
                {radioDifficulty}
            </div>

            {/* Masonry: */}
            <div class="col-lg-9 col-md-8 col-12 px-2 py-2">
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