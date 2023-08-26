import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { DropdownMenu } from "../DropdownMenu";

type LinkMockProps = { to: string; children: React.ReactNode };
export const Link: React.FC<LinkMockProps> = ({ to, children }) => (
  <a href={to}>{children}</a>
);

// Mock react-router-dom Link component
jest.mock("react-router-dom", () => ({
  Link: ({ to, children }: LinkMockProps) => <a href={to}>{children}</a>,
}));

describe("DropdownMenu", () => {
  const links = [
    { to: "/link1", text: "Link 1" },
    { to: "/link2", text: "Link 2" },
  ];

  it("renders children", () => {
    const { getByText } = render(
      <DropdownMenu links={links}>
        <span>Dropdown Trigger</span>
      </DropdownMenu>
    );

    expect(getByText("Dropdown Trigger")).toBeInTheDocument();
  });

  it("shows dropdown on mouse enter", () => {
    const { getByText, queryByText } = render(
      <DropdownMenu links={links}>
        <span>Dropdown Trigger</span>
      </DropdownMenu>
    );

    const dropdownTrigger = getByText("Dropdown Trigger");
    fireEvent.mouseEnter(dropdownTrigger);

    expect(getByText("Link 1")).toBeInTheDocument();
    expect(getByText("Link 2")).toBeInTheDocument();
  });

  it("hides dropdown on mouse leave", () => {
    const { getByText, queryByText } = render(
      <DropdownMenu links={links}>
        <span>Dropdown Trigger</span>
      </DropdownMenu>
    );

    const dropdownTrigger = getByText("Dropdown Trigger");
    fireEvent.mouseEnter(dropdownTrigger);
    fireEvent.mouseLeave(dropdownTrigger);

    expect(queryByText("Link 1")).toBeNull();
    expect(queryByText("Link 2")).toBeNull();
  });
});
