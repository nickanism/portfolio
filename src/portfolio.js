/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nick An",
  title: "Woo Hyun (Nick) An",
  subTitle: 
    "A Software Engineer with experience building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Python / Django and some other cool libraries and frameworks."
  ,
  resumeLink:
    "./WooHyun_An_CV_11-24-2021.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nickanism",
  linkedin: "https://www.linkedin.com/in/nickanism/",
  gmail: "nickanism@gmail.com",
  medium: "https://medium.com/@nickanism",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Who I am",
  subTitle: "A SOFTWARE ENGINEER WHO WANTS TO EXPLORE THE WORLD OF LOGIC AND BINARIES",
  skills: [
    emoji(
      "⚡ Systematized Full stack business logic as needed"
    ),
    emoji(
      "⚡ Robust and collaborative development with Agile"),
    emoji(
      "⚡ Integration of third party services like AWS and Heroku"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Wecode Coding Bootcamp",
      logo: require("./assets/images/wecode-logo-transparent.png"),
      subHeader: "Back End Engineering",
      duration: "March 2020 - July 2020",
      desc: "",
      descBullets: [
        
      ]
    },
    {
      schoolName: "Emerson College",
      logo: require("./assets/images/emersonLogo.png"),
      subHeader: "Bachelor of Arts in Visual and Media Arts",
      duration: "September 2010 - August 2014",
      desc: "",
      descBullets: [
        
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "30%"
    },
    {
      Stack: "Programming",
      progressPercentage: "45%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Engineer",
      company: "Tradir.io",
      companylogo: require("./assets/images/tradir.png"),
      date: "Jan 2021 – Sept 2021",
      desc: "a collaborative CRM solution designed for global traders",
      descBullets: [
        "reduced 27% of bugs in the email-related application of the project by refactoring vanilla Python into stateful components using Type Hints and Mypy",
        "improved the trading report/analysis feature's speed by 12%, minimizing the number of database queries",
        "actualized data recovery by implementing soft-deletion and cascading-soft-deletion functionality via recursive strategy"
      ]
    },
    {
      role: "Backend Developer",
      company: "Hodosoft",
      companylogo: require("./assets/images/hodosoft.png"),
      date: "Sept 2020 – Jan 2021",
      desc: "a startup that drove TodayShift: one of the top shift planners on Google Play",
      descBullets: [
        "set up AWS Lambda & CloudWatch cron job for detailed weather forecast from public APIs that cover 2079 regions in South Korea",
        "built the schedule sharing feature where you can see your friends' and coworkers' shifts",
        "spearheaded the globalization of TodayShift which increased user base by 8% in 6 weeks"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "PSR Media",
      companylogo: require("./assets/images/psrMedia-modified.png"),
      date: "June 2020 – July 2020",
      desc: "an advertisement firm with an award winning AI solution: PICLICK",
      descBullets: ["developed a web scraping script in Python that downloaded over 4000 fashion items", "created 5 APIs, collaborating with the AI team, that showed similar products to which the models are wearing in uploaded image files and URLs in 10 seconds"]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PERSONAL PASSION PROJETS I HAVE DEVELOPED (AND HAVE BEEN DEVELOPING)",
  projects: [
    {
      image: require("./assets/images/10K-Hours.png"),
      projectName: "10K Hours",
      projectDesc: "a gamification tool for autodidactic lifestyle",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://master10k.me/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/CS Foundations by a Half-Ass Code Monkey.png"),
      projectName: "CS Foundations by a half-ass code monkey",
      projectDesc: "where CS things are explained from a ten year-old's perspective",
      footerLink: [
        {
          name: "Coming Soon",
          // url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "The 4 most recent blog postings.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or just keep in touch?",
  number: "(+82) 10-5064-8783",
  email_address: "nickanism@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "NickAn09388479", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
