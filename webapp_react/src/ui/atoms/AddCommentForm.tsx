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

const TextArea = styled.textarea`
  flex-grow: 1;
  background: ${colors.primary};
  color: ${colors.textColor};
  min-height: 5em;
`;
const Button = styled.button`
  padding: 0.2em;
  flex-grow: 1;
  max-width: 50%;
  align-self: flex-end;
  color: ${colors.textColor};
  background: ${colors.lightBlue};
`;
const AddCommentForm = () => {
  return (
    <FormContainer>
      <TextArea />
      <Button>Dodaj komentarz</Button>
    </FormContainer>
  );
};

export default AddCommentForm;
