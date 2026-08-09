import { Layers, Code2, Database, Server, Smartphone, Cloud } from 'lucide-react';
import {
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiHuggingface,
  SiReact, SiNodedotjs, SiExpress, SiDjango, SiFastapi, SiNextdotjs,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase,
  SiDocker, SiGit, SiGithub, SiLinux, SiPostman,
  SiFlutter, SiJavascript, SiTypescript, SiHtml5, SiCssmodules,
  SiLangchain,
} from 'react-icons/si';
import { FaAws, FaBrain } from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
  {
    id: 'ai-ml',
    label: 'AI / Machine Learning',
    icon: <Layers size={20} />,
    color: 'cyan',
    skills: [
      { name: 'Python', icon: <SiPython />, level: 95 },
      { name: 'TensorFlow', icon: <SiTensorflow />, level: 85 },
      { name: 'PyTorch', icon: <SiPytorch />, level: 80 },
      { name: 'Scikit-Learn', icon: <SiScikitlearn />, level: 88 },
      { name: 'OpenAI APIs', icon: <FaBrain />, level: 90 },
      { name: 'HuggingFace', icon: <SiHuggingface />, level: 85 },
      { name: 'LangChain', icon: <SiLangchain />, level: 82 },
    ],
  },
  {
    id: 'fullstack',
    label: 'Full Stack Development',
    icon: <Code2 size={20} />,
    color: 'purple',
    skills: [
      { name: 'React.js', icon: <SiReact />, level: 92 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 80 },
      { name: 'Node.js', icon: <SiNodedotjs />, level: 88 },
      { name: 'Express.js', icon: <SiExpress />, level: 85 },
      { name: 'Django', icon: <SiDjango />, level: 82 },
      { name: 'FastAPI', icon: <SiFastapi />, level: 85 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 78 },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: <Database size={20} />,
    color: 'green',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 90 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 82 },
      { name: 'MySQL', icon: <SiMysql />, level: 80 },
      { name: 'Redis', icon: <SiRedis />, level: 72 },
      { name: 'Firebase', icon: <SiFirebase />, level: 78 },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    icon: <Cloud size={20} />,
    color: 'orange',
    skills: [
      { name: 'Docker', icon: <SiDocker />, level: 78 },
      { name: 'AWS', icon: <FaAws />, level: 72 },
      { name: 'Git', icon: <SiGit />, level: 92 },
      { name: 'GitHub', icon: <SiGithub />, level: 92 },
      { name: 'Linux', icon: <SiLinux />, level: 80 },
      { name: 'Postman', icon: <SiPostman />, level: 88 },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile & Frontend',
    icon: <Smartphone size={20} />,
    color: 'pink',
    skills: [
      { name: 'Flutter', icon: <SiFlutter />, level: 75 },
      { name: 'HTML5', icon: <SiHtml5 />, level: 95 },
      { name: 'CSS3', icon: <SiCssmodules />, level: 90 },
    ],
  },
];

function SkillBar({ name, icon, level, color }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span className={`skill-icon skill-icon-${color}`}>{icon}</span>
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill fill-${color}`}
          style={{ '--fill-width': `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-label">
          <Server size={14} />
          Technical Skills
        </div>
        <h2 className="section-title">My Tech Stack</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          A comprehensive toolkit spanning AI/ML engineering, full-stack web development,
          cloud infrastructure, and mobile development.
        </p>

        <div className="skills-grid">
          {skillCategories.map(cat => (
            <div className={`skill-category card skill-cat-${cat.color}`} key={cat.id}>
              <div className="skill-cat-header">
                <span className={`cat-icon cat-icon-${cat.color}`}>{cat.icon}</span>
                <h3 className="cat-title">{cat.label}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map(skill => (
                  <SkillBar key={skill.name} {...skill} color={cat.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

