export type PostList = {
  id: string;
  slug: string;
  shortTitle: any;
  image: string;
};

export type Post = {
  content: string;
  shortTitle: string;
  title: string;
  date: string;
  image: string;
  description: string;
  slug: string;
};

export type Team = {
  name: string;
  role: string;
  image: string;
};
