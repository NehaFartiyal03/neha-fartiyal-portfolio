import heroBg from '../assets/images/developer_hero_bg_1786639594338.jpg';
import projectsBg from '../assets/images/projects_page_bg_1786639608869.jpg';
import skillsBg from '../assets/images/skills_page_bg_1786639631402.jpg';
import servicesBg from '../assets/images/services_page_bg_1786639649790.jpg';

export interface PageBgConfig {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  imageUrl?: string;
  overlayGradient: string;
  accentColor: string;
}

export const pageBackgrounds: Record<string, PageBgConfig> = {
  home: {
    id: 'home',
    title: 'Neha Fartiyal',
    subtitle: 'Web Developer at ENIGOAL Startup Advisory Private Limited',
    badge: 'DEVELOPER PORTFOLIO',
    imageUrl: heroBg,
    overlayGradient: 'from-[#080B12]/90 via-[#080B12]/75 to-[#080B12]/95',
    accentColor: 'emerald'
  },
  about: {
    id: 'about',
    title: 'About Me',
    subtitle: 'Passionate Web Developer from Dehradun, Uttarakhand, creating clean and intuitive websites.',
    badge: 'BIOGRAPHY & PROFILE',
    imageUrl: undefined,
    overlayGradient: 'from-[#080B12]/92 via-[#0B0F19]/80 to-[#080B12]/95',
    accentColor: 'teal'
  },
  experience: {
    id: 'experience',
    title: 'Work Experience',
    subtitle: 'Professional history in full-stack web development and corporate website engineering.',
    badge: 'CAREER TIMELINE',
    imageUrl: undefined,
    overlayGradient: 'from-[#080B12]/95 via-[#0A0D18]/85 to-[#080B12]/95',
    accentColor: 'amber'
  },
  skills: {
    id: 'skills',
    title: 'Technical Skills',
    subtitle: 'Languages, frameworks, databases, and development tools I work with daily.',
    badge: 'TECH STACK MATRIX',
    imageUrl: undefined,
    overlayGradient: 'from-[#080B12]/90 via-[#0D1222]/80 to-[#080B12]/95',
    accentColor: 'teal'
  },
  projects: {
    id: 'projects',
    title: 'Featured Projects & Websites',
    subtitle: 'Real client websites deployed live and enterprise web applications.',
    badge: 'PORTFOLIO SHOWCASE',
    imageUrl: undefined,
    overlayGradient: 'from-[#080B12]/90 via-[#090D1A]/80 to-[#080B12]/95',
    accentColor: 'emerald'
  },
  services: {
    id: 'services',
    title: 'Freelance Services',
    subtitle: 'Tailored web development services for startups, businesses, and organizations.',
    badge: 'SERVICES & OFFERINGS',
    imageUrl: undefined,
    overlayGradient: 'from-[#080B12]/90 via-[#0C1020]/80 to-[#080B12]/95',
    accentColor: 'emerald'
  },
  education: {
    id: 'education',
    title: 'Education & Certifications',
    subtitle: 'Academic degree at DIT University and verified professional certifications.',
    badge: 'ACADEMIC BACKGROUND',
    imageUrl: undefined,
    overlayGradient: 'from-[#080B12]/92 via-[#0E1324]/85 to-[#080B12]/95',
    accentColor: 'amber'
  },
  contact: {
    id: 'contact',
    title: 'Get In Touch',
    subtitle: 'Let\'s discuss your website project or full-stack web application development.',
    badge: 'CONNECT & HIRE',
    imageUrl: undefined,
    overlayGradient: 'from-[#080B12]/90 via-[#0A0E1C]/85 to-[#080B12]/95',
    accentColor: 'emerald'
  }
};
