# Guide

### Backend
This project is using Next.js as a frontend only - it's built to integrate with a separate REST API. Here's the backend template I created that matches 1:1 with this project: https://github.com/zacharynoble/fastify-drizzle-template


### Set-up Environment Variables

- Create a new file at the root level of the project directory named ```.env```. 
- Copy the contents of ```.env.example``` to ```.env```
- Update any environment variables using placeholders to match your config

### Install Packages
    npm install


### Start the application in dev mode
    npm run dev


### Start the application in production mode
    npm run build
    npm run start

### General Info

- Included routes for login, registration, and receiving a token as a part of email verification on sign up.

- Authentication is done using sesisons. The user's authentication is stored in an http-only cookie ```sessionId```. There's a React context ```AuthContext``` for accessing a user's authentication info on the client. There's a reusable function ```getUser()``` for grabbing the user's authentication on the server. This can be used to prevent users from being able to access protected routes.

- Preconfigured with Eslint/Prettier. I highly recommend using VSCode and installing both the official Eslint & Prettier extensions. This will enable auto code formatting using predefined rules on code save.

- Using shadcn as a component library. View their docs at: https://ui.shadcn.com/docs

- Styling with Tailwind CSS.

- Using ```Xior``` as an API wrapper. It's lightweight, throws errors automatically on 4xx or 5xx status codes, and automatically handles stringify / parse.

- ```Zod``` for handling form validations. View their docs at: https://zod.dev/