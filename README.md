# Example of Flagship implementation with React Router

[Example documentation](https://docs.developers.flagship.io/docs/react-router-mode-framework-remixrun-integration-with-flagship#/)

## Getting Started

Install package

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Project Structure

This example demonstrates how to integrate Flagship feature flagging with React Router v7+. Key files include:

- root.tsx - Main layout with Flagship provider setup
- flagship.ts - SDK initialization helpers
- routes - Application routes
- components - Reusable components using Flagship flags

## Features Demonstrated

- Initializing Flagship SDK in a React Router application
- Pre-fetching flags with route loaders
- Using flag values in components
- Sending analytics hits
- Handling client-side navigation with flags

## Learn More

To learn more about Flagship and React Router, check out the following resources:

- [Flagship React SDK Documentation](https://docs.developers.flagship.io/docs/react-sdk)
- [React Router Documentation](https://reactrouter.com/en/main)