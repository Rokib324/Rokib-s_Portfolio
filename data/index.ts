export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [ 
  {
    id: 1,
    title: "Movie App fetching TMDB website API",
    des: "This is a movie site , where we use TMDB website API to show the popular Movies and TV shows. This is an Advance React website, where we used useState, useEffect, Implemented API and ADD, Remove functions.",
    img: "/tmdb.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/django.svg", "/api.svg"],
    link: "https://github.com/Rokib324/Movie_app",
  },
  {
    id: 2,
    title: "Health monitoring and advice Portal - AI, ML",
    des: "This is a health monitoring and advice portal that leverages AI and machine learning to provide personalized health insights and recommendations.",
    img: "/ai_health.webp",
    iconLists: ["/py.svg", "/django.svg", "/tensorflow.svg", "/tail.svg", "/js.svg"],
    link: "https://github.com/Rokib324/Health_monitoring_and_advice_Portal",
  },
  {
    id: 3,
    title: "To Do List",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/todo.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/Rokib324/ToDo_List",
  },
  {
    id: 4,
    title: "web scrapper using python and Django",
    des: "This is a web scrapper using python and Django, where we can scrap any website data and store it in our database.",
    img: "/webs.jpg",
    iconLists: ["/py.svg", "/django.svg", "/tail.svg", "/js.svg"],
    link: "https://github.com/Rokib324/web-scrapper",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Rokibul was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rokib's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rokibul is the ideal partner.",
    name: "Md Mahamudur Zaman Bhuyian",
    title: "CTO of Daniyal Technologies",
    image: "/fahad_sir.jpg", 
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Mahfuzul haq Limon",
    title: "Fontend Team Lead of Daniyal Technologies",
    image: "/limon_vai.jpeg", 
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Justin",
    title: "Chairman of Nutrix",
    image: "/rokib2.jpeg", 
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Istiaque",
    title: "UI/UX Team Lead of Daniyal Technologies",
    image: "/istiaqe_vai.jpeg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Miraz Hassan",
    title: "CTO of Dhaka prokash",
    image: "/miraj_vai.jpg", 
  },
  
];

export const companies = [
  {
    id: 1,
    name: "Daniyal Technologies",
    img: "/dt_logo.png",
    nameImg: "/dani_name.png",
  },
  {
    id: 2,
    name: "University of Greenwich",
    img: "/ug.jpg",
    nameImg: "/uog_name.png",
  },
  

];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Knowledge of Machine Learning",
    desc: "Gained hands-on experience in machine learning algorithms and their applications in real-world scenarios.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Knowledge of Artificial Intelligence",
    desc: "Developed AI-driven solutions to automate tasks and improve user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Python and Django Developer",
    desc: "Worked on backend development using Python and Django, creating robust APIs and database management.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Rokib324",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/yourusername",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/md-rokibul-islam-03aa6820a/",
  },
];
