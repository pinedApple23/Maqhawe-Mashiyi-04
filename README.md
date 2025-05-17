# Job Portal System

A modern job portal web application that allows job seekers to find and apply for jobs, and recruiters to post and manage job listings.  
This project simulates a real-world job board with admin tools, dashboards, and security features.

---

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js and npm
- Git


### Installation

```bash
# Clone the repository
git clone https://github.com/pinedApple23/Maqhawe-Mashiyi-04
cd job-portal

# Install dependencies
npm install

# Start the app
npm start


---

## 🛣 Roadmap

See the full ROADMAP.md for a list of completed and upcoming features.

---

##  Contributing
  
To get started, please read the CONTRIBUTING.md for setup instructions, coding standards, and how to submit a pull request.

Check out issues labeled `good-first-issue` or `feature-request`.

---

## License

This project is licensed under the Apache 2.0 License. See the LICENSE file for details.

---

## Show Your Support

If you found this project helpful or interesting:
- Star this repository  
- Fork it to contribute  
- Share it with classmates or collaborators!

---

## Author

Developed by [pinedApple23]  
For educational use as part of a peer-reviewed open-source assignment.


Job Portal API
A Node.js-based Job Portal system implementing the Abstract Factory design pattern for flexible repository management. Supports in-memory storage with clear service layers and RESTful APIs for Users, Job Posts, and Applications.

Features
🏗️ Abstract Factory Design Pattern

🧠 In-memory storage for quick testing and prototyping

🔌 RESTful APIs

🧪 Modular structure for future database or file-based repositories

📚 Swagger documentation

Getting Started
Clone Repo
git clone https://github.com/pinedApple23/Maqhawe-Mashiyi-04 cd repositories/tests

Install Dependencies
npm install

Run the Server
node server.js

Server will run on: http://localhost:3000
API Endpoints
👤 Users GET /api/users — Get all users

POST /api/users — Create a user

GET /api/users/:id — Get user by ID

DELETE /api/users/:id — Delete a user

💼 Job Posts GET /api/jobposts — Get all job posts

POST /api/jobposts — Create a job post

GET /api/jobposts/:id — Get job post by ID

DELETE /api/jobposts/:id — Delete a job post

📄 Applications GET /api/applications — Get all applications

POST /api/applications — Apply for a job

-----------------------------------------------------------------------------------------------------------------------------------------------

Repository Layer Design Justifications

?? Use of a Generic Repository Interface I created a base Repository interface using a class that defines common CRUD operations: save, findById, findAll, and delete. This allows us to:
Enforce a consistent API across all entity-specific repositories (e.g., User, JobPost, Application)

Promote code reusability and minimize duplication

Lay the groundwork for easily switching or extending storage backends

�Used a generic base class to avoid duplicating CRUD logic across multiple repositories.�

?? In-Memory Implementation with Map I used JavaScript�s built-in Map object to simulate a HashMap-based in-memory data store. This implementation is ideal for development and testing because:
It provides fast O(1) access for CRUD operations

It allows unit tests to run without needing a real database

It simplifies debugging and prototyping

? �Used in-memory storage for fast prototyping and unit testing, with no external dependencies.�

Entity-Specific Repositories Each domain entity (User, JobPost, Application) has its own repository class that extends the generic Repository. This allows us to:
Add specialized query methods later (e.g., findByEmail, findByCompany)

Keep the logic for each entity modular and easy to maintain

? �Created separate repositories per entity to support future domain-specific logic.�

Swappable Storage Backends The repositories are designed to be storage-agnostic. In-memory versions are implemented now, but future versions (e.g., using file storage, SQL, or MongoDB) can easily replace them. This will be managed using a Factory Pattern or Dependency Injection in future iterations.

Factory Pattern Justification The Factory Pattern was used to dynamically select between different repository implementations, ensuring clean separation of concerns and easy future extensibility.

------------------------------------------------------------------------------------------------------------------------------

� Creational Design Patterns
This repository demonstrates the use of all six creational design patterns using JavaScript, tailored to a Job Portal System. Each pattern is implemented with a relevant and practical use case to show how it fits into the real-world architecture of such a system.

? Patterns Implemented
1. Simple Factory
Use Case: Creating different types of job applications (Internship or Full-Time).

Justification:
This pattern is used to centralize object creation logic and encapsulate the instantiation of job applications. Prevents code duplication, and makes it easy to add new application types in the future.

2. Factory Method
Use Case: Creating notification objects (Email or SMS).

Justification:
Each type of notification has its own implementation, so the Factory Method pattern allows the system to defer the decision of which subclass to instantiate. This promotes flexibility and separation of concerns.

3. Abstract Factory
Use Case: Creating families of UI components (Menu and Dashboard) for different user roles (Applicant or HR).

Justification:
Ensures that all UI components created for a particular user role are consistent. Helps manage related objects together and makes it easier to support multiple user experiences across the platform.

4. Builder
Use Case: Constructing a complex JobPost object step by step with optional fields.

Justification:
A job post can have optional attributes such as salary, benefits, and closing date. Using Builder makes it easier to create readable and maintainable code when building such complex objects with optional parameters.

5. Prototype
Use Case: Cloning job post templates.

Justification:
Useful when multiple similar job posts need to be created. Instead of building from scratch every time, we clone an existing template and modify only what�s needed. This improves performance and consistency.

6. Singleton
Use Case: Managing a single instance of a database connection.

Justification:
Ensures that the app uses only one database connection instance, which conserves resources and prevents connection conflicts across the system.

Testing & Coverage
This project uses Jest for unit testing and code coverage. See test directory for tests. See coverage directory for test and coverage information.
