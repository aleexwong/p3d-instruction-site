import React from "react";

import IMAGES from "../components/Images.js";

export const questions = [
    {
        id: 1,
        question: "First person mode",
        answer: "Movement can be done using the WASD movements.\n\tW - Move forward \n\tS - Move backwards \n\tA - Move left \n\tD - Move right  \n\tSpace - Jump \n\tLeft drag - move camera view left \n\tRight drag - move camera view right",
        images1: IMAGES.firstPersonViewMode,
        images2: IMAGES.livingRoom
        
    },    
    {
        id: 2,
        question: "Orbital mode ",
        answer: "You can view the layout in an angled view.",
        images1: IMAGES.eyeViewMode,
        images2: IMAGES.houseEyeMode
        
    },
    {
        id: 3,
        question: "Top-down mode",
        answer: "Fixed camera Birdseye view. \nRight click left drag - move camera view left. \nRight click right drag - move camera view right. \nLeft click drag - rotate the view.",
        images1: IMAGES.topdownViewMode,
        images2: IMAGES.houseTopDownView
    },
]

export default questions;

 