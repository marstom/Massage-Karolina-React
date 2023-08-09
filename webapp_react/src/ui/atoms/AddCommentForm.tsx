import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { colors } from "ui/palette";
import { ApolloError } from "@apollo/client";
import { CommentFormData } from "../types/commentForm";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1vh;
  //max-width: 80%;
  margin: 5px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 1vh;
  //max-width: 80%;
  margin: 5px;
`;

const TextArea = styled.textarea`
  background: ${colors.primary};
  color: ${colors.textColor};
  min-height: 5em;
`;

const NameInput = styled.input`
  background: ${colors.primary};
  flex-grow: 3;
  max-width: 50%;
  color: ${colors.textColor};
`;

const Button = styled.button`
  padding: 0.2em;
  flex-grow: 2;
  max-width: 10%;
  color: ${colors.textColor};
  background: ${colors.lightBlue};
`;

const Label = styled.label`
  flex-grow: 0;
`;

const LabelName = styled(Label)`
  margin-left: auto; // it align whole thing to left
`;

const initialFormData: CommentFormData = {
  comment: "",
  author: "",
};

type Props = {
  addCommentMutation: (data: any) => void;
  addCommentloading: boolean;
  addCommenterror: ApolloError | undefined;
  postId: string;
};

const AddCommentForm: React.FC<Props> = (props) => {
  const [formData, setFormData] = useState<CommentFormData>(initialFormData);
  const addComment = async () => {
    console.log("Comment added");
    const mutationVariables = { post: props.postId, ...formData };
    console.log("mutation variables:");
    console.log(mutationVariables);
    await props.addCommentMutation({ variables: mutationVariables });
    // TODO re-fetch comments
  };

  if (props.addCommenterror) {
  }
  if (props.addCommentloading) {
    console.log("Loading comments...");
  }
  return (
    <>
      <FormContainer>
        <Label>Komentarz: </Label>
        <TextArea
          onChange={(e: FormEvent<HTMLTextAreaElement>) =>
            setFormData({ ...formData, comment: e.currentTarget.value })
          }
          name={"comment"}
        />
      </FormContainer>
      <ButtonContainer>
        <LabelName>Imię: </LabelName>
        <NameInput
          name={"name"}
          type={"text"}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setFormData({ ...formData, author: e.currentTarget.value })
          }
        ></NameInput>
        <Button onClick={() => addComment()}>Dodaj komentarz</Button>
      </ButtonContainer>
    </>
  );
};

export default AddCommentForm;
