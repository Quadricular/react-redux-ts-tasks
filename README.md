# React Redux Typescript Tasks App

![CLIENT_SCREENSHOT](https://user-images.githubusercontent.com/34385962/138495939-d7472060-0965-4b47-897f-50084176471d.png)

[Link to demo](https://tasks-client-node.azurewebsites.net/tasks)

## **Quick Start**

Requirements:

- NodeJS 10+
- Docker
- Make (You can use a Mac, Linux or WSL in Windows) for build and deploy

Install dependencies if not using Docker:

`npm install`

You might notice `"preinstall": "npx npm-force-resolutions",` is running before the npm install, however it's necessary in order to patch the vulnerable outdated dependencies from the cypress unit tests modules

## **Running development server**

Run vite dev server, it will work regardless of Docker since development uses a mocking API

`npm run dev`

or

`make start`

Visit [http://localhost:3000/](http://localhost:3000/).

## **Running production server**

`make prod`

it's important to set the API host which could be a local instance of the [API repo](https://github.com/danielmgzzg/node-express-ts-tasks) or the deployed one in azure which was used when building the app.

```
// .env

VITE_API_HOST=http://localhost:5000/api
```

Visit [http://localhost:3000/](http://localhost:3000/).

## **Testing**

To run tests with the Cypress Test Runner, use:

To show in the terminal

`make unit-test` or `npm run test`

To open a new Window, remember to open X-Server

`make unit-test-open` or `npm run test:open`

To see the code coverage after `npm run test`

`make nyc` or `npx nyc report --reporter=text-summary`

`make nyc-text` or `npx nyc report --reporter=text`

## **Deploying to Azure**

### **Prerequisites:**

- Create a free Azure account at [https://azure.microsoft.com/free](https://azure.microsoft.com/free)
- Have Azure CLI installed in Linux environment either Mac or PC with WSL 2
- Login with Azure CLI
- Have Container Registry
- Docker
- [Have infrastructure setup in Azure](https://github.com/danielmgzzg/node-express-ts-tasks#infrastructure)

Configure this app environment variables with your project-specific details for Make file:

```
// .env

REGISTRY_NAME=
RESOURCE_GROUP=
REGISTRY_IMAGE=
REGISTRY_TAG=
APP_SERVICE_PLAN=
APP_NAME=
```

### **Build and publish the container to Azure Container Registry:**

`make acr-build`

Since Azure Container Registry builds sometimes pop up some errors, it's also possible to build with Docker locally and publish to your registry using

`make build`

`make publish`

## **Stack**

- Vite App
- Typescript
- React Redux
- React Router
- Redux Saga
- Redux Devtools Extension for Chrome
- Cypress Unit Testing
- React Testing Library
- SASS
- TailwindCSS
