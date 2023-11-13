export const MainPageConfig = {
  // Global icon
  GoBack: './icons/goBack.png',
  ToggleUp: './icons/toggleUp.png',
  ToggleDown: './icons/toggleDown.png',
  ToggleLeft: './icons/toggleLeft.png',
  ToggleRight: './icons/toggleRight.png',
  // Personal Info
  Email: 'itsjh1242@gmail.com',
  Github: 'itsjh1242',
  // Profile Head
  Title: 'Personal Portfolio',
  SubTitleF: "I'm Jun Hyeon",
  SubTitleS: 'Full Stack Developer',
  ProfileImageSrc: './images/profileImage.jpg',
  ContactMailIconSrc: './icons/icon_mail3.png',
  ContactGithubIconSrc: './icons/icon_github3.png',
  // Profile Right Component
  ProfileRightElement: [
    ['4+', 'Years of\nExperience'],
    ['10+', 'Projects\nCompleted'],
    ['1+', 'Companies\nWorked'],
  ],
  // Profile Body Component
  ProfileBodyElement: [
    ['Experiences', 'Job Responsibilities, Achievements', '/experience'],
    ['Works', 'Personal or Team Project Works', '/work'],
    ['Skills & Certificates', 'Key Skills, Certificates', '/skill'],
    ['Activities', 'Extracurricular Activities, Leadership Roles', '/activity'],
  ],
  // Menu Component
  // Experience
  Experiences: {
    Title: 'Experience',
    Desc: 'Job Responsibilities, Achievements',
    Content: [
      {
        Title: 'Researcher and Developer in Mobile Application',
        Position: 'Intern',
        Period: 'Jan 2023 - Nov 2023',
        Description:
          'Research and Develop about the way of how to motion password work using mobile phone. ',
        Responsibility: [
          'Manage and lead a team to make good teamwork',
          'Develop mobile application with Flutter',
          'Design user interface for mobile application using Figma',
        ],
      },
      {
        Title: 'Tutoring in Python',
        Position: 'Tutor',
        Period: 'Jan 2023 - Nov 2023',
        Description: 'None',
        Responsibility: ['None', 'None', 'None'],
      },
      {
        Title: 'Tutoring in Node.js',
        Position: 'Tutor',
        Period: 'Sep 2022 - Dec 2022',
        Description: 'None',
        Responsibility: ['Teach how to implement CRUD operations and create web-site using Node.js', 'Teach how to design web-site with CSS'],
      },
      {
        Title: 'Assistant Instructor',
        Position: 'Assistant',
        Period: 'Sep 2022 - Dec 2022',
        Description: 'None',
        Responsibility: ['Assist main teacher to Scratch program', 'Provide computer program guidance and teach the how to use and utilze program for student', 'Help students troubleshoot programming issues and encourage their creativity'],
      },
      {
        Title: 'Tennis Matching Application Developer ',
        Position: 'Intern',
        Period: 'Jun 2022 - Aug 2022',
        Description: 'None',
        Responsibility: ['Assist to develop a tennis matching application using Flutter', 'Provide and support to make implementation of database structures with Firebase', 'Assist to conect the development of server and database communication functionalities'],
      },
    ],
  },
  // Works
  Works: {
    Title: 'Works',
    Desc: 'Personal or Team Project Works',
    Content: [
      {
        Title: 'Simple Design Portfolio Web Page',
        Stacks: ['Html', 'CSS', 'Javascript', 'Nodejs', 'Github'],
        Description:
          'Simple Design Portfolio Web Page using Html, CSS, Javascript, Nodejs, Github',
        Role: ['Main Developer', 'UI Designer'],
        Image: ['./images/sampleimage.png', './images/sampleimage2.jpg'],
      },
      {
        Title: 'Motion recognition-Based Double-Cipher Authenticatioin System',
        Stacks: ['Flutter', 'MySQL', 'Nodejs', 'Github'],
        Description: 'None',
        Role: ['Main Developer', 'UI Designer'],
        Image: ['./images/sampleimage.png', './images/sampleimage2.jpg'],
      },
      {
        Title: 'AI Chatbot-based Diary Writing System for Positive Emotion',
        Stacks: ['Html', 'CSS', 'Javascript', 'Python', 'Github'],
        Description:
          'None',
        Role: ['Main Developer', 'UI Designer'],
        Image: ['./images/sampleimage.png', './images/sampleimage2.jpg'],
      },
      {
        Title: 'Finger recognition absenteeism management system using Arduino',
        Stacks: ['Html', 'CSS', 'Javascript', 'Nodejs', 'Arduino', 'Github'],
        Description:
          'None',
        Role: ['Main Developer', 'UI Designer'],
        Image: ['./images/sampleimage.png', './images/sampleimage2.jpg'],
      }
    ],
  },
  // Skills & Certificates
  Skills: {
    Title: 'Skills & Certificates',
    Desc: 'Key Skills, Certificates',
    Language: [
      { Language: 'Korean', Level: 'Native' },
      { Language: 'English', Level: 'Fluent' },
    ],
    License: [
      'Certificate of ITQ Excel, Word - Korea Productivity Center',
      'Certificate of Scuba Diving - National Association of Underwater Instructor',
    ],
    Awards: [
      {
        Title: 'Touchable Hair Catalog for Blind',
        Award: 'Red dot Award',
        Year: '2022',
        Prize: 'Best of the Best',
        Description:
          'We made this “Touchable Hair Catalog” for Blind people. When they go to hair shop,  can’t see their hair style and even the hair catalog. So, we decided to make 3D hair catalog for them. Using this catalog, blinds can recognize various hair style.',
        Role: [
          'Idea Maker',
          'Catalog Maker',
          'Support Panel Design',
          'Support Producting Video',
        ],
        Image: ['./images/sampleimage2.jpg', './images/sampleimage.png'],
      },
      {
        Title: 'Touchable Hair Catalog for Blind',
        Award: 'Young One Adc',
        Year: '2023',
        Prize: 'Merit and Short-list accolades',
        Description:
          'We made this “Touchable Hair Catalog” for Blind people. When they go to hair shop,  can’t see their hair style and even the hair catalog. So, we decided to make 3D hair catalog for them. Using this catalog, blinds can recognize various hair style.',
        Role: [
          'Idea Maker',
          'Catalog Maker',
          'Support Panel Design',
          'Support Producting Video',
        ],
        Image: ['./images/sampleimage2.jpg', './images/sampleimage.png'],
      },
      {
        Title: 'Touchable Hair Catalog for Blind',
        Award: 'Mad Stars',
        Year: '2022',
        Prize: 'Crystal',
        Description:
          'We made this “Touchable Hair Catalog” for Blind people. When they go to hair shop,  can’t see their hair style and even the hair catalog. So, we decided to make 3D hair catalog for them. Using this catalog, blinds can recognize various hair style.',
        Role: [
          'Idea Maker',
          'Catalog Maker',
          'Support Panel Design',
          'Support Producting Video',
        ],
        Image: ['./images/sampleimage.png', './images/sampleimage2.jpg'],
      },
    ],
  },
  // Activities
  Activities: {
    Title: 'Activities',
    Desc: 'Extracurricular Activities, Leadership Roles',
    Content: [
      {
        Title: 'IT Volunteer Club',
        Period: 'Jan 2023 - Nov 2023',
        Description: 'Research and Develop about the way of how to motion password work using mobile phone.',
        Image: ['./images/sampleimage.png', './images/sampleimage2.jpg'],
      },
      {
        Title: 'Dongseo University Volunteer Group',
        Period: 'Mar 2023 - Dec 2023',
        Description: 'Research and Develop about the way of how to motion password work using mobile phone.',
        Image: ['./images/sampleimage.png', './images/sampleimage2.jpg'],
      },
      {
        Title: 'Military Service',
        Period: 'Jan 2019 - Aug 2020',
        Description: '•	Honorably discharged from the Marine Corps in August 2020',
        Image: ['./images/sampleimage.png', './images/sampleimage2.jpg'],
      }
    ],
  },
};
