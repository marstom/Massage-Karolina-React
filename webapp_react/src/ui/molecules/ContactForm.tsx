import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputTooltip from "./InputTooltip";
import styled from "styled-components";
import { colors } from "../palette";
import Spinner from "../atoms/spinner/Spinner";
import Button from "../atoms/Button";

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

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
const ContactForm: React.FC<{
  createMessageMutation: CallableFunction;
}> = ({ createMessageMutation }) => {
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  if (loading) {
    return <Spinner />;
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
        await createMessageMutation({ variables: values });
        setLoading(false);
        setSent(true);
      })}
    >
      <Flex>
        <Wrapper>
          <InputTooltip
            inputLabel={"Imię: "}
            variant={"text"}
            flexGrow={1}
            register={register("name", {
              required: "Podaj imię.",
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
              required: "Podaj email.",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email jest nieprawidłowy.",
              },
            })}
          />
        </Wrapper>

        <Wrapper>
          <InputTooltip
            inputLabel={"Telefon: "}
            variant={"text"}
            flexGrow={1}
            register={register("phone", {
              required: "Podaj telefon kontaktowy.",
            })}
            error={errors.phone && errors.phone.message}
          />
        </Wrapper>
        <Wrapper $width={"100%"}>
          <InputTooltip
            inputLabel={"Wiadomość: "}
            variant={"textarea"}
            fullsize={true}
            register={register("message", {})}
            error={errors.message && errors.message.message}
          />
        </Wrapper>
        <span style={{ marginLeft: "auto" }}>
          <Button className={"w-[12rem] h-12 mr-4"} type={"submit"}>
            Wyślij
          </Button>
        </span>
      </Flex>
    </form>
  );
};

export default ContactForm;
