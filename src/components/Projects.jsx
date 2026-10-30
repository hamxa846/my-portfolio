import { FolderOpen, ExternalLink, Star, Cpu, Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    id: 'news-pulse',
    title: 'News Pulse',
    subtitle: 'AI-Powered News Aggregator & Summarizer',
    description:
      'A full-stack news aggregation platform that scrapes articles from 50+ sources using Scrapy, applies NLP-based summarization with Hugging Face transformers, detects sentiment, and presents content through a React dashboard with real-time filtering and category browsing.',
    color: 'cyan',
    gradient: 'from-cyan to-blue',
    tags: ['React', 'Django', 'Scrapy', 'HuggingFace', 'PostgreSQL', 'Redis', 'Celery'],
    type: 'AI + Full Stack',
    featured: true,
    links: {
      github: 'https://github.com/hamxa846',
    },
    highlights: ['50+ News Sources', 'AI Summarization', 'Sentiment Analysis', 'Real-time Updates'],
  },
  {
    id: 'porto-seguro',
    title: 'Porto Seguro',
    subtitle: 'Insurance Claim Prediction System',
    description:
      'A machine learning system built for Kaggle\'s Porto Seguro Safe Driver Prediction challenge. Implements gradient boosting (XGBoost, LightGBM), feature engineering, class imbalance handling with SMOTE, and model interpretation using SHAP values.',
    color: 'purple',
    gradient: 'from-purple to-pink',
    tags: ['Python', 'XGBoost', 'LightGBM', 'SHAP', 'Pandas', 'Scikit-Learn', 'Matplotlib'],
    type: 'Machine Learning',
    featured: true,
    links: {
      github: 'https://github.com/hamxa846',
    },
    highlights: ['Kaggle Dataset', 'XGBoost + LightGBM', 'SHAP Explainability', 'SMOTE Balancing'],
  },
  {
    id: 'student-dropout',
    title: 'Student Dropout Prediction',
    subtitle: 'Early Warning System for Education',
    description:
      'An end-to-end ML pipeline predicting student dropout risk from academic and demographic data. Features include data preprocessing, feature selection, model training (Random Forest, SVM, Neural Networks), model deployment via FastAPI, and a React dashboard for educators.',
    color: 'green',
    gradient: 'from-green to-cyan',
    tags: ['Python', 'Random Forest', 'FastAPI', 'React', 'PostgreSQL', 'Scikit-Learn', 'Plotly'],
    type: 'AI + Web App',
    featured: true,
    links: {
      github: 'https://github.com/hamxa846',
    },
    highlights: ['95%+ Accuracy', 'FastAPI Deployment', 'React Dashboard', 'Real-time Predictions'],
  },
  {
    id: 'healthcare-companion',
    title: 'HealthCare Companion',
    subtitle: 'AI-Powered Medical Assistant Chatbot',
    description:
      'A conversational AI healthcare assistant built with LangChain and GPT-4, featuring RAG (Retrieval-Augmented Generation) over medical databases, symptom analysis, medication reminders, appointment scheduling, and integration with a React Native mobile app.',
    color: 'pink',
    gradient: 'from-pink to-purple',
    tags: ['LangChain', 'GPT-4', 'RAG', 'React Native', 'FastAPI', 'MongoDB', 'Pinecone'],
    type: 'LLM + Mobile',
    featured: false,
    links: {
      github: 'https://github.com/hamxa846',
    },
    highlights: ['RAG Pipeline', 'GPT-4 Integration', 'Medical NLP', 'Mobile App'],
  },
  {
    id: 'ecommerce-scraper',
    title: 'E-Commerce Price Tracker',
    subtitle: 'Real-time Competitive Price Intelligence',
    description:
      'A web scraping and price tracking system that monitors product prices across major e-commerce platforms (Amazon, Daraz, AliExpress) using Selenium and BeautifulSoup, stores data in MongoDB, and sends real-time alerts via email/WhatsApp when prices drop.',
    color: 'orange',
    gradient: 'from-orange to-pink',
    tags: ['Python', 'Selenium', 'BeautifulSoup', 'MongoDB', 'Node.js', 'React', 'SendGrid'],
    type: 'Full Stack + Scraping',
    featured: false,
    links: {
      github: 'https://github.com/hamxa846',
    },
    highlights: ['Multi-platform Scraping', 'Real-time Alerts', 'Price History Charts', 'Email Notifications'],
  },
  {
    id: 'mern-social',
    title: 'DevConnect',
    subtitle: 'Social Platform for Developers',
    description:
      'A full-stack social networking platform built with the MERN stack. Features include developer profiles, skill-based matching, project collaboration boards, real-time messaging with Socket.io, GitHub integration, and JWT-based authentication.',
    color: 'blue',
    gradient: 'from-blue to-cyan',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'JWT', 'Redux', 'Tailwind'],
    type: 'MERN Full Stack',
    featured: false,
    links: {
      github: 'https://github.com/hamxa846',
    },
    highlights: ['Real-time Chat', 'GitHub Integration', 'Skill Matching', 'JWT Auth'],
  },
];

const typeColors = {
  'AI + Full Stack': 'cyan',
  'Machine Learning': 'purple',
  'AI + Web App': 'green',
  'LLM + Mobile': 'pink',
  'Full Stack + Scraping': 'orange',
  'MERN Full Stack': 'primary',
};

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-label">
          <FolderOpen size={14} />
          Projects
        </div>
        <h2 className="section-title">Featured Work</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          A selection of projects demonstrating my expertise in AI engineering, full-stack development,
          and the intersection of both.
        </p>

        <div className="projects-grid">
          {projects.map(project => (
            <div
              className={`project-card card ${project.featured ? 'featured-card' : ''} project-${project.color}`}
              key={project.id}
            >
              {project.featured && (
                <div className="featured-badge">
                  <Star size={12} fill="currentColor" />
                  Featured
                </div>
              )}

              {/* Card header gradient bar */}
              <div className={`project-gradient-bar bar-${project.color}`} />

              {/* Type badge */}
              <div className="project-header">
                <span className={`tag tag-${typeColors[project.type] || 'primary'}`}>
                  <Cpu size={10} />
                  {project.type}
                </span>
                <div className="project-links">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>

              {/* Highlights */}
              <div className="project-highlights">
                {project.highlights.map(h => (
                  <span className={`highlight-pill pill-${project.color}`} key={h}>
                    {h}
                  </span>
                ))}
              </div>

              {/* Tags */}
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span className="tag tag-primary" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {project.links.github && (
                <div className="project-tags">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag tag-primary"
                    aria-label={`GitHub profile for ${project.title}`}
                  >
                    <FaGithub size={14} aria-hidden="true" />
                    GitHub profile
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a
            href="https://github.com/hamxa846"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            id="view-all-github"
          >
            <Globe size={18} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

