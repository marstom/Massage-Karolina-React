type MiniPostAttributes = {
  title: string;
  body: string;
  shortDescription: string;
  miniImage?: { data?: { attributes: { url: string } } };
};
type FullPostAttributes = {
  title: string;
  body: string;
  shortDescription: string;
  post_comments: PostComments;
};
type MiniPost = {
  id: string;
  attributes: MiniPostAttributes;
};

export type PostDetails = {
  id: string;
  attributes: FullPostAttributes;
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
  post: { data: MiniPost };
};

export type ReadPostFull = {
  post: { data: PostDetails };
};

export type Posts = {
  posts: {
    data: MiniPost[];
  };
};
