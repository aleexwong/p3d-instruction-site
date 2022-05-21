import React from 'react';

import "./HomePage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import footsteps from "../images/first-person-view-mode.png";
import livingRoom from '../images/living-room.png'
import eyecon from '../images/eye-view-mode.png'
import orbitalHouse from '../images/house-eye-mode.png'
import topDownIcon from '../images/top-down-view-mode.png'
import topDownView from '../images/house-top-down-view.png'
import floorProduct from '../images/adding-objects.png'
import wallProduct from '../images/adding-walls.png'
import objectSelect from '../images/selecting-object.png'
import rotateObject1 from '../images/rotate-object-1.png'
import rotateObject2 from '../images/rotate-object-2.png'
import rotateObject3 from '../images/rotate-object-3.png'
import changeMaterial from '../images/change-materials-mode.png'
import changeWood1 from '../images/change-wood-1.png'
import changeWood2 from '../images/change-wood-2.png'
import deleteIcon from '../images/delete-mode.png'
import duplicateIcon from '../images/duplicate-items-mode.png'
import duplicate1 from '../images/duplicated-item-1.png'
import duplicate2 from '../images/duplicated-item-2.png'
import couch from '../images/couch.png'
import partition from '../images/partition.png'
import selectPartition from '../images/selectPartition.png'
import quality from '../images/change-quality-mode.png'
import toolbar from '../images/view-toolbar.png'
import darkmode from '../images/dark-mode.png'
import dm1 from '../images/dark-mode-layout-1.png'
import dm2 from '../images/dark-mode-layout-2.png'


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

const style = {
  main:{
   textAlign: 'left' 
  },
  top_down_image:{
    width: '400px',
    height: 'auto',
    alignItems: 'center'
  },
  couch:{
    width: '100%',
    height: 'auto'
  },
  realign:{
    alignItems: 'center'
  },
}


