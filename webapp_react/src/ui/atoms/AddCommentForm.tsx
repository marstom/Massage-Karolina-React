import React, { FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "ui/palette";
import { ApolloError } from "@apollo/client";
import { CommentFormData } from "../types/commentForm";
import { useForm } from "react-hook-form";

const Div = styled.div`
  color: ${colors.textColor};
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1vh;
  //max-width: 80%;
  margin: 5px;
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 1vh;
  margin: 15px 0px 0px 0px;
`;

const TextArea = styled.textarea`
  background: ${colors.primary};
  color: ${colors.textColor};
  min-height: 5em;
  resize: none;
  border-style: solid;
  border-color: ${colors.lightBlue};
`;

const NameInput = styled.input`
  background: ${colors.primary};
  flex-grow: 3;
  max-width: 50%;
  color: ${colors.textColor};

  border-style: solid;
  border-color: ${colors.lightBlue};
`;

const Button = styled.button`
  padding: 0.2em;
  flex-grow: 2;
  max-width: 10%;
  color: ${colors.textColorLight};
  background: ${colors.lightBlue};
  margin-left: 10px;
`;

const Label = styled.label`
  flex-grow: 0;
  margin-right: 10px;
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

type FormData = {
  comment: string;
  author: string;
};

const AddCommentForm: React.FC<Props> = (props) => {
  const [sent, setSent] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const addComment = async (values: FormData) => {
    const mutationVariables = { post: props.postId, ...values };
    await props.addCommentMutation({ variables: mutationVariables });
    setSent(true);
  };

  if (sent) {
    return (
      <CommentContainer>
        <i>Dziękuję za opinie!</i>
      </CommentContainer>
    );
  }
  return (
    <form onSubmit={handleSubmit(addComment)}>
      <Div>
        <CommentContainer>
          <Label>Komentarz: </Label>
          <TextArea
            {...register("comment", {
              required: "Komentarz nie może być pusty.",
            })}
          />
        </CommentContainer>
        <NameContainer>
          <LabelName>Imię: </LabelName>
          <NameInput
            type={"text"}
            {...register("author", { required: "Podaj imię/nick." })}
          ></NameInput>
          <Button type="submit">Dodaj komentarz</Button>
        </NameContainer>
      </Div>
    </form>
  );
};

export default AddCommentForm;
