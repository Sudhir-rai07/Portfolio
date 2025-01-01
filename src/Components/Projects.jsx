import Card from "./Card";
import data from "../Constants/projects.json";

const Projects = ({theme}) => {
  return (
    <div className="relative w-4/5 mb-8">
      <div className="absolute top-0 left-0">
        <h2 className="text-3xl font-semibold tracking-wider text-red-500">
          Projects
        </h2>
      </div>
      <div className={`grid grid-cols-1 justify-items-center sm:grid-cols-1 lg:grid-cols-2 place-content-center mt-20 ${theme ? "text-white": "text-black"}`}>
        {data &&
          data.map((item, idx) => (
            <Card
              key={idx}
              url={item.url}
              title={item.title}
              description={item.description}
              tags={item.tags}
              liveLink={item.liveLink}
              github={item.gitHub}
              theme={theme}
            />
          ))}
      </div>
    </div>
  );
};

export default Projects;
