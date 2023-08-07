type PostAtriputes = {
  title: string;
  body: string;
  shortDescription: string;
};
type Post = {
  id: string;
  attributes: PostAtriputes;
};

export type PostDetails = {
  id: string;
  attributes: PostAtriputes & { post_comments: PostComments };
};

export type PostComments = {
  data: PostComment[];
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

export type ReadPostFull = {
  post: { data: PostDetails };
};

export type Posts = {
  posts: {
    data: Post[];
  };
};
