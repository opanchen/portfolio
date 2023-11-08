export type Project = {
  title: string;
  kind: string;
  role: string;
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
