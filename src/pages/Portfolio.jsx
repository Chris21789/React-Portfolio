import Project from "../data/Project";
import './Portfolio.css';

const projects = [
  {
      title: 'Social Network API',
      imgUrl: '',
      linkUrl: 'https://github.com/Chris21789/Social-Network-API',
  },
  {
      title: 'Task Board',
      imgUrl: '',
      linkUrl: 'https://github.com/Chris21789/Task-Board',
  },
  {
      title: 'Weather Dashboard',
      imgUrl: '',
      linkUrl: 'https://github.com/Chris21789/Weather-Dashboard',
  },
  {
      title: 'Personal Blog',
      imgUrl: '',
      linkUrl: 'https://github.com/Chris21789/Personal-Blog',
  },
  {
      title: 'Flop Films',
      imgUrl: '',
      linkUrl: 'https://github.com/Chris21789/Flop-Films',
  },
  {
      title: 'Employee Tracker',
      imgUrl: '',
      linkUrl: 'https://github.com/Chris21789/Employee-Tracker',
  },
];

export default function Portfolio() {
  return (
    <div id='Portfolio'>
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imgUrl={project.imgUrl}
            linkUrl={project.linkUrl}
            />
        ))}
      </div>
    </div>
  );
};
