import React, { InputHTMLAttributes } from "react";
import Tooltip from "../atoms/Tooltip";
import styled from "styled-components";
import { colors } from "../palette";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

const Label = styled.label`
  align-self: center;
`;

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Input = styled.input`
  font-size: 100%;
  width: 100%;
  background: ${colors.primary};
  color: ${colors.textColor};
  flex-grow: 1;
  margin-top: 5px;

  border-style: solid;
  border-color: ${colors.lightBlue};
  padding: 0.5em;
`;

const Wrapper = styled.span<{ $flexgrow?: number; $fullsize?: boolean }>`
  flex-grow: ${(props) => props.$flexgrow};
  flex-basis: ${(props) => (props.$fullsize ? "100%" : null)};
  width: ${(props) => (props.$fullsize ? "100%" : null)};
`;
const TextArea = styled.textarea`
  font-size: 100%;
  min-height: 5em;
  background: ${colors.primary};
  color: ${colors.textColor};
  border-style: solid;
  border-color: ${colors.lightBlue};
  padding: 0.5em;
  min-width: 100%;
  width: 100%;
`;
type Props = {
  label: string;
  variant: "text" | "textarea";
  flexGrow: number;
  register: UseFormRegister<FieldValues>;
  fullsize?: boolean;
  error?: string;
};

const InputTooltip: React.FC<Props> = ({
  label,
  variant,
  flexGrow,
  register,
  fullsize,
  error,
  ...props
}) => {
  return (
    <Wrapper $fullsize={fullsize} $flexgrow={flexGrow ? 1 : flexGrow}>
      <Label>{label}</Label>
      <Tooltip direction={"top"} content={error}>
        {variant === "text" && <Input type={"text"} {...register}></Input>}
        {variant === "textarea" && <TextArea {...register}></TextArea>}
      </Tooltip>
    </Wrapper>
  );
};

export default InputTooltip;
