type Post = {
  id: string;
  attributes: {
    title: string;
    body: string;
    shortDescription: string;
  };
};

export type ReadPost = {
  post: { data: Post };
};

export type Posts = {
  posts: {
    data: Post[];
  };
};
