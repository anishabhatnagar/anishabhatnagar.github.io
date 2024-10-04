import {
  backend,
  coding,
  prototyping,
  ai,
  python,
  aws,
  c_lang,
  dbms,
  huggingface,
  java,
  k8s,
  pytorch,
  scikitlearn,
  docker,
  git,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'AI/ML Engineer',
    icon: ai,
  },
  {
    title: 'Full Stack Developer',
    icon: backend,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
  {
    title: 'Devops Practitioner',
    icon: coding,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'PyTorch',
    icon: pytorch,
  },
  {
    name: 'HuggingFace',
    icon: huggingface,
  },
  {
    name: 'Sci-kit learn',
    icon: scikitlearn,
  },
  {
    name: 'C/ C++',
    icon: c_lang,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'SQL / RDBMS',
    icon: dbms,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Kubernetes',
    icon: k8s,
  },
  {
    name: 'AWS',
    icon: aws,
  },
];

const experiences = [
  {
    title: 'Researcher,',
    company_name: 'Chopra Lab NYU Courant',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2024 - Present',
  },
  {
    title: 'Masters in Computer Science',
    company_name: 'NYU Courant Institute of Mathematical Sciences',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2022 - May 2024',
  },
  {
    title: 'Teaching Assistant',
    company_name: 'New York University',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sept 2023 - May 2024',
  },
  {
    title: 'Student Researcher',
    company_name: 'New York Public Library and NYU',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2023 - Aug 2023',
  },
  {
    title: 'Application Development Associate',
    company_name: 'Accenture',
    icon: dcc,
    iconBg: '#333333',
    date: 'Aug 2021 - Jun 2022',
  },
  {
    title: 'Bachelors in Computer Science and Engineering',
    company_name: 'Amity University - Noida, India',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'July 2017 - May 2021',
  },
  {
    title: 'Student Intern',
    company_name: "ATT",
    icon: dcc,
    iconBg: '#333333',
    date: 'Apr 2020 - May 2020',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Hate-LLaMA',
    description: 'An Instruction-tuned Audio-Visual Language Model for Hate Content Detection in videos',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Pytorch',
        color: 'green-text-gradient',
      },
      {
        name: 'Multimodal LLM',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/anishabhatnagar/Hate-LLaMA',
  },
  {
    id: 'project-2',
    name: 'Autonomous Racing',
    description:
      'RNN Actor-Critic implementation of SAC algorithm for the Trackmania Game',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Pytorch',
        color: 'green-text-gradient',
      },
      {
        name: 'Reinforcement Learning',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/anishabhatnagar/RL-Racing',
  },
  {
    id: 'project-3',
    name: 'Bilingual or Byelingual?',
    description: 'Analysis of transformer models on Hindi-English Code-Switched text',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'PyTorch',
        color: 'blue-text-gradient',
      },
      {
        name: 'Bert LLM',
        color: 'green-text-gradient',
      },
      {
        name: 'Natural Language Processing',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/anishabhatnagar/hi-en-senti',
  },
  {
    id: 'project-4',
    name: 'Video Recaps',
    description: `Video Summarization and Captioning using DSNet to summarise long videos into short form videos and Timesformer-GPT-2 for captioning`,
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Deep Learning',
        color: 'green-text-gradient',
      },
      {
        name: 'Computer Vision',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/anishabhatnagar/Video-Summarization-and-Captioning',
  },
  {
    id: 'project-5',
    name: 'Frame Forecast',
    description:
      'Using the first 11 frames of a video predict the segmentation mask of the last (22nd) frame.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'PyTorch',
        color: 'green-text-gradient',
      },
      {
        name: 'Computer Vision',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/anishabhatnagar/Future-Frame-Prediction-and-Segmentation',
  },
];

export { services, technologies, experiences, projects };
