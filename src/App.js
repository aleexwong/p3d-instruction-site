import React from "react";

import questions from "./instructions/instructions.js";
import Banner from "./components/pages/Banner.js";
import Logo from './images/p3d-assets/p3d-logo-name.svg';
import PoweredByLogo from './images/p3d-assets/p3d-powered-by.svg';
import "./App.css";

function App() {
  return (
    <Banner>
      <img src={Logo} className="header-logo" alt="logo" />
      <Banner.Header>Instructions Manual</Banner.Header>
      <div className="introduction">
        <h1> Introduction </h1>
        <p>This instruction walks you through on how to use the PictureThis3D software.
          This instruction set is intended for first time users to be able to be able to create and build environments for their needs.
          PictureThis3D is 3D modelling software caters to multiple users such as homeowners, interior designers, real estate companies and furniture companies that want to design and model spaces.
        </p>
      </div>

      <div className="introduction">
        <h1> Requirements  </h1>
        <ol>
          <li>Laptop or Personal Computer </li>

          <li>Mouse with a scroll wheel and keyboard</li>

          <li>One of the following Web Browsers:</li>

          <ul>
            <li>Google Chrome, Firefox, Microsoft Edge</li>
          </ul>
          <li>Working internet connection</li>
        </ol>
      </div>

      {questions.map((question) => (
        <Banner.Entity key={question.id}>
          <Banner.Question>{question.question}</Banner.Question>
          <Banner.Text>{question.answer}
            <img src={question.images} width="" height="" alt="" /></Banner.Text>
        </Banner.Entity>
      ))}

      <br></br>
      <h4>
        Question not on the list? Contact out help desk for further enquiries
      </h4>
      <img src={PoweredByLogo} className="footer-logo" alt="logo" />
    </Banner>
  );
}

export default App;