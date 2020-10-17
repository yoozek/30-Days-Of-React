import React from "react";
import TechnologiesPanel from "../technologiesPanel/TechnologiesPanel";
import UserCard from "../userCard/UserCard";

const Main = ({ techImages, user }) => {
  return (
    <main>
      <div className="main-wrapper">
        <UserCard user={user} />
        <TechnologiesPanel
          title="Front End Technologies"
          techImages={techImages}
        />
      </div>
    </main>
  );
};

export default Main;
