import React, { FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "ui/palette";
import { ApolloError } from "@apollo/client";
import { CommentFormData } from "../types/commentForm";

const Div = styled.div`
  color: ${colors.textColor};
`;
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
type Errors = {
  commentError: boolean;
  authorError: boolean;
};
const initialErrors = {
  commentError: false,
  authorError: false,
};

const AddCommentForm: React.FC<Props> = (props) => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState<CommentFormData>(initialFormData);
  const [validationErrors, setValidationErrors] =
    useState<Errors>(initialErrors); // Dangerous! useState is async and wait for component rerender, but it's not return a promise
  // it's dangerous to use it in async function!! Spent a lot on this bug.....
  const errDivRef = useRef<HTMLDivElement>(null);

  const hasError = (obj: { [key: string]: boolean }) => {
    return Object.values(obj).some((value) => value === true);
  };

  useEffect(() => {
    // must use it here, because useState is async
    validateFormErrors();
  }, [validationErrors]);

  const validateFormErrors = () => {
    const newErrors = {
      authorError: formData.author.length <= 2,
      commentError: formData.comment.length <= 2,
    };
    setValidationErrors(newErrors);
  };
  const addComment = async () => {
    if (errDivRef.current) {
      errDivRef.current.removeAttribute("hidden");
    }
    if (hasError(validationErrors)) {
      return;
    } else {
      const mutationVariables = { post: props.postId, ...formData };
      await props.addCommentMutation({ variables: mutationVariables });
      setSent(true);
    }
  };

  if (sent) {
    return (
      <FormContainer>
        <i>Dziękuję za opinie!</i>
      </FormContainer>
    );
  }
  return (
    <Div>
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
      <div hidden ref={errDivRef}>
        {validationErrors.commentError && <div>Komentarz jest za krótki.</div>}
        {validationErrors.authorError && <div>Pole nie może być puste!</div>}
      </div>
    </Div>
  );
};

export default AddCommentForm;
