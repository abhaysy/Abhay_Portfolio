 // Projects Logo
import financedashboardlogo from '../assets/work_logo/finance_dashboard.png';
import realestatelogo from '../assets/work_logo/real_estate.png';

// Projects Information
export const projects = [
  {
    id: 0,
    title: "Finanseer",
    description: "A finance dashboard app built with the MERN stack and Redux Toolkit. It includes expense and revenue tracking, machine learning-based revenue forecasting (85% accuracy), regression analysis, and interactive data visualizations.",
    image: financedashboardlogo,
    tags: ["Material UI", "JavaScript", "TypeScript", "MERN Stack", "Redux Toolkit", "Machine Learning"],
    github: "https://github.com/abhaysy/Finance-App",
    webapp: " ",
  },
  {
    id: 1,
    title: "Residex",
    description: "A MERN stack real estate application featuring CRUD operations for property listings, advanced search, real-time updates with Socket.io, and interactive maps using Leaflet for enhanced property discovery and user experience.",
    image: realestatelogo,
    tags: ["JavaScript", "TypeScript", "Sass", "Redux Toolkit", "MERN Stack", "Socket.io", "Leaflet"],
    github: "https://github.com/abhaysy/Estate-App",
    webapp: "",
  },
  // ... other projects
];

