// index.js
import React from "react";
import ReactDOM from "react-dom";
import userImage from "./images/avatar.jpg";
import htmlLogo from "./images/html_logo.png";
import cssLogo from "./images/css_logo.png";
import jsLogo from "./images/js_logo.png";
import reactLogo from "./images/react_logo.png";

import {HexaColor} from "./HexaColor"
const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";

// JSX element, header
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
    </div>
  </header>
);


const techs = ["HTML", "CSS", "JavaScript", ".NET", "Azure", "SharePoint"];
const skillsFormatted = techs.map((tech) => <span className="skill-pill">{tech}</span>);

const UserCard = () => (
  <div className="userCard">
    <img src={userImage} alt="user" />
    <h4>Lukasz Jozwik</h4>
    <h5>Senior Developer, Poland</h5>

    <div className="skills">
      <h4>Skills</h4>
      {skillsFormatted}
    </div>
  </div>
);

const techImages = [htmlLogo, cssLogo, jsLogo, reactLogo].map((logo) => (
  <img src={logo} alt={logo}/>
));

const TechnologiesPanel = () => (
  <div className="technologies">
    <h2>Front End Technologies</h2>
    <div className="technologies-wrapper">
    {techImages}
    </div>
  </div>
);

// JSX element, main
const Main = () => (
  <main>
    <div className="main-wrapper">
      <TechnologiesPanel />
      <UserCard />
    </div>
  </main>
);

const copyRight = "Copyright 2020";

// JSX element, footer
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

// JSX element, app
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <HexaColor />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
