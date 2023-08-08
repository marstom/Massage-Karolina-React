import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { colors, otherColors } from "ui/palette";
import { gql, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";

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

type FormData = {
  comment: string;
  author: string;
};

const initialFormData: FormData = {
  comment: "",
  author: "",
};

// TODO move this query to BlogCommentSection level.
const query = gql`
  mutation CreatePostComment($post: ID!, $comment: String!, $author: String!) {
    createPostComment(
      data: { post: $post, comment: $comment, author: $author }
    ) {
      data {
        id
      }
    }
  }
`;

const AddCommentForm: React.FC<{}> = () => {
  const { id } = useParams();
  const [mutateFunction, { data, loading, error }] = useMutation<
    { id: string } | FormData
  >(query);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  // useEffect(() => {}, [loading]); // TODO reload all coments
  const addComment = async () => {
    console.log("COmm added");
    const mutationVariables = { post: id, ...formData };
    console.log("Mu varialbesl");
    console.log(mutationVariables);
    await mutateFunction({ variables: mutationVariables });
  };

  const handleNameChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    formData.author = value;
    console.log(formData);
  };

  const handleCommentChange = (e: FormEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    formData.comment = value;
    console.log(formData);
  };
  if (error) {
    return <>Error!!!</>;
  }
  if (loading) {
    return <>Loading</>;
  }
  return (
    <>
      <FormContainer>
        <Label>Komentarz: </Label>
        <TextArea onChange={handleCommentChange} name={"comment"} />
      </FormContainer>
      <ButtonContainer>
        <LabelName>Imię: </LabelName>
        <NameInput
          name={"name"}
          type={"text"}
          onChange={handleNameChange}
        ></NameInput>
        <Button onClick={() => addComment()}>Dodaj komentarz</Button>
      </ButtonContainer>
    </>
  );
};

export default AddCommentForm;
