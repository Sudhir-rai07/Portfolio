import SkillCard from "./SkillCard";
import skills from "../Constants/skills.json";
import languages from "../Constants/language.json";

const Skills = () => {
  return (
    <div className="relative w-4/5 mb-8 ">
      <div className="absolute left-0 text-2xl font-semibold">
        My <span className="text-red-500">Skills</span>
      </div>

      <div className="relative flex flex-wrap justify-center w-full mt-10">
        {skills.map((items, idx) => (
          <SkillCard url={items.url} name={items.name} key={idx} />
        ))}
      </div>

      <p className="mt-10 text-3xl font-semibold text-center">Languages: </p>
      <div className="relative flex flex-wrap items-center justify-center w-full ">
        {languages.map((items, idx) => (
          <SkillCard url={items.url} name={items.name} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
