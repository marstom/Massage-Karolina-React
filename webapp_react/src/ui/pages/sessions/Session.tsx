import React from "react";
import { ContentWithMargin } from "../../atoms/Content";
import { useSessionQuery } from "../../../graphql/queries/sessions";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import Spinner from "../../atoms/spinner/Spinner";
import Error from "../../atoms/Error";

const Session: React.FC<{}> = () => {
  const { id } = useParams();
  const { loading, error, data } = useSessionQuery(id);

  if (loading) return <Spinner />;
  if (!data) return <Spinner />;
  if (error) return <Error />;

  return (
    <ContentWithMargin>
      {parse(data.session.data.attributes.body)}
    </ContentWithMargin>
  );
};

export default Session;
