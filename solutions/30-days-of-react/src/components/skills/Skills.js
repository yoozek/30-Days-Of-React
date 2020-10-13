import React from "react";

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

export default Skills;
