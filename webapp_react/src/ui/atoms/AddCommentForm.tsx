import React from "react";
import styled from "styled-components";
import { colors, otherColors } from "ui/palette";

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

const AddCommentForm = () => {
  const addComment = () => {
    console.log("COmm added");
  };
  return (
    <>
      <FormContainer>
        <Label>Komentarz: </Label>
        <TextArea />
      </FormContainer>
      <ButtonContainer>
        <LabelName>Imię: </LabelName>
        <NameInput type={"text"}></NameInput>
        <Button onClick={() => addComment()}>Dodaj komentarz</Button>
      </ButtonContainer>
    </>
  );
};

export default AddCommentForm;
