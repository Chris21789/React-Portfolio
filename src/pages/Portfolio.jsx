import Project from "../data/Project";
import './Portfolio.css';
import social from '../assets/socialnetwork.png';
import taskBoard from '../assets/tasks.png';
import weather from '../assets/weather.png';
import blog from '../assets/blog.png';
import flop from '../assets/flop.jpg';
import employee from '../assets/employee.png';

const projects = [
  {
      title: 'Social Network API',
      imgUrl: social,
      linkUrl: 'https://github.com/Chris21789/Social-Network-API',
  },
  {
      title: 'Task Board',
      imgUrl: taskBoard,
      linkUrl: 'https://github.com/Chris21789/Task-Board',
  },
  {
      title: 'Weather Dashboard',
      imgUrl: weather,
      linkUrl: 'https://github.com/Chris21789/Weather-Dashboard',
  },
  {
      title: 'Personal Blog',
      imgUrl: blog,
      linkUrl: 'https://github.com/Chris21789/Personal-Blog',
  },
  {
      title: 'Flop Films',
      imgUrl: flop,
      linkUrl: 'https://github.com/Chris21789/Flop-Films',
  },
  {
      title: 'Employee Tracker',
      imgUrl: employee,
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
