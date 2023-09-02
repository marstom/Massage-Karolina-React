import React from "react";
import { Content, ContentWithMargin } from "../../atoms/Content";
import { useSessionQuery } from "../../../graphql/queries/sessions";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

const Session: React.FC<{}> = () => {
  const { id } = useParams();
  const { loading, error, data } = useSessionQuery(id);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Loading data...</p>;
  if (error) return <p>Error :( mmm</p>;

  return (
    <ContentWithMargin>
      {parse(data.session.data.attributes.body)}
    </ContentWithMargin>
  );
};

export default Session;
