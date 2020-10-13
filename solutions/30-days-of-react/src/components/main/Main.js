import React from "react";
import Button from "../button/Button";
import TechnologiesPanel from "../technologiesPanel/TechnologiesPanel";
import UserCard from "../userCard/UserCard";

const Main = ({ techImages, user, handleTime, greetPeople }) => {
  return (
    <main>
      <div className="main-wrapper">
        <UserCard user={user} />
        <Button text="Greet People" onClick={greetPeople} />
        <Button text="Show Time" onClick={handleTime} />
        <TechnologiesPanel
          title="Front End Technologies"
          techImages={techImages}
        />
      </div>
    </main>
  );
};

export default Main;
