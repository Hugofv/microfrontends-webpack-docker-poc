<h1 align="center">
  Webpack 5 Module Federations Plugins Microfrontends POC
</h1>

This is a Proof of Concept of the microfrontends architechture implemented with the new Webpack 5 Module Federations Plugins

## Tech Stack
-  [ReactJS](https://github.com/facebook/react)
-  [React Router](https://github.com/ReactTraining/react-router)
-  [Webpack 5](https://webpack.js.org/)

## How to run

1. Clone the repo;
2. Use `yarn install` in each project folder (module-1, module-2 and orchestrator);
3. Start all the projects using `yarn start` in each project folder;
4. Open [http://localhost:9000](http://localhost:9000) to see the app running in dev mode.

> If you change Module 1 or Module 2 page contents and do a refresh in Orchestrator page, you will see the page will change with the new modules content.

## Next steps
- [ ] Make a more complex example
- [ ] Add bidirectional code sharing (from Orchestrator to modules too)
- [ ] Dockerize
- [ ] Deploy