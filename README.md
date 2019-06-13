<p align="center">
  <a href="https://muskoka-district-rentals-git-develop.brettm12345.now.sh">
    <img alt="Muskoka District Rentals" src="src/images/muskoka-icon.png?raw=true" width="200" />
  </a>
</p>
<h1 align="center">
  Muskoka District Rentals
</h1>

[![Maintainability](https://api.codeclimate.com/v1/badges/286e7758d65155f310fc/maintainability)](https://codeclimate.com/repos/5ccc050e4ee755025800767b/maintainability)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1877205d-5914-487e-a745-c2d0a559e5db/deploy-status)](https://app.netlify.com/sites/vigorous-perlman-cc9bb2/deploys)

Muskoka District Rentals is a Progressive Web Application for renting properties in the  Muskoka district of Canada.

## Requirements

Muskoka District Rentals is built using the [GatsbyJS](https://www.gatsbyjs.org) framework, and uses [Zeit Now](https://zeit.co/now) for deployments.

The following components are required to run the project (tested on *Arch Linux*):

1. [NodeJS](https://panodejs.org/) (version ~11.14.0). A javascript runtime built on Chrome's V8 JavaScript engine. (How to verify? Run `node --version`.). If you have a different version use [nvm](https://github.com/nvm-sh/nvm) to install version 11.14.0.

## Running Muskoka District Rentals

1. Clone the GitHub repository: `git clone git@github.com:the-mmm-agency/muskoka-district-rentals`.
2. Switch to the project directory: `cd muskoka-district-rentals`.
3. Run `npm install` to install dependencies.
4. Start Muskoka with `npm start`.
5. Muskoka should now be running at `http://localhost:8000`.

### Accessing the graphql api

Gatsby exposes the [GraphQL](https://graphql.org) playground at `http://localhost:8000/___graphql`. For more information refer to the [GatsbyJS Docs](https://www.gatsbyjs.org/docs/graphql/).

### Running with ssl

If you wish to run Muskoka with ssl enabled use `npm run develop:ssl` Gatsby takes care of generating the certificates.

## Testing

To verify that everything is working properly you can run the project's tests.

## Setup

Install the projects dependencies with `npm install`.

## Unit tests

Unit testing done with [Jest](https://jestjs.io).

### Setup

Build the project with `npm run build`.

## Running tests

Unit tests can be run with `npm test`.

- **If you wish to run the tests in watch mode** replace `npm test` with `npm run test:watch`.

## Writing tests

All of the tests in the [test](test/) correspond to the file in the [src](src/) directory with the `.spec` extension added so for example [src/components/button.js](src/components/button.js) becomes [test/components/button.spec.js](test/components/button.spec.js). All mocks are stored in the [test/__mocks__/](test/__mocks__) directory and any files used in setting up Jest are stored in [test/__setup__/](test/__setup__/).

## Integration tests

Integration testing done with [Cypress](https://www.cypress.io).

### Running tests

- To start a development server and open a Cypress window with screenshot validating and hot reloading use `npm run test:e2e:dev`.
- To start a development server and run cypress tests in the command line use `npm run test:e2e:run`.

### Writing tests

Integration tests are stored in the [cypress/e2e](cypress/e2e) directory.

## Other Scripts

Other npm scripts not mentioned above.

- `npm run format` formats the code with [Prettier](https://prettier.io/).
- `npm run lint` runs code linting with [Eslint](https://eslint.org).
- `npm run lint:fix` runs code linting with [Eslint](https://eslint.org). Attempting to automatically fix issues.
- `npm run lint:styles` lints [styled-components](https://styled-components.com) templates with [stylelint](https://stylelint.io).
- `npm run lint:styles:fix` lints [styled-components](https://styled-components.com) templates with [stylelint](https://stylelint.io). Attempting to automatically fix issues.
- `npm run serve` serves a static build built with `npm run build`.
