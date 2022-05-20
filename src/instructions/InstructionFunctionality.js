import React from "react";

import IMAGES from "../components/Images.js";



// image1 is reserved for icons
// max images per section is 5 (including icon)
export const questions = [
    {
        id: 1,
        question: "Selecting Objects",
        answer: "Selecting objects is a simple and effective tool for targeting items that users wish to be manipulated. To select an object on the floor plan – simply left-click the object. Once selected – the item will be outlined in purple (pictured below).",
        images2: IMAGES.selectingObject
        
    },    
    {
        id: 2,
        question: "Moving Objects",
        answer: "To move a product around the floor layout - simply left-click and drag the selected item to the area that it’s intended to be placed. ",    
    },
    {
        id: 3,
        question: "Rotating Objects",
        answer: "To rotate product - left-click while scrolling and the product will rotate itself respectively.  Scroll upwards to rotate the object clockwise, and alternatively downwards for counter-clockwise rotation.",
        images2: IMAGES.rotateObject1,
        images3: IMAGES.rotateObject2,
        images4: IMAGES.rotateObject3,
    },
    {
        id: 4,
        question: "Swapping Materials",
        answer: "Certain floor and wall products have additional customizability. These items include – flooring, wallpaper, windows, doors, couches, and baseboards. Items with this additional functionality are referred to as to having swappable materials and can be recognized when the following icon appears on the left side of the screen when the object is selected:\n\nOnce clicked – a new menu will appear where new materials for that specific item will appear. Users can quickly swap between materials to test their layout with different skins and styles.\n",
        images1: IMAGES.changeMaterialsMode,
        images2: IMAGES.changeWood1,
        images3: IMAGES.changeWood2
    },

    {
        id: 5,
        question: "Deleting Objects",
        answer: "Users can quickly delete unwanted objects in their floorplan by selecting the item and clicking the following button in their item toolbar:",
        images1: IMAGES.deleteMode,
    },

    {
        id: 6,
        question: "Duplicating items",
        answer: "Users can quickly duplicate objects in their floorplan by selecting the item and clicking the following button in their item toolbar:\n\nOnce clicked – the item will replicate itself at the exact position of the object. ",
        images1: IMAGES.duplicateItemsMode,
        images2: IMAGES.duplicatedItem1,
        images3: IMAGES.duplicatedItem2
    },

    {
        id: 7,
        question: "Object Dimension Manipulation",
        answer: "Users can make simple adjustments to the dimensions of their furniture objects easily with their scroll wheel.  Length adjustments can be made by selecting the desired object and holding SHIFT while scrolling upwards or downwards to increase and decrease the object size. Width adjustments can be done similarly only holding the CTRL button rather than SHIFT. \n\nControls:\nLength – Shift + Scroll\nWidth – CTRL + Scroll",
    },

    {
        id: 8,
        question: "Adding Floor Products",
        answer: "Click on the floor plane where you would like to place a new product. Upon selection – a floor products menu will appear at the bottom of the screen (pictured below). In the event your menu was already open – the page will switch to the appropriate menu.\nThere, you can select the floor product you wish to place.\nOnce a product has been selected - it will spawn itself onto the floor where it can be moved and manipulated. See object manipulation for further details.\n",
        images2: IMAGES.addingObjects
    },

    {
        id: 9,
        question: "Adding Wall  Products",
        answer: "Click on the floor plane where you would like to place a new product. Upon selection – a wall products menu will appear at the bottom of the screen (pictured below). In the event your menu was already open – the page will switch to the appropriate menu. \nThere, you can select the wall product you wish to place.\nOnce a product has been selected - it will spawn itself onto the floor where it can be moved and manipulated. See object manipulation for further details.\n",
        images2: IMAGES.addingWalls
    },

    {
        id: 10,
        question: "Furniture Manipulation",
        answer: "Partitional pieces are easy to edit and manipulate with the Parzona software. It’s recommended that furniture manipulation be done in the first-person view (pictured below). Refer to Views and Movement Controls for further information.\n\nTo add a partition – simply click into the divide in the section you wish to add (pictured below). Once selected, a replacements menu will appear at the bottom of your screen. There, you can select the type of partition you wish to select.\n\nOnce selected, a new partition will appear in the space you appointed. A partition can be selected directly for users to manipulate (pictured below). Users can swap materials, change partition type, duplicate, and delete the partition as they will.",
        images2: IMAGES.addingExtraCouch1,
        images3: IMAGES.addingExtraCouch2,
        images4: IMAGES.addingExtraCouch3
    },

    {
        id: 11,
        question: "Render Quality",
        answer: "The render quality of the model can be adjusted by the user in order to optimize the performance of the software. If your software is running slow – consider lowering the render quality to increase the speed. \nThe quality of the render can be adjusted with the following button in the view toolkit:\n\nThe small meter on the icon indicates the quality of the render. The following indicating the lowest possible render quality (but the highest speed):",
        images2: IMAGES.changeQualityMode,
        images3: IMAGES.changeQualityToolBar
    },

    {
        id: 12,
        question: "Dark mode",
        answer: "Users can adjust the view mode of the application by selecting the following button in the view toolkit:\n\nUpon selection the user can swap between light and dark mode depending on their preference. Swapping view modes affects the menu windows as well as the background plane (pictured below).",
        images1: IMAGES.darkMode,
        images2: IMAGES.darkModeLayout1,
        images3: IMAGES.darkModeLayout2,
    },   
]

export default questions;

 