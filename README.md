# Daycare App

A React-based project bootstrapped with Turborepo and Vite.

## Prerequisites

-   Node.js (v18.x or later)
-   pnpm (v6.x or later)

## Getting Started

Follow these steps to set up and run the project locally.

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/sterjoski/hire-me.git
    cd hire-me
    ```

2. **Install dependencies:**

    Ensure you have pnpm installed globally. If not, install it using:

    ```sh
    npm install -g pnpm
    ```

    Then, install the project dependencies:

    ```sh
    pnpm install
    ```

3. **Setup Environment Variables:**

    Create a `.env` file in the `apps/daycare` directory by copying the contents of `.env.example` or by renaming `.env.example` to `.env`:

    ```sh
    cp .env.example .env
    ```

### Running the Application

To start the application in development mode, run:

```sh
pnpm dev
```

## Project Structure

-   `apps/daycare`: The main application bootstrapped with Vite.
-   -   `app`: Core features.
-   -   `library/hooks`: React hooks, in this case reusable react-query hooks.
-   -   `library/models`: Models used for tidying up the data.
-   -   `library/services`: Domain-separated HTTP requests with model mapping
-   `packages/eslint-config`: Shared ESLint configurations.
-   `packages/http-client`: Axios wrapper for HTTP requests.
-   `packages/typescript-config`: Shared TypeScript configuration files.
-   `packages/ui`: Reusable UI components.
