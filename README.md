# Plop React webpack generator
[Plop][Plop] generator for UI apps with [React](https://facebook.github.io/react/) coding in ES6.

## Requirements

The first requirement is to have installed [Node](https://nodejs.org/en/download/) page.

Then install [Plop][Plop] globally `$ npm install -g plop`.

## Usage

Create a folder for your project: `$ mkdir my-project`.

First, you should install the generator: `$ npm install plop-react-webpack`

Create in the root of your project a `plopfile.js` with this content:
```javsacript
module.exports = require('plop-react-webpack');
```

In the terminal, type: `plop` and enjoy it.


## Provided generator

The generator provides a fresh starting point for a React project:

- [NPM](https://www.npmjs.com/) as a package manager and task runner.
- [Babel](https://babeljs.io/) as a transpiler. This project is **based in ES6**.
- [Webpack](https://webpack.github.io/) as a module bundler.
- [React](https://facebook.github.io/react/) as a JavaScript library for build UI's (user interfaces).

### Commands available:

| Command | Action                                |
|---------|---------------------------------------|
| dev     | Run the [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) with [hot module replacement](https://webpack.github.io/docs/hot-module-replacement.html). |
| build   | Run eslint task, then run webpack and build the bundle in `/public` (html included). |

To run a command: `$ npm run <command>`.

[Plop]: https://github.com/amwmedia/plop