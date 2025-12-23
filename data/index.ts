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
    title: "Copy the link to download my Resume",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const technologies = [
  {
    id: 1,
    name: "React",
    color: "text-white",
    img: "/re.svg",
    height: "h-10",
  },
  {
    id: 2,
    name: "Next.js",
    color: "text-white",
    img: "/next.svg",
    height: "h-10",
  },
  {
    id: 3,
    name: "TailwindCSS",
    color: "text-white",
    img: "/tail.svg",
    height: "h-10",
  },
  {
    id: 4,
    name: "JavaScript",
    color: "text-white",
    img: "/js.svg",
    height: "h-10",
  },
  {
    id: 5,
    name: "TypeScript",
    color: "text-white",
    img: "/ts.svg",
    height: "h-10",
  },
  {
    id: 6,
    name: "Python",
    color: "text-white",
    img: "/py.svg",
    height: "h-10",
  },
  {
    id: 7,
    name: "Django",
    color: "text-white",
    img: "/django.svg",
    height: "h-10",
  },
  {
    id: 8,
    name: "RESTful API",
    color: "text-white",
    img: "/api.svg",
    height: "h-10",
  },
  {
    id: 9,
    name: "TensorFlow",
    color: "text-white",
    img: "/tensorflow.svg",
    height: "h-10",
  },
  {
    id: 10,
    name: "Three.js",
    color: "text-white",
    img: "/three.svg",
    height: "h-10",
  },
  {
    id: 11,
    name: "Git",
    color: "text-white",
    img: "/git.svg",
    height: "h-10",
  },
  {
    id: 12,
    name: "Docker",
    color: "text-white",
    img: "/dock.svg",
    height: "h-10",
  },
  {
    id: 13,
    name: "MongoDB",
    color: "text-white",
    img: "/mongo.svg",
    height: "h-10",
  },
  {
    id: 14,
    name: "AWS",
    color: "text-white",
    img: "/aws.svg",
    height: "h-10",
  },
  {
    id: 15,
    name: "NestJs",
    color: "text-white",
    img: "/nest.svg",
    height: "h-10",
  },
  {
    id: 16,
    name: "Express",
    color: "text-white",
    img: "/express.svg",
    height: "h-10",
  },
  {
    id: 17,
    name: "PostgreSQL",
    color: "text-white",
    img: "/postgres.svg",
    height: "h-10",
  },
  {
    id: 18,
    name: "MySQL",
    color: "text-white",
    img: "/mysql.svg",
    height: "h-10",
  },
  {
    id: 19,
    name: "Gsap",
    color: "text-white",
    img: "/gsap.svg",
    height: "h-10",
  },
  {
    id: 20,
    name: "Figma",
    color: "text-white",
    img: "/figma.svg",
    height: "h-10",
  }
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
    title: "Starbucks Coffee Slider",
    des: "A Starbucks Coffee Slider website with a responsive design and a smooth scrolling effect.",
    img: "/Star.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://starbucks-coffee-slider.vercel.app/",
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
      "Working with Rokibul was seamless and efficient. His technical skills and proactive mindset ensured our project exceeded expectations. I highly recommend him for any serious development work as he consistently delivers high-quality results. Rokibul's ability to adapt and innovate is truly impressive.",
    name: "Mahfuzul haq Limon",
    title: "Fontend Team Lead of Daniyal Technologies",
    image: "/limon_vai.jpeg", 
  },
  {
    quote:
      "Rokibul brought clarity, creativity, and consistency to our project. His ability to transform ideas into functional, elegant solutions is unmatched. His attention to detail and commitment to quality were evident in every aspect of the work. I wholeheartedly recommend Rokibul for any project that demands excellence.",
    name: "Al Hannan ",
    title: "GM of AJI Group",
    image: "/rokib2.jpeg", 
  },
  {
    quote:
      "From start to finish, Rokibul demonstrated exceptional professionalism and talent. His dedication to clean code and user-friendly design made a lasting impact on our team. His ability to adapt to our needs and deliver results on time was impressive. I highly recommend Rokibul for any project requiring a skilled and reliable developer.",
    name: "Istiaque",
    title: "UI/UX Team Lead of Daniyal Technologies",
    image: "/istiaqe_vai.jpeg",
  },
  {
    quote:
      "From start to finish, Rokibul demonstrated exceptional professionalism and talent. His dedication to clean code and user-friendly design made a lasting impact on our team.I highly recommend Rokibul for any project requiring a skilled and reliable developer.",
    name: "Miraz Hassan",
    title: "CTO of Dhaka prokash",
    image: "/miraj_vai.jpg", 
  },
  
];

export const companies = [
  {
    id: 1,
    name: "Daniyal Technologies",
    img: "/daniyal.png",
    link: "https://daniyaltechnologies.com/",
    quote: "Currently working with Daniyal Technologies as a Software Engineer",
  },
  {
    id: 2,
    name: "Property Sheba BD",
    img: "/propertysheba_logo.png",
    link: "https://propertyshebabd.com/",
    quote: "Developed their website from scratch"
  },
  {
    id: 3,
    name: "Asian Expo Conference",
    img: "/asian_expo.png",
    link: "https://asianexpobd.com/",
    quote: "Developed their website from scratch"
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Software Engineering Intern",
    desc: "Worked on a web-based platform using NextJs and NestJs, enhancing interactivity.",
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
    title: "NestJs and NextJs Developer",
    desc: "Worked on backend development using NestJs and NextJs, creating robust APIs and database management.",
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
    img: "/fb2.svg",
    link: "https://www.facebook.com/rakib4458",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/md-rokibul-islam-03aa6820a/",
  },
];
