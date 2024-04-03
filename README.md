# Recruitment task for Mediport

I've created an asynchronous tags table with the ability to preview the component in Storybook.

## Commands to start project

To install packages:

```bash
npm ci
```

To open project:

```bash
npm start
```

To open Storybook:

```bash
npm run storybook
```

## Technologies

 - React,
 - Vite,
 - TypeScript,
 - Material UI,
 - ReactQuery,
 - Storybook,
 - Eslint

## Technical decisions

 - **React Query:** I chose this tool because it simplifies managing API queries with its caching abilities. It can replace the traditional store by remembering the responses from the queries and not re-fetching the same data, which eliminates the need to maintain it.

 - **MUI:** This UI toolkit was selected for its maturity and thoughtful design among the available options. Its support for accessibility and my previous experience with MUI allowed me to quickly proceed with the task.

 - **Component:** It was designed to avoid sending API queries in Storybook. I decided it was unnecessary and better to use Storybook as documentation for components, without the need for real data.

## Required version

node version: 18+, 20+
