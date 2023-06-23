export interface Page {
  id: number;
  label: string;
  link: string;
}

export interface AboutMeData {
  name: string;
  title: string;
  body: string;
  highlightedBody: string;
  body2: string;
}

export interface Link {
  text: string;
  url: string;
}
export interface Project {
  title: string;
  body1: string;
  body2: string;
  image: string;
  links: Link[];
}
