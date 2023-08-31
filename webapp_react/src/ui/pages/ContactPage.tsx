import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Content } from "ui/atoms/Content";
import { colors } from "../palette";
import { useForm } from "react-hook-form";
import Tooltip from "../atoms/Tooltip";

const Label = styled.label`
  align-self: center;
`;
const Form = styled.form``;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  gap: 1em;
  margin: 1em;
  flex-wrap: wrap;
`;
const FlexCol = styled(Flex)`
  //vertical-align: auto;
  flex-direction: row;
  //height: 0;
  //flex-flow: column wrap-reverse;
  //gap: 1em;
  justify-content: flex-end;
  //flex-direction: column;
  //margin-left: 0;
`;

const Button = styled.button`
  background: ${colors.lightBlue};
  color: ${colors.textColor};
  flex-grow: 1;
  max-width: 14em;
  min-width: 8em;
  align-self: flex-start;
  font-size: 100%;
  padding: 0.5em;
  margin-right: 1em;
`;

const Input = styled.input`
  font-size: 100%;
  width: 90%;
  background: ${colors.primary};
  color: ${colors.textColor};
  flex-grow: 1;
  margin-top: 5px;

  border-style: solid;
  border-color: ${colors.lightBlue};
  padding: 0.5em;
`;
const TextArea = styled.textarea`
  font-size: 100%;
  min-height: 5em;
  background: ${colors.primary};
  color: ${colors.textColor};
  //flex-grow: 3;
  //min-width: 22em;
  border-style: solid;
  border-color: ${colors.lightBlue};
  padding: 0.5em;
  //min-width: 100%;
  width: 97%;
`;

const Err = styled.span`
  font-size: 80%;
  color: crimson;
  position: absolute;
  margin-left: 30px;
  z-index: 1;
  user-select: none; // prevent from selection
`;
const ErrMessage = styled(Err)`
  margin-top: -30px;
`;

const Item = styled.span`
  flex-basis: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form
      onSubmit={handleSubmit((values) => {
        console.log(values);
      })}
    >
      <Flex>
        <span style={{ flexGrow: 1 }}>
          <Label>Imię:</Label>
          <Tooltip
            // shift={"0px"}
            direction={"top"}
            content={errors.name && errors.name.message}
          >
            <Input
              type={"text"}
              {...register("name", {
                required: "To pole jest wymagane.",
              })}
            ></Input>
          </Tooltip>
        </span>

        <span style={{ flexGrow: 1 }}>
          <Label>Email: </Label>
          <Tooltip
            // shift={"0px"}
            direction={"top"}
            content={errors.email && errors.email.message}
          >
            <Input
              type={"text"}
              {...register("email", {
                required: "To pole jest wymagane.",
              })}
            />
          </Tooltip>
        </span>

        <span style={{ flexGrow: 1 }}>
          <Label>Telefon:</Label>
          <Tooltip
            // shift={"30px"}
            direction={"top"}
            content={errors.phone && errors.phone.message}
          >
            <Input
              type={"text"}
              {...register("phone", {
                required: "To pole jest wymagane.",
              })}
            />
          </Tooltip>
        </span>
        <span style={{ flexBasis: "100%", width: 0 }}>
          <Label>Wiadomość:</Label>
          <Tooltip
            // shift={"0px"}
            direction={"top"}
            content={errors.message && errors.message.message}
          >
            <TextArea
              {...register("message", {
                required: "To pole jest wymagane.",
              })}
            />
          </Tooltip>
        </span>
        <span style={{ marginLeft: "auto" }}>
          <Button type={"submit"}>Wyślij</Button>
        </span>
      </Flex>
    </form>
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
