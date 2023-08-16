import React from "react";
import styled from "styled-components";
import { Content } from "ui/atoms/Content";
import { colors } from "../palette";

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

const ContactForm = () => {
  return (
    <Form>
      <Flex>
        <Label>Imię: </Label>
        <Input type={"text"} />
        <Label>Email: </Label>
        <Input type={"text"} />
      </Flex>
      <FlexCol>
        <Label>Wiadomość: </Label>
        <TextArea />
      </FlexCol>
      <FlexCol>
        <Button>Wyślij</Button>
      </FlexCol>
    </Form>
  );
};

export const ContactPage = () => {
  return (
    <Content>
      <h2>Karolina Banaszewska</h2>
      <p>Skontaktuj się ze mną:</p>
      <p>Adres:</p>
      <p>Gdynia, ul. Żeliwna 7</p>
      <p>Email: kb@gmail.com</p>
      <p>Tel: +48 000 000 000</p>
      <h3>Formularz kontaktowy:</h3>
      <ContactForm />
      {/*<UnderlineInputContactForm />*/}
    </Content>
  );
};
