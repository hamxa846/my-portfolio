// Edit this file to choose the skills and proficiency labels published on the site.
// Set proficiency to one of these labels, or leave null to show only the skill.
// Example: { name: 'React Native', proficiency: 'Intermediate' }
// Commit and deploy your edits to update the public site for every visitor.
export const proficiencyLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

export const skillCategories = [
  {
    id: 'ai-ml',
    label: 'AI / Machine Learning',
    color: 'cyan',
    skills: [
      { name: 'Python', proficiency: null },
      { name: 'TensorFlow', proficiency: null },
      { name: 'PyTorch', proficiency: null },
      { name: 'Scikit-Learn', proficiency: null },
      { name: 'OpenAI APIs', proficiency: null },
      { name: 'HuggingFace', proficiency: null },
      { name: 'LangChain', proficiency: null },
    ],
  },
  {
    id: 'fullstack',
    label: 'Full Stack Development',
    color: 'purple',
    skills: [
      { name: 'React.js', proficiency: null },
      { name: 'Next.js', proficiency: null },
      { name: 'Node.js', proficiency: null },
      { name: 'Express.js', proficiency: null },
      { name: 'Django', proficiency: null },
      { name: 'FastAPI', proficiency: null },
      { name: 'JavaScript', proficiency: null },
      { name: 'TypeScript', proficiency: null },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    color: 'green',
    skills: [
      { name: 'MongoDB', proficiency: null },
      { name: 'PostgreSQL', proficiency: null },
      { name: 'MySQL', proficiency: null },
      { name: 'Redis', proficiency: null },
      { name: 'Firebase', proficiency: null },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    color: 'orange',
    skills: [
      { name: 'Docker', proficiency: null },
      { name: 'AWS', proficiency: null },
      { name: 'Git', proficiency: null },
      { name: 'GitHub', proficiency: null },
      { name: 'Linux', proficiency: null },
      { name: 'Postman', proficiency: null },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile & Frontend',
    color: 'pink',
    skills: [
      { name: 'React Native', proficiency: null },
      { name: 'HTML5', proficiency: null },
      { name: 'CSS3', proficiency: null },
    ],
  },
];
