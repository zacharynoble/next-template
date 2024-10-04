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
