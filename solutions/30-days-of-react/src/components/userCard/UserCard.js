import React from "react";
import Skills from "../skills/Skills";

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

export default UserCard;
