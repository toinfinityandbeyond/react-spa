# React SPA

This boilerplate belongs to [Lucas Bassetti](http://lucasbassetti.com.br)

## Components

- [Babel](https://babeljs.io) for ES6 support.
- [Chai](http://chaijs.com/) as BDD / TDD assertion library.
- [ESlint](http://eslint.org) for ES6 linting using Airbnb's JS style guide.
- [Mocha](https://mochajs.org/) as test framework.
- [Nyc](https://github.com/istanbuljs/nyc) for test coverage
- [React](https://facebook.github.io/react/) as front-end view library.
- [Webpack](https://webpack.github.io) for bundling of JavaScript modules.

## Getting Started

Run the following commands in your terminal

```bash
git clone https://github.com/LucasBassetti/react-spa-boilerplate.git
cd react-spa-boilerplate
npm install
npm start
```

Then open [http://localhost:8080/](http://localhost:8080/) on your web browser.

### Scripts

1. Run `npm test` for simple test.
2. Run `npm run lint` for ensure your code is syntactically correct.
3. Run `npm run test:watch` for watch tests.
4. Run `npm run test:coverage` for test coverage. This will generate a `coverage` folder. Open the `index.html` file in this folder to check the results.
5. Run `npm run build` for deployment build.
6. Webpack dev server with automatic reloading. Start with: `npm start`.

## Deploying

For deployment, run `npm run build` and upload `build/` to your server.

## License

MIT · [Lucas Bassetti](http://lucasbassetti.com.br)
