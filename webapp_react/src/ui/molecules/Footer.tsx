// 1fr -1fractional rate
import React from "react";
import { colors, otherColors } from "ui/palette";

import styled from "styled-components";
import FooterLinkApiResponse from "../types/footerLink";
import { useFooterLinks } from "../../graphql/queries/footerLinks";
import Spinner from "../atoms/spinner/Spinner";
import Error from "../atoms/Error";

const Footer_ = styled.div`
  background-color: ${otherColors.black};
  color: ${colors.lightBlue};
  border-radius: 0.5px;
  height: 70px;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  margin-bottom: 0px;
  margin-top: auto;
`;

const FlexEl = styled.a<{ $gridCol: string }>`
  text-align: center;
  align-self: center;
  grid-column: ${(props) => props.$gridCol};
`;
const FlexElIco = styled(FlexEl)<{ $gridCol: number }>`
  grid-column: ${(props) => {
    return 17 - props.$gridCol;
  }};
`;

const Icon = styled.img`
  max-width: 30px;
  -webkit-filter: invert(1);
`;

type Props = {};
export const Footer = (props: Props) => {
  const { loading, error, data } = useFooterLinks();
  const baseUrl = process.env.REACT_APP_BASE_BACKEND_URL;

  if (loading) return <Spinner />;
  if (error) return <Error />;

  const sortedData = (data: FooterLinkApiResponse) => {
    let linkData = [...data!.footerLink.data.attributes.link]; // copy

    linkData.sort((a, b) => {
      if (a.positionFromRight > b.positionFromRight) {
        return -1;
      }
      if (a.positionFromRight < b.positionFromRight) {
        return 1;
      } else {
        return 0;
      }
    });
    return linkData;
  };
  return (
    <Footer_>
      {sortedData(data!).map((link) => (
        <FlexElIco
          key={link.name}
          href={link.url}
          $gridCol={link.positionFromRight}
        >
          <Icon src={baseUrl + link.icon.data.attributes.url}></Icon>
        </FlexElIco>
      ))}
    </Footer_>
  );
};
