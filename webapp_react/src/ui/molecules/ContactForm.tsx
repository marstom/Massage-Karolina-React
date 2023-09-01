import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputTooltip from "./InputTooltip";
import styled from "styled-components";
import { colors } from "../palette";

const Wrapper = styled.span<{ $width?: string }>`
  margin-right: 20px;
  width: ${(props) => (props.$width ? props.$width : "30%")};
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  gap: 1em;
  margin: 1em;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background: ${colors.lightBlue};
  color: ${colors.textColorLight};
  flex-grow: 1;
  max-width: 14em;
  min-width: 8em;
  align-self: flex-start;
  font-size: 100%;
  padding: 0.5em;
  margin-right: 1em;
`;

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
const ContactForm: React.FC<{ createMessageMutation: (data: any) => any }> = ({
  createMessageMutation,
}) => {
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  if (loading) {
    return <>loading...</>;
  }

  if (sent) {
    return (
      <>
        <h2>Twoja wiadomość została wysłana!</h2>
        <h2>Odezwę się do Ciebie niedługo.</h2>
      </>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(async (values) => {
        setLoading(true);
        const resp = await createMessageMutation({ variables: values });
        setLoading(false);
        setSent(true);
        console.log(values);
      })}
    >
      <Flex>
        <Wrapper>
          <InputTooltip
            inputLabel={"Imię: "}
            variant={"text"}
            flexGrow={1}
            register={register("name", {
              required: "To pole jest wymagane.",
            })}
            error={errors.name && errors.name.message}
          />
        </Wrapper>
        <Wrapper>
          <InputTooltip
            inputLabel={"Email: "}
            variant={"text"}
            flexGrow={1}
            error={errors.email && errors.email.message}
            register={register("email", {
              required: "To pole jest wymagane.",
            })}
          />
        </Wrapper>

        <Wrapper>
          <InputTooltip
            inputLabel={"Telefon: "}
            variant={"text"}
            flexGrow={1}
            register={register("phone", {
              required: "To pole jest wymagane.",
            })}
            error={errors.phone && errors.phone.message}
          />
        </Wrapper>
        <Wrapper $width={"100%"}>
          <InputTooltip
            inputLabel={"Wiadomość: "}
            variant={"textarea"}
            fullsize={true}
            register={register("message", {
              required: "To pole jest wymagane.",
            })}
            error={errors.message && errors.message.message}
          />
        </Wrapper>
        <span style={{ marginLeft: "auto" }}>
          <Button type={"submit"}>Wyślij</Button>
        </span>
      </Flex>
    </form>
  );
};

export default ContactForm;
