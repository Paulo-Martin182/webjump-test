
<h1 align="center">
    <a href="https://webjump.com.br/">🔗 WEBJUMP</a>
</h1>
<p align="center">🚀 Teste para contratação webjump </p

Um projeto [Next.js](https://nextjs.org/) para ser usado como teste da empresa  [WEBJUMP ](https://webjump.com.br/).
## Oque foi utilizado?

Este projeto usa muitas coisas como:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

<h4 align="center">
	🚧  WEBJUMP 🚀 Em construção...  🚧
</h4>

## Sobre o projeto

    Primeiramente para a busca dos dados, estou utilizando a renderização statica(SSG) de alguns dados como a lista
de categorias, e para a busca de dados como os produtos estou utilizando Renderização do Lado do Servidor (SSR).

    No fetch do menu recebo um path do server, e coloco como link e para renderizar os itens de cada categoria
estou utilizando paginas dinamicas baseadas no ID do path menu, e com esse ID eu consigo buscar os itens da categoria

    Na lista de produtos podem ser ordenadas de varias formas, pode ser mostradas como LIST ou GRID.

## OBS

Eu não consegui seguir um bom gitflow, adicionar storybook em todos os componentes nem test de renderização com JEST por falta de tempo,
pois realizei o teste no ultimo dia :c por problemas pessoais.



### Features

- [x] Husky - Lint
- [x] Generators
- [x] Styles
- [ ] Jest
- [ ] Storybook
- [ ] Cypress

## Começando

Primeiro, garanta que o backend esteja rodando na porta localhost:8888 e então rode o servidor:

```bash
npm install
# or

yarn

>>>>>>>>>>>>>>>>>>>>>>>>

npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook


## Editando com Storybook

-- neste projeto fiz apenas um card de produto com meu proprio estilo e fiz algumas opções, apenas para demonstração
aqui esta uma demonstração em imagem >

###  Voce pode ir alterando

- [x] Titulo
- [x] Texto do Botão
- [x] Cor das opções de cores
- [x] Cor do circulo background
- [x] Titulo da opção

![alt text](https://github.com/Paulo-Martin182/webjump-test/blob/master/public/storyex.png)


## Saber mais

Para saber mais sobre Next.js, dê uma olhada nos seguintes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Você pode verificar [the Next.js GitHub repository](https://github.com/vercel/next.js/) - seus comentários e contribuições são bem-vindos!
