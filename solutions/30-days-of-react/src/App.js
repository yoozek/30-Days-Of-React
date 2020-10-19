import React from 'react';
import Counter from './components/counter/Counter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import userImage from "./images/avatar.jpg";
import htmlLogo from "./images/html_logo.png";
import cssLogo from "./images/css_logo.png";
import jsLogo from "./images/js_logo.png";
import reactLogo from "./images/react_logo.png";
import { getColor, HexaColor } from './components/hexaColor/HexaColor';
import CatsCounter from './components/catsCounter/CatsCounter';

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
      {/* <EventsPlayground /> */}
      <Main
        techImages={techImages}
        user={user}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <CatsCounter />
      <Counter />
      <HexaColor color={color} />
      <Footer text='Lukasz Jozwik' copyRight={date} />
    </div>
  );
};

export default App