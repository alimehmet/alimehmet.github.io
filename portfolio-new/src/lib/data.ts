// ============================================
// PORTFOLIO DATA - Preserved from original site
// ============================================

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  link: string;
  linkType: "github" | "linkedin" | "youtube" | "external";
  tags: string[];
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "linkedin" | "github" | "hackerrank" | "email";
}

export interface PersonalInfo {
  name: string;
  brand: string;
  tagline: string;
  email: string;
  location: string;
  aboutText: string[];
}

// Personal Information - Preserved from original site
export const personalInfo: PersonalInfo = {
  name: "Mehmet Ali Ongan",
  brand: "Ongan",
  tagline: "Where software is rewritten from scratch!",
  email: "maliongan@hotmail.com",
  location: "Istanbul/Turkey",
  aboutText: [
    "Some people have good ideas that can't go into reality.",
    "Not me.",
    "Because I can make every great idea I have into a reality by creating successful projects.",
  ],
};

// Social Links - Preserved from original site
export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/maliongan/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/alimehmet",
    icon: "github",
  },
  {
    name: "Hackerrank",
    url: "https://www.hackerrank.com/maliongan/",
    icon: "hackerrank",
  },
  {
    name: "Email",
    url: "mailto:maliongan@hotmail.com",
    icon: "email",
  },
];

// Portfolio Projects - Preserved from original site
export const projects: Project[] = [
  {
    id: "yolov3-mask-detection",
    title: "Detection of Masked and Unmasked People Using Yolo V3",
    description:
      "While working as a Machine Learning Intern at Autonom, I utilized YoloV3 for real-time detection of whether people were wearing masks, inspired by current issues.",
    fullDescription:
      "While working as a Machine Learning Intern at Autonom, I utilized YoloV3 for real-time detection of whether people were wearing masks, inspired by current issues.",
    image: "/img/ana3.png",
    link: "https://www.linkedin.com/posts/maliongan_yolov3-artificialintelligence-yapayzeka-activity-6701128014069022720-LeWw",
    linkType: "linkedin",
    tags: ["Machine Learning", "YoloV3", "Python", "Computer Vision"],
    featured: true,
  },
  {
    id: "image-cropper",
    title: "Image Cropper",
    description:
      "This script, written during my university summer internship, crops the given image based on the entered pixel values.",
    fullDescription:
      "This script, written during my university summer internship, crops the given image based on the entered pixel values.",
    image: "/img/ana2.png",
    link: "https://github.com/alimehmet/image-cropper",
    linkType: "github",
    tags: ["Python", "Image Processing", "Automation"],
    featured: true,
  },
  {
    id: "bulk-image-download",
    title: "Bulk Image Download from Google Images",
    description:
      "In this method created by Michael Sallomi, it is explained how to collect images from Google Images for machine learning, deep learning, etc.",
    fullDescription:
      "In this method created by Michael Sallomi, it is explained how to collect images from Google Images for machine learning, deep learning, etc. Refer to the PDF file for instructions.",
    image: "/img/ana1.png",
    link: "https://github.com/alimehmet/gooogle-gorseller-toplu-resim-indirme",
    linkType: "github",
    tags: ["Python", "Web Scraping", "Machine Learning", "Data Collection"],
    featured: true,
  },
];

// Navigation Links
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

// Contact Form Fields
export const contactFormFields = [
  {
    name: "first_name",
    label: "First Name",
    type: "text",
    placeholder: "First Name",
    required: true,
  },
  {
    name: "last_name",
    label: "Last Name",
    type: "text",
    placeholder: "Last Name",
    required: true,
  },
  {
    name: "email",
    label: "E-Mail",
    type: "email",
    placeholder: "E-Mail",
    required: true,
  },
] as const;

// Formspree endpoint - Preserved from original site
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbjppynr";

