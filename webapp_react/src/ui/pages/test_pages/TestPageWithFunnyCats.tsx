import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const ContentSpecial = styled.div`
  padding-top: 110px;
  .image-style-align-left {
    color: rgb(0, 0, 255);
    text-align: left;
  }
  .image-style-block-align-right {
    text-align: right;
    opacity: 10%;
  }
`;

const query = gql`
  query Asdf($id: ID!) {
    asdf(id: $id) {
      data {
        id
        attributes {
          toolbarVersion
          toolbarBaloonVersion
          BlockBaloonVersion
          MarkdownVersion
        }
      }
    }
  }
`;

type Resp = {
  asdf: {
    data: {
      id: string;
      attributes: {
        toolbarVersion: string;
        toolbarBaloonVersion: string;
        BlockBaloonVersion: string;
        MarkdownVersion: string;
      };
    };
  };
};

export const TestPageWithFunnyCats: React.FC<{}> = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<Resp>(query, {
    variables: { id: id },
  });

  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( mmm</p>;
  return (
    <ContentSpecial>
      FullPostPage
      <div
        dangerouslySetInnerHTML={createMarkup(
          data!.asdf.data.attributes.toolbarVersion
        )}
      />
      {/* <ReactMarkdown>
        {data!.asdf.data.attributes.MarkdownVersion}
        </ReactMarkdown> */}
    </ContentSpecial>
  );
};
