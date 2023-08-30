import React, { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { Content } from "ui/atoms/Content";
import { colors } from "../palette";
import { f } from "msw/lib/glossary-de6278a9";
import { Simulate } from "react-dom/test-utils";
import load = Simulate.load;

const Label = styled.label`
  align-self: center;
`;
const Form = styled.div``;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  gap: 1em;
  margin: 1em;
`;
const FlexCol = styled(Flex)`
  //vertical-align: auto;
  //flex-direction: column;
  //flex-flow: column wrap-reverse;
  //gap: 1em;
  justify-content: flex-end;
`;

const Button = styled.button`
  background: ${colors.lightBlue};
  color: ${colors.textColor};
  flex-grow: 1;
  max-width: 8em;
  align-self: flex-start;
  font-size: 100%;
  padding: 0.5em;
`;

const Input = styled.input`
  font-size: 100%;
  background: ${colors.primary};
  color: ${colors.textColor};
  flex-grow: 1;

  border-style: solid;
  border-color: ${colors.lightBlue};
  padding: 0.5em;
`;
const TextArea = styled.textarea`
  font-size: 100%;
  min-height: 5em;
  background: ${colors.primary};
  color: ${colors.textColor};
  flex-grow: 1;
  //min-width: 22em;
  border-style: solid;
  border-color: ${colors.lightBlue};
  padding: 0.5em;
`;

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = FormData;
const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const initialFormErrors = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

  // useEffect(() => {
  //   // console.log(formData);
  //   // validateForm();
  // }, [, formData]);
  //
  const changeFormData = (
    e: FormEvent<HTMLTextAreaElement | HTMLInputElement>,
    name: string
  ) => {
    type FData = Record<string, string>;
    const dat: FData = { [name]: e.currentTarget.value };
    setFormData({ ...formData, ...dat });
  };

  const validator = (key: keyof typeof formData, msg: string) => {
    console.log(msg, key, formData[key].length);
    if (formData[key].length === 0) {
      setFormErrors({ ...formErrors, [key]: msg });
    } else {
      setFormErrors({ ...formErrors, [key]: "" });
    }
  };
  const validateForm = () => {
    validator("name", "Name is too short");
    validator("email", "Email is too short");
    validator("message", "Message is too short");
    validator("phone", "Phone is too short");

    console.log("---form-errrors---");
    console.log(formErrors);
  };

  const sendMesage = () => {
    console.log("Message sent!");
  };
  const clickButtonHandler = () => {
    console.log("hendler");
    validateForm();
    // let k: keyof typeof formErrors;
    // for (k in formErrors) {
    //   console.log("err", formErrors[k]);
    // }
    sendMesage();
  };

  return (
    <Form>
      <Flex>
        <Label>Imię: </Label>
        <Input
          onChange={(e: FormEvent<HTMLInputElement>) =>
            changeFormData(e, "name")
          }
          type={"text"}
        />
        {formErrors.name && <span>Name error: {formErrors.name}</span>}
        <Label>Email: </Label>
        <Input
          onChange={(e: FormEvent<HTMLInputElement>) =>
            changeFormData(e, "email")
          }
          type={"text"}
        />
        <Label>Telefon: </Label>
        <Input
          onChange={(e: FormEvent<HTMLInputElement>) =>
            changeFormData(e, "phone")
          }
          type={"text"}
        />
      </Flex>
      <FlexCol>
        <Label>Wiadomość: </Label>
        <TextArea
          onChange={(e: FormEvent<HTMLTextAreaElement>) =>
            changeFormData(e, "message")
          }
        />
      </FlexCol>
      <FlexCol>
        <Button onClick={clickButtonHandler}>Wyślij</Button>
      </FlexCol>
    </Form>
  );
};

const ContentWithMargin = styled(Content)`
  margin-left: 3%;
  margin-right: 3%;
`;

export const ContactPage = () => {
  return (
    <ContentWithMargin>
      <h2>Karolina Banaszewska</h2>
      <p>Skontaktuj się ze mną:</p>
      <p>Adres:</p>
      <p>Gdynia, ul. Żeliwna 7</p>
      <p>Email: kb@gmail.com</p>
      <p>Tel: +48 000 000 000</p>
      <h3>Formularz kontaktowy:</h3>
      <ContactForm />
      {/*<UnderlineInputContactForm />*/}
    </ContentWithMargin>
  );
};
