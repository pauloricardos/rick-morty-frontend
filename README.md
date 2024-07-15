# Rick and Morty Characters

A web application that displays characters from the Rick and Morty TV show.

This application is built with:

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/) 
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)

## How to run the application

1. Install the dependencies by running `yarn`. Be aware to use a Node version >= 18. If you are using [nvm](https://github.com/nvm-sh/nvm), you can run `nvm use` to switch to the correct version.

2. Add a `.env` or `.env.development` file on the root of the project with the following content:

```
VITE_API_URL=https://rickandmortyapi.com/graphql
```

3. Run the application by running `yarn dev`

4. Open your browser and go to `http://localhost:5173`
