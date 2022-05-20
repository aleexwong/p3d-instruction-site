import React from "react";

import NotFoundPage from "./components/pages/NotFoundPage";
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Banner>

      <Banner.Footer>
        <img src={PoweredByLogo} className="footer-logo" alt="logo" />
      </Banner.Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;