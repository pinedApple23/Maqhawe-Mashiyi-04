## Assignment 12
 
 ## Job Portal API
 A Node.js-based Job Portal system implementing the Abstract Factory design pattern for flexible repository management. Supports in-memory storage with clear service layers and RESTful APIs for Users, Job Posts, and Applications.
 
 ## Features
 🏗️ Abstract Factory Design Pattern
 
 🧠 In-memory storage for quick testing and prototyping
 
 🔌 RESTful APIs
 
 🧪 Modular structure for future database or file-based repositories
 
 📚 Swagger documentation
 
 ## Getting Started
 # Clone Repo
 git clone <https://github.com/pinedApple23/Maqhawe-Mashiyi-04>
 cd repositories/tests
 
 # Install Dependencies
 npm install
 
 # Run the Server
 node server.js
 
 # Server will run on: http://localhost:3000
 
 ## API Endpoints
 👤 Users
 GET /api/users — Get all users
 
 POST /api/users — Create a user
 
 GET /api/users/:id — Get user by ID
 
 DELETE /api/users/:id — Delete a user
 
 💼 Job Posts
 GET /api/jobposts — Get all job posts
 
 POST /api/jobposts — Create a job post
 
 GET /api/jobposts/:id — Get job post by ID
 
 DELETE /api/jobposts/:id — Delete a job post
 
 📄 Applications
 GET /api/applications — Get all applications
 
 POST /api/applications — Apply for a job