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
          title: "publications",
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
            window.location.href = "/ahmadkhalid/assets/pdf/Khalid_Resume.pdf";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching experience, tutoring, and academic mentoring.",
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
          section: "News",},{id: "news-selected-as-a-judge-for-the-deep-learning-indaba-community-challenge-in-kigali-rwanda",
          title: 'Selected as a judge for the Deep Learning Indaba community challenge in Kigali,...',
          description: "",
          section: "News",},{id: "news-our-article-on-explainable-ai-for-transparent-and-trustworthy-water-quality-monitoring-was-published-in-early-access-on-ieee-xplore",
          title: 'Our article on explainable AI for transparent and trustworthy water quality monitoring was...',
          description: "",
          section: "News",},{id: "news-presented-research-on-first-year-gpa-prediction-at-the-international-conference-on-artificial-intelligence-and-robotics-icair",
          title: 'Presented research on first year GPA prediction at the International Conference on Artificial...',
          description: "",
          section: "News",},{id: "news-invited-to-review-a-manuscript-for-the-journal-of-electrical-systems-and-information-technology",
          title: 'Invited to review a manuscript for the Journal of Electrical Systems and Information...',
          description: "",
          section: "News",},{id: "news-selected-for-the-international-campus-for-mathematical-research-and-applications-icmra-visiting-program-at-the-beijing-institute-of-mathematical-sciences-and-applications-bimsa-china",
          title: 'Selected for the International Campus for Mathematical Research and Applications (ICMRA) visiting program...',
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
