import React from 'react';

import "./HomePage.css";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>


const HomePage = () => (
  <React.Fragment>
    <div className="introduction">
      <h1>Getting Started With Parzona</h1>
      <p>PictureThis3D’s Parzona is a 3D visualization tool geared towards showcasing products in a simulated environment. This page is an overview of the instructional documentation of this product</p>
    </div>

    <div className="introduction">
      <h1>Requirements</h1>
      <ol>
        <li>Laptop or Personal Computer </li>
        <li>Mouse with a scroll wheel and keyboard</li>
        <li>One of the following Web Browsers:</li>
        <ul>
          <li>Google Chrome, Firefox, Microsoft Edge</li>
        </ul>
        <li>Working internet connection</li>
      </ol>

      <br></br>
    </div>
    <div className='pagesButtons'>
      <Link className="d-grid gap-2" to="/Movement">
        <Button variant="primary" size="lg">
          Movement
        </Button>
      </Link>
      <br></br>
      <Link className="d-grid gap-2" to="/ViewMode">
        <Button variant="primary" size="lg">
          View Mode
        </Button>
      </Link>
      <br></br>
      <Link className="d-grid gap-2" to="/Functionality">
        <Button variant="primary" size="lg">
          Functionality
        </Button>
      </Link>
    </div>
  </React.Fragment>
);

export default HomePage;