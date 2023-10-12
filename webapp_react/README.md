# Strona Karoliny

Jest to storona wizytówka.

Funkcjonalności:

- foto w tle statyczny content
- ładny pasek menu
- blog/wipsy

Cechy:

- będzie od zera
- na google firebase będzie bazować

## Setup

```shell

npm run storybook # storybook
npm start         # apka
npm t             # testy

```

Utwórz `.env.local`
Utwórz `.env.production`
```text
REACT_APP_BASE_BACKEND_URL=https://api.test.karolina.mt-software.info
REACT_APP_MSW_MOCK=realApi
```



```text
REACT_APP_BASE_BACKEND_URL=http://localhost:1337
REACT_APP_MSW_MOCK=mock
```

## Kolorki designy

- [Propozycja koloru](https://colorhunt.co/palette/222831393e4600adb5eeeeee)
- [Ikonki](https://www.flaticon.com/search?word=instagram)

## Biblioteki i techstack

- StyledComponents alternatywa dla sass i css, lubię:

  - [Styled w typeScripcie](https://fettblog.eu/typescript-react/styles/)
  - [Oficjalna dokumentacja](https://styled-components.com/docs/basics#adapting-based-on-props)
  - [Jak zrobić responsywność w styled components?](https://medium.com/styled-components/responsive-styled-components-in-3-minutes-ae3b58cca57b)
  - [@media screen w css styled](https://medium.com/styled-components/how-to-create-responsive-ui-with-styled-components-c6b71a3ce172)

- Testowanie JEST'em

  - [Mock na MSW graphql](https://mswjs.io/docs/getting-started/mocks/graphql-api)

- Mocki MSW
  - Aby utworzyć service-worker

```sh
npx msw init public/ --save
```

## Utilities

Strona generator sinusoid do obrazków
https://css-generators.com/wavy-shapes/

## Doker

- certifikaty [Poradnik digital ocean](https://www.digitalocean.com/community/tutorials/how-to-secure-a-containerized-node-js-application-with-nginx-let-s-encrypt-and-docker-compose)

# Inne

## TODO

- usuń fale
- dodaj MSW testy api i apollo testy

## WebStorm

- rsc - react template function component


### Learning:

- Spędziłem nad tym 2h..... Dlaczego useState może być problematyczne w funkcji asynchronicznej [czytaj tu!](https://javascript.plainenglish.io/why-you-shouldnt-always-use-usestate-658994693018)
- [refetching data - apollo](https://www.apollographql.com/docs/react/data/refetching/)


## React:
- [Kolejność .env plików](https://create-react-app.dev/docs/adding-custom-environment-variables/)


## Tailwind

- Jakie są domyślne style znajdę tutaj: https://tailwindcss.com/docs/preflight
- Playground https://play.tailwindcss.com/