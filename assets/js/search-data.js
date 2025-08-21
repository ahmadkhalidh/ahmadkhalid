// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/ahmadkhalid/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ahmadkhalid/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "These are the main projects I’ve been involved in. Feel free to reach out if you’d like to chat!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ahmadkhalid/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ahmadkhalid/https:/drive.google.com/file/d/13liieSvyTyHOGV_txzQJqPgkKyratMM1/view?usp=sharing";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "During my undergraduate years at Fulokoja, I volunteered as a Tutor for several math, CS, and physics courses. Here are some of the courses and roles I’ve taken on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ahmadkhalid/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/ahmadkhalid/books/the_godfather/";
            },},{id: "news-i-graduated-with-first-class-honours-from-federal-university-of-lokoja",
          title: 'I graduated with First Class Honours from Federal University of Lokoja.',
          description: "",
          section: "News",},{id: "projects-exploring-masked-autoencoders-on-road-images",
          title: 'Exploring Masked Autoencoders on Road Images',
          description: "Undergraduate capstone.",
          section: "Projects",handler: () => {
              window.location.href = "/ahmadkhalid/projects/1_project/";
            },},{id: "projects-healthfin-classifier",
          title: 'HealthFin Classifier',
          description: "The HealthFin Classifier was developed to explore how artificial intelligence can be applied in the financial aspects of healthcare, such as insurance claims, medical billing, and fraud detection.",
          section: "Projects",handler: () => {
              window.location.href = "/ahmadkhalid/projects/2_project/";
            },},{id: "projects-mental-health-classifier",
          title: 'Mental Health Classifier',
          description: "The Mental Health Classifier was developed to apply natural language processing for detecting and categorizing mental health conditions from online text, supporting early identification and analysis across multiple categories",
          section: "Projects",handler: () => {
              window.location.href = "/ahmadkhalid/projects/3_project/";
            },},{id: "projects-vision-transformer-for-early-detection-of-rice-diseases-using-hyperspectral-and-rgb-imagery",
          title: 'Vision Transformer for Early Detection of Rice Diseases Using Hyperspectral and RGB Imagery...',
          description: "Ongoing work",
          section: "Projects",handler: () => {
              window.location.href = "/ahmadkhalid/projects/4_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%68%6D%61%64%6B%68%61%6C%69%64%68%75%73%73%61%69%6E@%67%6D%61%69%6C.%63%6F%6D.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ahmadkhalidh", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ahmad-khalid-hussain", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=oRx-Q1cAAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
