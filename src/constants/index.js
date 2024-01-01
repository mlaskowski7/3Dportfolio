import {
    mobile,
    backend,
    javascript,
    html,
    css,
    reactjs,
    spring,
    tailwind,
    mysql,
    mongodb,
    django,
    git,
    java,
    python,
    vlo,
    cae,
    meta,
    pjatk,
    friends,
    movies,
    macrocalculator,
    ecom,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education/Skills",
    },
    {
      id:"projects",
      title:"Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Back End Developer",
      icon: backend,
    },
    {
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Java",
      icon: java,
    },
    // {
    //   name: "Spring",
    //   icon: spring,
    // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "CAE Advanced English Certificate",
      company_name: "Cambridge",
      icon: cae,
      iconBg: "#fff",
      date: "18th June 2022",
      points: [
        "Certified C1 Level English",
        
      ],
    },
    {
      title: "High School Education",
      company_name: "VLO im. Ks. J. Poniatowskiego w Warszawie",
      icon: vlo,
      iconBg: "#fff",
      date: "September 2019 - May 2023",
      points: [
        "Maths",
        "IT Fundamentals"
      ],
    },
    {
      title: "Meta Back-End Developer Certificate",
      company_name: "Meta",
      icon: meta,
      iconBg: "#fff",
      date: "1st December 2023",
      points: [
        "Python Programming",
        "Django, Django REST Framework",
        "Git, GitHub",
        "RESTful APIs",
      ],
    },
    {
      title: "Bachelor's of Engineering in Computer Science",
      company_name: "Polish-Japanese Academy of Information Technology",
      icon: pjatk,
      iconBg: "#fff",
      date: "October 2023 - Present",
      points: [
        "Java Programming",
        "SQL",
        "Microsoft SQL Server",
        "Computer Science",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Friends",
      description:
        "Friends is my fullstack social media web app, with user authorization, feed, like and comment functionalities. Backend created in python with django framework, integrated with SQLite database. Frontend created with help of Tailwind CSS, jQuery and AJAX. Sample posts images are taken from unsplash.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name:"html/css/javascript",
          color: "orange-text-gradient"
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: friends,
      source_code_link: "https://github.com/mlaskowski7/friends",
    },
    {
      name: "Movies",
      description:
        "Movies is a web app about movies and their reviews. Back end is made in Java ( Spring Framework ) intagrated with MongoDB database. Front End is made with React, styled using bootstrap react. Movies data is taken from themoviedb.org, shout out.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
        {
          name: "java",
          color: "orange-text-gradient",
        },
        {
          name: "spring",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: movies,
      source_code_link: "https://github.com/mlaskowski7/movies",
    },
    {
      name: "Macro Calculator",
      description:
        "macroCalculator is my web app, which I use for keeping my diet, it helps me to keep the macros, analyze them and keep track of the goal. I used python, django framework for back end and html,css, javascript for frontend. The site contains video background from pixabay, I also used Chart.js.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name:"html/css/javascript",
          color: "orange-text-gradient"
        },
      ],
      
      image: macrocalculator,
      source_code_link: "https://github.com/mlaskowski7/macroCalculator",
    },
    {
      name: "Ecommerce",
      description:
        "My sample ecommerce website project with add to cart and checkout functionality. Back-end made in python using django framework. Database is held on SQLite. Front-end made in javascript with help of jQuery, styled with bootstrap4.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name:"html/css/javascript",
          color: "orange-text-gradient"
        },
        {
          name:"bootstrap4",
          color: "blue-text-gradient"
        },
      ],
      
      image: ecom,
      source_code_link: "https://github.com/mlaskowski7/ecomSite",
    },
  ];
  
  export { services, technologies, experiences, projects };