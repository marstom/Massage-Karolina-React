import React from "react";
import styled from "styled-components";
import { Content } from "ui/atoms/Content";
import { colors } from "../palette";
import { useForm } from "react-hook-form";

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
        <Label>Imię:{errors.name && <Err>{errors.name.message}</Err>} </Label>
        <Input
          type={"text"}
          {...register("name", {
            required: "To pole jest wymagane.",
          })}
        />

        <Label>Email:{errors.email && <Err>{errors.email.message}</Err>}</Label>
        <Input
          type={"text"}
          {...register("email", {
            required: "To pole jest wymagane.",
          })}
        />

        <Label>
          Telefon:{errors.phone && <Err>{errors.phone.message}</Err>}{" "}
        </Label>
        <Input
          type={"text"}
          {...register("phone", {
            required: "To pole jest wymagane.",
          })}
        />
      </Flex>
      <FlexCol>
        <Label>
          Wiadomość:
          {errors.message && <ErrMessage>{errors.message.message}</ErrMessage>}
        </Label>
        <TextArea
          {...register("message", {
            required: "To pole jest wymagane.",
          })}
        />
      </FlexCol>

      <FlexCol>
        <Button type={"submit"}>Wyślij</Button>
      </FlexCol>
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
