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
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import EventsPlayground from './components/eventsPlayground/EventsPlayground';
import Button from './components/button/Button';
import FormsPlayground from './components/formsPlayground/FormsPlayground';
import ComponentsLifecycle from './components/componentsLifecycle/ComponentsLifecycle';
import CatsCounter from './components/catsCounter/CatsCounter';

const App = () => {
  const welcome = "Welcome to 30 Days of React";
  const title = "Getting started with React";
  const date = new Date();
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

  const Home = () => (<h1>Welcome to 30 day of React Challange</h1>)
  const About = () => <Main
  techImages={techImages}
  user={user}
/>
  const Contact = () => <h1>Welcome Contact</h1>
  const Challenges = () => (<>
    <Counter />
    <Button text="Greet People" onClick={greetPeople} />
    <Button text="Show Time" onClick={handleTime} />
    <EventsPlayground />
    <ComponentsLifecycle />
    <FormsPlayground />
  </>)
  const NotFound = () => <h1>The page your looking for not found</h1>

  const NavBar = () => (
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact</NavLink>
      </li>
      <li>
        <NavLink to='/challenges'>Challenges</NavLink>
      </li>
      <li>
        <NavLink to='/catsCounter'>Cats Counter</NavLink>
      </li>
    </ul>
  )

  return (
    <Router>
      <div className="app">
        <Header welcome={welcome} title={title} />
        <NavBar />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/challenges' component={Challenges} />
          <Route path='/catsCounter' component={CatsCounter} />
          <Route path='/' component={Home} />
          <Route path='*' exact component={NotFound} />
        </Switch>

        
        {/* <EventsPlayground /> */}


        <Footer text='Lukasz Jozwik' copyRight={date} />
      </div>
    </Router>
  );
};

export default App