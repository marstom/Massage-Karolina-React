import React from "react";
import Tooltip from "../atoms/Tooltip";
import styled from "styled-components";
import { colors } from "../palette";
import { UseFormRegisterReturn } from "react-hook-form";

const Label = styled.label`
  align-self: center;
`;

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
  inputLabel: string;
  variant: "text" | "textarea";
  register: UseFormRegisterReturn;
  flexGrow?: number;
  fullsize?: boolean;
  error?: string;
};

function InputTooltip({
  inputLabel,
  variant,
  flexGrow,
  register,
  fullsize,
  error,
  ...props
}: Props) {
  return (
    <Wrapper $fullsize={fullsize} $flexgrow={flexGrow ? 1 : flexGrow}>
      <Label>{inputLabel}</Label>
      <Tooltip direction={"top"} content={error}>
        {variant === "text" && (
          <Input
            className="border-2 rounded"
            type={"text"}
            {...register}
          ></Input>
        )}
        {variant === "textarea" && (
          <TextArea className="border-2 rounded" {...register}></TextArea>
        )}
      </Tooltip>
    </Wrapper>
  );
}

export default InputTooltip;
