import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../palette";

const Button = styled.button`
  background: ${colors.lightBlue};
  color: ${colors.textColorLight};
`;

type Props = {
  children: ReactNode;
  type: "submit" | undefined;
  className?: string;
};

const ButtonComponent: React.FC<Props> = ({ children, type, className }) => {
  return (
    <Button
      className={`rounded hover:bg-hovered-button focus:bg-hold-button ${className}`}
      type={type}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
