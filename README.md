# LastApp-testCode

This repository contains the test code for the [Last.App](https://www.last.app/).

## Deployment

The application is deployed on [Vercel](https://vercel.com) and can be accessed at the following URL: [https://last-app-test-code-git-master-masedri.vercel.app/](https://last-app-test-code-git-master-masedri.vercel.app/).

## API

### Endpoint

The application fetches data from the following API endpoint: [https://api.last.app/frontend-interview/](https://api.last.app/frontend-interview/).

### Geolocation

This project utilizes the browser's Geolocation API along with the Haversine formula to calculate the distance between two geographical points. The result is displayed in the user interface using kilometer markers.

Please note that the Haversine formula assumes a perfect spherical Earth and may have slight inaccuracies in real-world scenarios.

## Technologies Used

- **Nuxt.js 3**: JavaScript framework for building client-side and SSR web applications.
- **Vue.js**: JavaScript library for building user interfaces.
- **TypeScript**: Programming language for adding static typing to JavaScript.
- **Tailwind CSS**: CSS framework for styling user interfaces.

## Development Tools

- **Prettier**: Code formatting tool.
- **ESLint**: JavaScript/TypeScript linter.
- **Commitlint**: Tool for enforcing commit message conventions.
- **Husky**: Pre-commit hook tool.
- **pnpm**: Package manager for installing and managing dependencies.


## Libraries and Key Components

- **UILast**: Custom component library created specifically for this project. It provides reusable and custom components that help build the user interface more efficiently.
- **Teleport**: Used for creating modals and managing their placement within the DOM.
- **Icon Factory**: A factory for managing icons dynamically and asynchronously.

## Patterns and Techniques Used

- Server-Side Rendering (SSR)
- Component-based architecture
- Repository Pattern
- Return Early Pattern

## Setup Scripts

- `"build": "nuxt build"`: Builds the application for production.
- `"dev": "nuxt dev"`: Starts the development server.
- `"generate": "nuxt generate"`: Generates the static files for deployment

## Potential Improvements

Here are some potential improvements and suggestions for enhancing the application:

- **Pinia**: Consider using Pinia for better state management, as it provides a more robust and scalable solution.
- **Transition API**: Explore utilizing the new Transition API in Vue.js for creating smooth and interactive animations in the application.
- **Client-side State Persistence**: Implement client-side state persistence to avoid unnecessary API calls and improve overall performance.
- **Continuous Integration (CI) Flow**: Set up a CI flow to automate build, test, and deployment processes, ensuring code quality and reliability.
- **Testing with ViteTest and Cypress**: Integrate ViteTest for unit testing and Cypress for end-to-end testing to ensure the functionality and stability of the application.

- ## Finals Thoughts

I decided to use Nuxt.js 3 because has improved in many aspects since Nuxt 2.

- **TypeScript Integration**: The seamless integration of TypeScript in Nuxt 3 allows for better type checking and enhanced developer productivity.
- **Composition API**: The use of the Composition API provides a more intuitive and flexible approach to writing component logic, making code organization and reusability more efficient.
- **Modularity System**: The module system in Nuxt 3 enables easy integration of third-party libraries and simplifies the management of project dependencies.
- **Routing**: The routing capabilities of Nuxt 3 make it straightforward to define and navigate between pages, improving the overall user experience.
- **Autoimport**: The autoimport feature in Nuxt 3 automatically imports components and modules, reducing the need for manual imports and saving development time.
  
However, I find the default folder structure limiting for larger projects. I believe adopting a feature-scaffolding approach would improve maintainability, scalability, and separation of concerns.

Marco.

