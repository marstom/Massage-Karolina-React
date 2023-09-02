export type AboutMe = {
  id: string;
  attributes: {
    body: string;
  };
};

export type AboutMeResponse = {
  aboutMe: {
    data: AboutMe;
  };
};
