import React from "react";

import NotFoundPage from "./components/pages/NotFoundPage";
import Movement from './components/pages/Movement'
import ViewMode from './components/pages/ViewMode'
import Functionality from './components/pages/Functionality'
import Banner from "./components/pages/Banner";
import Logo from './images/p3d-assets/p3d-logo-name.svg';
import PoweredByLogo from './images/p3d-assets/p3d-powered-by.svg'
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import HomePage from "./components/pages/HomePage";


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      <Banner>
      <Link to="/">
        <img src={Logo} className="header-logo" alt="logo" />
      </Link> 
        <Banner.Header>Instructions Manual</Banner.Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Movement" element={<Movement />} />
          <Route path="/ViewMode" element={<ViewMode />}/>
          <Route path="/Functionality" element={<Functionality />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Banner>

      <Banner.Footer>
        <div className="footer">
          <p>Question not on the list? Contact out help desk for further enquiries <a href="https://picturethis3d.com/contact/" target="_blank">here</a> 
          </p>
        </div>
        <img src={PoweredByLogo} className="footer-logo" alt="logo" />
      </Banner.Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;