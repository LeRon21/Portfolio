import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'LeRon Hagler | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'LeRon',
  subtitle: 'I am your next developer!',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Welcome to my website. Here is where I will be keeping projects I work on as I continue to learn and get better with coding as a career. I graduated from college wanting to focus on another path in computer graphics before I landed in web development, which is why there is such a gap between graduation date and potential job application date.',
  paragraphTwo: 'Now that I have started to dig deeper into the powers of coding I have seemed to find a new flame to run after. Luckily this can also be a way to show my portfolio and skills to potential employeers.',
  paragraphThree: 'Thank you for taking the time to look at my cite. Cant wait to hear from you.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'robo.jpg' ,
    title: 'RoboJokes',
    info: 'This is my favorite program I have done so far. It shows I can use API;s since I utilize a text to speech API and Joke API to run this entire program.',
    info2: 'It\'s also really cute!',
    url: 'https://leron21.github.io/Robojokes/',
    repo: 'https://github.com/LeRon21/Robojokes',
  },
  {
    id: nanoid(),
    img: 'pong.jpg',
    title: 'Pong',
    info: 'The classic game of pong. ',
    info2: '',
    url: 'https://leron21.github.io/Pong/',
    repo: 'https://github.com/LeRon21/Pong',
  },
  {
    id: nanoid(),
    img: 'form.jpg' ,
    title: 'Registration Form',
    info: 'Just a form to show I know the basics of HTML, CSS, and Javascript.',
    info2: '',
    url: 'https://leron21.github.io/Form/',
    repo: 'https://github.com/LeRon21/Form',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Do I seem like a potential candidate for the position? Awesome!',
  btn: 'Email Me',
  email: 'leronhagler@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/leron-hagler-tennial-06766814/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/LeRon21?tab=repositories',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
