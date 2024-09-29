import {
  frontend,
  backend,
  ux,
  prototyping,
  ai,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
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
    title: 'Web Developer',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: html,
  },
  {
    name: 'PyTorch',
    icon: css,
  },
  {
    name: 'HuggingFace',
    icon: javascript,
  },
  {
    name: 'Sci-kit learn',
    icon: typescript,
  },
  {
    name: 'C/ C++',
    icon: reactjs,
  },
  {
    name: 'Java',
    icon: redux,
  },
  {
    name: 'SQL / RDBMS',
    icon: tailwind,
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
    icon: figma,
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
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
