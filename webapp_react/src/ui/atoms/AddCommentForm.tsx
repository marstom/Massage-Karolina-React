import React, { FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "ui/palette";
import { ApolloError } from "@apollo/client";
import { CommentFormData } from "../types/commentForm";
import { useForm } from "react-hook-form";
import Button from "./Button";

const Div = styled.div`
  color: ${colors.textColor};
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1vh;
  margin: 5px;
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
  color: ${colors.textColor};
  border-color: ${colors.lightBlue};
`;

const Label = styled.label`
  flex-grow: 0;
  margin-right: 10px;
`;

const LabelName = styled(Label)`
  margin-left: auto;
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
      <Div className="flex flex-col gap-y-6">
        <CommentContainer>
          <Label>Komentarz: </Label>
          <TextArea
            className={"border-2 rounded p-2"}
            {...register("comment", {
              required: "Komentarz nie może być pusty.",
            })}
          />
        </CommentContainer>
        <div className="flex flex-row">
          <LabelName className="m-auto">Imię: </LabelName>
          <NameInput
            className={"border-2 rounded basis-1/2 grow p-2"}
            type={"text"}
            {...register("author", { required: "Podaj imię/nick." })}
          />
          <Button type="submit" className={"w-[18rem] h-[2.7rem] ml-5"}>
            Dodaj komentarz
          </Button>
        </div>
      </Div>
    </form>
  );
};

export default AddCommentForm;
