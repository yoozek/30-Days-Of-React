// index.js
import React from "react";
import ReactDOM from "react-dom";
import userImage from "./images/avatar.jpg";
import htmlLogo from "./images/html_logo.png";
import cssLogo from "./images/css_logo.png";
import jsLogo from "./images/js_logo.png";
import reactLogo from "./images/react_logo.png";

import { getColor, HexaColor } from "./HexaColor";

// JSX element, header
const Header = ({ welcome, title }) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
      </div>
    </header>
  );
};

const UserCard = ({ user: { name, description, avatar, skills } }) => {
  return (
    <div className="userCard">
      <img src={avatar} alt="user" />
      <h4>{name}</h4>
      <h5>{description}</h5>
      <Skills skills={skills} />
    </div>
  );
};

const Skills = (props) => {
  const skillList = props.skills.map((tech) => (
    <span className="skill-pill" key={tech}>
      {tech}
    </span>
  ));
  return (
    <div className="skills">
      <h4>Skills</h4>
      <ul>{skillList}</ul>
    </div>
  );
};

const TechnologiesPanel = ({ title, techImages }) => (
  <div className="technologies">
    <h2>{title}</h2>
    <div className="technologies-wrapper">
      {techImages.map((logo) => (
        <img src={logo} alt={logo} key={logo} />
      ))}
    </div>
  </div>
);

// JSX element, footer
const Footer = ({ text, copyRight }) => (
  <footer>
    <div className="footer-wrapper">
      <p>{text} - {copyRight.getFullYear()}</p>
    </div>
  </footer>
);

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

// JSX element, main
const Main = ({ techImages, user, handleTime, greetPeople }) => {
  console.log(user);

  return (
    <main>
      <div className="main-wrapper">
        <UserCard user={user} />
        <Button text="Greet People" onClick={greetPeople} />
        <Button text="Show Time" onClick={handleTime} />
        <TechnologiesPanel title= "Front End Technologies" techImages={techImages} />
      </div>
    </main>
  );
};

// JSX element, app
const App = () => {
  const welcome = "Welcome to 30 Days of React";
  const title = "Getting started with React";
  const date = new Date();
  const color = getColor();
  const techImages = [htmlLogo, cssLogo, jsLogo, reactLogo];
  const user = {
    name: "Lukasz Jozwik",
    description: "Senior Developer, Poland",
    avatar: userImage,
    skills: ["HTML", "CSS", "JS", "React", "SQL", ".NET", "Azure", "Git"],
  };

  const greetPeople = () => {
    alert("Welcome to 30 Day Of React Challange, 2020");
  };
  const handleTime = () => {
    alert(new Date());
  };

  return (
    <div className="app">
      <Header welcome={welcome} title={title} />
      <Main
        techImages={techImages}
        user={user}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <HexaColor color={color} />
      <Footer text='Lukasz Jozwik' copyRight={date} />
    </div>
  );
};

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
