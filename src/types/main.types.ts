export type Project = {
  title: string;
  tags: string[];
  role?: {
    en: string;
    uk: string;
  };
  startDate: string;
  description: {
    en: string;
    uk: string;
  };
  images: string[];
  urlDemo: string;
  urlGH: string;
  tech: string;
  technologies: {
    name: string;
    image: string;
  }[];
};

export type TabLabels = {
  [key: string]: string;
};
