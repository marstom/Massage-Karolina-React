export const postResponse = {
  post: {
    data: {
      id: "1",
      attributes: {
        title: "Tantra",
        shortDescription:
          "<h1>Co to jest masaż tantryczny?&nbsp;</h1><p>Masaż tantryczny jest rodzajem pracy z dotykiem, której idea zaczerpnięta została ze starożytnej tradycji hinduistycznej i buddyjskiej.&nbsp;</p>",
        body:
          "" +
          "<h1>Co to jest masaż tantryczny?&nbsp;</h1>" +
          "<p>Masaż tantryczny jest rodzajem pracy z dotykiem</p>" +
          "<p>, której idea zaczerpnięta została ze starożytnej tradycji hinduistycznej i buddyjskiej. Podczas zabiegu masowaniu podlega całe ciało, zazwyczaj ze szczególnym uwzględnieniem miejsc intymnych.&nbsp;</p>" +
          '<p><img src="http://localhost:1337/uploads/lomi_lomi1_a4467600f6.jpg" alt="lomi_lomi1.jpg" srcset="http://localhost:1337/uploads/thumbnail_lomi_lomi1_a4467600f6.jpg 235w," sizes="100vw" width="235px"></p>' +
          '<p><img src="http://localhost:1337/uploads/image_2c5fe63456.png" alt="image.png" srcset="http://localhost:1337/uploads/thumbnail_image_2c5fe63456.png 237w," sizes="100vw" width="237px">Co często podkreślane przez instruktorów masażu tantrycznego, nie jest on tym samym co masaż erotyczny, którego celem jest osiągnięcie orgazmu przez stymulację narządów płciowych. W masażu tantrycznym chodzi natomiast przede wszystkim o rozwój – m.in. w kontekście umiejętności odczuwania zmysłowego i emocjonalnego, koncentrowania się na chwili obecnej, przestawiania się na bycie zamiast działania.</p>',
        post_comments: {
          data: [
            {
              id: "3",
              attributes: {
                comment: "Komentarz",
                author: "Tomek",
                like: null,
                createdAt: "2023-08-14T11:12:26.025Z",
                __typename: "PostComment",
              },
              __typename: "PostCommentEntity",
            },
            {
              id: "2",
              attributes: {
                comment: "fee",
                author: "fee",
                like: null,
                createdAt: "2023-08-14T07:33:57.254Z",
                __typename: "PostComment",
              },
              __typename: "PostCommentEntity",
            },
            {
              id: "1",
              attributes: {
                comment: "Nice post",
                author: "Test author",
                like: null,
                createdAt: "2023-08-10T09:46:58.318Z",
                __typename: "PostComment",
              },
              __typename: "PostCommentEntity",
            },
          ],
          __typename: "PostCommentRelationResponseCollection",
        },
        __typename: "Post",
      },
      __typename: "PostEntity",
    },
    __typename: "PostEntityResponse",
  },
};
