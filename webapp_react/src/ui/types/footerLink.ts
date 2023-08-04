type Link = {
  name: string;
  icon: {
    data: {
      id: string;
      attributes: {
        name: string;
        url: string;
      };
    };
  };
  url: string;
  positionFromRight: number;
};

type FooterLink = {
  data: {
    id: string;
    attributes: {
      link: Link[];
    };
  };
};

type Data = {
  footerLink: FooterLink;
};

type FooterLinkApiResponse = {
  data: Data;
};

export default Data;
