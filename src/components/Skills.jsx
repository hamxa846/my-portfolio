import { Layers, Code2, Database, Server, Smartphone, Cloud } from 'lucide-react';
import {
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiHuggingface,
  SiReact, SiNodedotjs, SiExpress, SiDjango, SiFastapi, SiNextdotjs,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase,
  SiDocker, SiGit, SiGithub, SiLinux, SiPostman,
  SiJavascript, SiTypescript, SiHtml5, SiCssmodules, SiLangchain,
} from 'react-icons/si';
import { FaAws, FaBrain } from 'react-icons/fa';
import { proficiencyLevels, skillCategories } from '../data/skills';
import './Skills.css';

const categoryIcons = {
  'ai-ml': Layers,
  fullstack: Code2,
  databases: Database,
  devops: Cloud,
  mobile: Smartphone,
};

const skillIcons = {
  Python: SiPython,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  'Scikit-Learn': SiScikitlearn,
  'OpenAI APIs': FaBrain,
  HuggingFace: SiHuggingface,
  LangChain: SiLangchain,
  'React.js': SiReact,
  'React Native': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  Django: SiDjango,
  FastAPI: SiFastapi,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Redis: SiRedis,
  Firebase: SiFirebase,
  Docker: SiDocker,
  AWS: FaAws,
  Git: SiGit,
  GitHub: SiGithub,
  Linux: SiLinux,
  Postman: SiPostman,
  HTML5: SiHtml5,
  CSS3: SiCssmodules,
};

function Skill({ name, proficiency, color }) {
  const Icon = skillIcons[name] || Code2;
  const label = proficiencyLevels.includes(proficiency) ? proficiency : null;

  return (
    <li className="skill-row">
      <span className={`skill-icon skill-icon-${color}`} aria-hidden="true">
        <Icon />
      </span>
      <span className="skill-name">{name}</span>
      {label && <span className="skill-proficiency">{label}</span>}
    </li>
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
          My toolkit for AI/ML engineering, full-stack web development,
          cloud infrastructure, and mobile development.
        </p>

        <div className="skills-grid">
          {skillCategories.map(category => {
            const Icon = categoryIcons[category.id] || Code2;

            return (
              <div className={`skill-category card skill-cat-${category.color}`} key={category.id}>
                <div className="skill-cat-header">
                  <span className={`cat-icon cat-icon-${category.color}`} aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <h3 className="cat-title">{category.label}</h3>
                </div>
                <ul className="skill-list">
                  {category.skills.map(skill => (
                    <Skill key={skill.name} {...skill} color={category.color} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
