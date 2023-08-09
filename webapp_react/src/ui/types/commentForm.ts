export interface CommentFormData {
  comment: string;
  author: string;
}

export interface CommentFormDataWithId extends FormData {
  post: string;
}

export interface CommentMutationVariables {
  variables: CommentFormDataWithId;
}
