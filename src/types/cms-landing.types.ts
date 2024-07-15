export type Project = {
  name: string;
  tags: string;
  year: string;
  ghUrl: string;
  liveUrl: string | null;
  desc_en: string;
  desc_uk: string;
  techList: Technology[];
  images: Image[];
};

export type Technology = {
  name: string;
  src: string;
  isShown: boolean | null;
};

export type Image = {
  path: string;
  alt: string;
  _key: string;
};

export type HeroText = {
  heading: string;
  tagline: string;
  majors: string[];
  about: string;
  heroBtnLabel: string;
  _type: string;
};

export type Certificate = {
  name: string;
  isShown: boolean | null;
  uploadUrl: string;
  desc_en: string;
  desc_uk: string;
  company: {
    name: string;
    companyUrl: string;
  };
};

export type CertificatesResponse = {
  certificateList: Certificate[];
};

export type ContactsResponse = {
  email: string;
  linkedIn: string;
  gitHub: string;
  telegram: string;
  cv: string;
};

export type HeroResponse = {
  en: HeroText;
  uk: HeroText;
};

export type TechStackResponse = {
  techStackList: Technology[];
};

export type ProjectsResponse = {
  projectList: Project[];
};
