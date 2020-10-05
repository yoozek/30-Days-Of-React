// index.js
import React from "react";
import ReactDOM from "react-dom";
import userImage from "./images/avatar.jpg";
import htmlLogo from "./images/html_logo.png";
import cssLogo from "./images/css_logo.png";
import jsLogo from "./images/js_logo.png";
import reactLogo from "./images/react_logo.png";

import {HexaColor} from "./HexaColor"

const userInfo = {
  name: "Lukasz Jozwik",
  description: "Senior Developer, Poland",
  avatar: userImage,
  skills: ["HTML", "CSS", "JavaScript", ".NET", "Azure", "SharePoint"]
}

// JSX element, header
const Header = (props) => {
  return (
  <header>
    <div className="header-wrapper">
      <h1>{props.welcome}</h1>
      <h2>{props.title}</h2>
    </div>
  </header>
)};

const UserCard = (props) => {
  return (
  <div className="userCard">
    <img src={props.user.avatar} alt="user" />
    <h4>{props.user.name}</h4>
    <h5>{props.user.description}</h5>

    <Skills skills={props.user.skills}/>
  </div>
)};

const Skills = (props) => {
  const skillList = props.skills.map((tech) => <span className="skill-pill" key={tech}>{tech}</span>);
  return (<div className="skills">
    <h4>Skills</h4>
    <ul>{skillList}</ul>
  </div>)
}

const techImages = [htmlLogo, cssLogo, jsLogo, reactLogo].map((logo) => (
  <img src={logo} alt={logo} key={logo}/>
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
      <UserCard user={userInfo}/>
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

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// JSX element, app
const App = () => {
  const welcome = 'Welcome to 30 Days of React'
  const title = 'Getting started with React'

  const greetPeople = () => {
    alert('Welcome to 30 Day Of React Challange, 2020')
  }

  const handleTime = () => {
    alert(showDate(new Date()))
  }

  return (  
  <div className="app">
    <Header welcome={welcome} title={title}/>
    <Main />
    <Button text='Greet People' onClick={greetPeople} />
    <Button text='Show Time' onClick={handleTime} />
    <HexaColor />
    <Footer />
  </div>
)};

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
