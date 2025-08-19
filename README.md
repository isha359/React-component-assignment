# React Component Library

This project is a React component library built as part of a front-end development assignment. It includes two main components: a flexible `InputField` and a powerful `DataTable`. The library is built with React, TypeScript, and styled with TailwindCSS. Component documentation and interactive previews are provided by Storybook.

## Approach

The development approach focused on creating scalable, reusable, and well-documented components. Key aspects of the approach include:

- **Modern Tooling**: Vite was used for a fast and modern development experience.
- **Props-Driven Styling**: `class-variance-authority` was used to manage component variants and states, keeping the JSX clean and declarative.
- **TypeScript Generics**: The `DataTable` component uses generics to be adaptable to any data structure.
- **Scalable Folder Structure**: Each component has its own directory containing its logic, stories, and tests, making the project easy to maintain and scale.
- **Interactive Documentation**: Storybook is used to provide live, interactive documentation for each component and its variants.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or higher recommended)
- npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run storybook`

Runs the Storybook server.
Open [http://localhost:6006](http://localhost:6006) to view the component stories.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `dist` folder.