const HomePage = () => (
  <React.Fragment>
    <div>
      <br/>
    <div className="introduction">
      <h2>Getting Started With Parzona</h2>
      <p>PictureThis3D’s Parzona is a 3D visualization tool geared towards showcasing products in a simulated environment. This page is an overview of the instructional documentation of this product.  </p>
    </div>
    <div className="introduction">
      <h3>Views and Movement Controls </h3>
      <p>Entering into the first-person view can be done simply by selecting the eye icon (pictured below) in the view toolbar menu located at the top right corner of the screen. </p>
    </div>
    <div style={style.realign}> <img src={eyecon}></img></div>
    <div className="introduction">
      <p>Upon selection – the user will be placed on the floor in a free-roam state. In this state the users can travel anywhere along the floor of the 3D layout. The movement controls in this state are stated in the following section. </p>
      <h3>Free Roam State</h3>
      <p>Allows the user to roam freely across the floorplan in first person perspective <i>(pictured below)</i>.</p>
      <div><img src={livingRoom}></img></div>
      <p><b>Controls</b><br/>
      <p>Movement – WASD/Arrow Keys</p> 
      <p>Perspective – Left-Click and Drag </p>
      <p>Jump – Space Bar</p>
      </p>

      <h2>Orbital View </h2>
      <p>Entering the orbital view can be done simply by selecting the footsteps icon (pictured below) in the view toolbar menu located at the top right corner of the screen. </p>
    </div>
    <div>
      <img src={footsteps}></img>
    </div>
    <div className="introduction">
      <p>Upon selection – the user will have an orbital view of the entire floor layout. In this state the users can rotate and pan anywhere around 3D layout. The controls in this state are stated in the following section. </p>
      <h3>Orbital State </h3>
      <p>Allows users to rotate and pan around their floor layout <i>(pictured below)</i>.</p>
    </div>
    <div>
      <img src={orbitalHouse}></img>
    </div>
    <div className='introduction'>
    <p>
    <b>Controls</b><br/>
    <p>Pan – Right-Click + Drag </p>
    <p>Rotate – Left-Click + Drag </p>
    <p>Zoom – Scroll </p> 
    </p>
    <h2>Top-Down View </h2>
    <p>Entering into the top-down view can be done simply by selecting the <b>map</b> icon <i>(pictured below)</i> in the view toolbar menu located at the top right corner of the screen. </p>
    </div>
    <div>
    <img src={topDownIcon}></img>
    </div>
    <div className='introduction'>
      <p>Upon selection – the user will have a top-down view of the entire floor layout. In this state the users can rotate and pan anywhere around 3D layout. The controls in this state are stated in the following section. </p>
      <h2>Top-Down State </h2>
      <p>Allows users to rotate and pan around their floor layout <i>(pictured below)</i>.</p>
      <img src={topDownView} style={style.top_down_image}></img>
      <p>
      <b>Controls</b><br/>
      <p>Pan – Right-Click + Drag </p>
      <p>Rotate – Left-Click + Drag </p>
      <p>Zoom – Scroll </p>
      </p>
      <h2>Adding Objects </h2>
      <br/>
      <h3>Adding Floor Products </h3>
      <p>Click on the floor plane where you would like to place a new product. Upon selection – a <b>floor products</b> menu will appear at the bottom of the screen <i>(pictured below)</i>. In the event your menu was already open – the page will switch to the appropriate menu.  <br/>
      <br/>
      There, you can select the floor product you wish to place.  </p>
  
    </div>
    <div>
      <img src={floorProduct}></img>
    </div>
    <div className='introduction'>
      <p>Once a product has been selected - it will spawn itself onto the floor where it can be moved and manipulated. See object manipulation for further details. </p>
      <h3>Adding Wall Products </h3>
      <p>Click on the floor plane where you would like to place a new product. Upon selection – a <b>wall product</b>  menu will appear at the bottom of the screen <i>(pictured below)</i>. In the event your menu was already open – the page will switch to the appropriate menu.  </p>
  
      <p>There, you can select the wall product you wish to place. </p>
      <img src={wallProduct}></img>
      <p>Once a product has been selected - it will spawn itself onto the floor where it can be moved and manipulated. See object manipulation for further details. </p>
      <br/>
      <h2>Object Manipulation </h2>
      <h3>Selecting Objects </h3>
      <p>Selecting objects is a simple and effective tool for targeting items that users wish to be manipulated. To select an object on the floor plan – simply left-click the object. Once selected – the item will be outlined in purple <i>(pictured below)</i>. </p>
      <img src={objectSelect} style={style.top_down_image}></img>
      <h3>Moving Objects </h3>
      <p>To move a product around the floor layout – simply left-click and drag the selected item to the area that it’s intended to be placed.  </p>
      <h3>Rotating Objects</h3>
      <p>To rotate product – left-click while scrolling and the product will rotate itself respectively.  Scroll upwards to rotate the object clockwise, and alternatively downwards for counter-clockwise rotation. </p>
      <div>
        <img src={rotateObject1}></img>
        <img src={rotateObject2}></img>
        <img src={rotateObject3}></img>
      </div>
      <h3>Swapping Materials</h3>
      <p>Certain floor and wall products have additional customizability. These items include – flooring, wallpaper, windows, doors, couches, and baseboards.  </p>
      <p>Items with this additional functionality are referred to as to having <b>swappable material</b> and can be recognized when the following icon appears on the left side of the screen when the object is selected: </p>
    </div>
    <div>
      <img src={changeMaterial}></img>
    </div>
    <div className='introduction'>
      <p>
      Once clicked – a new menu will appear where new materials for that specific item will appear. Users can quickly swap between materials to test their layout with different skins and styles. 
      </p>
      <img src={changeWood1}></img><br/>
      <img src={changeWood2}></img>
      <h3>Deleting Objects </h3>
      <p>Users can quickly delete unwanted objects in their floorplan by selecting the item and clicking the following button in their <b>item toolbar</b>: </p>
    </div>
    <div>
      <img src={deleteIcon}></img>
    </div>
    <div className='introduction'>
    <h3>Duplicating items</h3>
    <p>Users can quickly duplicate objects in their floorplan by selecting the item and clicking the following button in their <b>item toolbar</b>: </p>
    </div>
    <div>
      <img src={duplicateIcon}></img>
    </div>
    <div className='introduction'>
      <p>
      Once clicked – the item will replicate itself at the exact position of the object.  
      </p>
      <img src={duplicate2} style={style.top_down_image}></img>
    </div>
    <div className='introduction'>
      <h2>Object Dimension Manipulation </h2>
      <p>Users can make simple adjustments to the dimensions of their furniture objects easily with their scroll wheel.  Length adjustments can be made by selecting the desired object and holding SHIFT while scrolling upwards or downwards to increase and decrease the object size. Width adjustments can be done similarly only holding the CTRL button rather than SHIFT.  </p>
      <p>
      <b>Controls</b><br/>
      <p>Length – Shift + Scroll </p> 
      <p>Width – CTRL + Scroll  </p> <br/> 
      <h2>Furniture Manipulation </h2>
      <p>
      Partitional pieces are easy to edit and manipulate with the Parzona software. It’s recommended that furniture manipulation be done in the <b>first-person</b> view <i>(pictured below)</i>. Refer to Views and Movement Controls for further information. 
      </p>
      <img src={couch} style={style.couch}></img>
      <p> 
        To add a partition – simply click into the divide in the section you wish to add <i>(pictured below)</i>. Once selected, a <b>replacements</b> menu will appear at the bottom of your screen. There, you can select the type of partition you wish to select.  </p>
      </p>
      <img src={partition}></img>
      <p>Once selected, a new partition will appear in the space you appointed. A partition can be selected directly for users to manipulate <i>(pictured below)</i>. Users can swap materials, change partition type, duplicate, and delete the partition as they will.  </p>
      <img src={selectPartition}></img>
    </div>
    <div className='introduction'>
      <h2>Render Quality </h2>
      <p>The render quality of the model can be adjusted by the user in order to optimize the performance of the software. If your software is running slow – consider <b>lowering</b> the render quality to increase the speed.  </p>
      <p>The quality of the render can be adjusted with the following button in the view <b>toolkit</b>: </p>
    </div>
    <div>
      <img src={quality}></img>
    </div>
    <div className='introduction'>
      <p>
      The small meter on the icon indicates the quality of the render. The following indicating the <b>lowest</b> possible render quality (but the <b>highest</b> speed): 
      </p>
    </div>
    <div>
    <img src={toolbar}></img>
    </div>
    <div className='introduction'>
      <h2>Dark mode	 </h2>
      <p>Users can adjust the view mode of the application by selecting the following button in the <b>view toolkit</b>: </p>
    </div>
    <div>
      <img src={darkmode}></img>
    </div>
    <div className='introduction'>
      <p>
      Upon selection the user can swap between light and dark mode depending on their preference. Swapping view modes affects the menu windows as well as the background plane <i>(pictured below)</i>. 
      </p>
      <img src={dm1}></img><br/>
      <img src={dm2}></img>
      <br/>
      <h2>Anything Missing? </h2>
      <p>If anything is missing within the documentation or you find any part of this instruction set confusing – PictureThis3D can be contacted <a href="https://picturethis3d.com/contact/">here</a>. </p>
    </div>
    
    </div>
  </React.Fragment>
);

export default HomePage;