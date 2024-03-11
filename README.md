# Error Handler and Middleware Exercise

This exercise is designed to help you understand how to set up error handling middleware in an Express.js application and how to use middleware for logging purposes. Below is a guide to set up the project, handle different routes, and make requests using either a browser or Postman.

### Setup Guide

1. **Clone the Repository**: Clone the repository containing the project files to your local machine.

2. **Install Dependencies**: Make sure you have Node.js and npm installed on your machine. Navigate to the project directory and run the following command to install dependencies:

   ```
   npm install
   ```

3. **Start the Server**: Once the dependencies are installed, start the Express server by running the following command:

   ```
   node app.js
   ```

   The server will start running on port 3000 by default.

### Making Requests

You can make requests to different routes using either a browser or Postman.

#### Browser Requests

- Open your browser and navigate to the following routes:
  - Home Page: [http://localhost:3000/](http://localhost:3000/)
  - Posts: [http://localhost:3000/posts](http://localhost:3000/posts)

#### Postman Requests

- If you prefer using Postman, follow these steps:
  1. Open Postman.
  2. Create a new request.
  3. Set the request type (GET, POST) and URL for the desired route.
  4. Add any required headers or request body parameters using JSON.
  5. Send the request and observe the response.

### Handling Different Routes

- **Home Page (/)**: This route is a basic demonstration of handling a GET request. It simply returns a response indicating that it's the home page.

- **Posts (/posts)**: This route also handles a GET request and returns a response indicating that it's fetching posts.

- **Login (/login)**: This route handles a POST request for user login. It validates the request body using Joi schema. If the username already exists, it throws a custom error. Otherwise, it logs a message indicating successful user creation.