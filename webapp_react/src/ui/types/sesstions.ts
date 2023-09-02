export type SessionType = "dotyk" | "uwalnianie";

export type SessionSingle = {
  id: string;
  attributes: {
    type: SessionType;
    urlName: string;
    menuEntryText: string;
  };
};

export type SessionsListResponse = {
  sessions: {
    data: SessionSingle[];
  };
};

export type SessionDetails = {
  id: string;
  attributes: {
    body: string;
  };
};

export type SessionDetailsResponse = {
  session: {
    data: SessionDetails;
  };
};
