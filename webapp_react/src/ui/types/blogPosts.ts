type Post = {
  id: string;
  attributes: {
    title: string;
    body: string;
    shortDescription: string;
    post_comments?: PostComments;
  };
};

export type PostComments = {
  data?: PostComment[];
};

type PostComment = {
  id: string;
  attributes: {
    comment: string;
    author: string;
    like: number;
    createdAt: string; // this is "2023-08-07T08:48:01.720Z" from api
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
