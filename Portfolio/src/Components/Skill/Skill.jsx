import "../../Pages/Skills/Skills.css";

const Skill = ({ skillName, skillLevel, skillIcon }) => {
  return (
    <div className="skill">
      <label>
        {skillName} {skillIcon}
      </label>
      <progress
        className="progress-bar"
        value={skillLevel}
        max="100"
      ></progress>
      <span>{skillLevel}%</span>
    </div>
  );
};

export default Skill;
