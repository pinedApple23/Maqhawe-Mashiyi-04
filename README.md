# 💼 Job Portal System

A modern job portal web application that allows job seekers to find and apply for jobs, and recruiters to post and manage job listings.  
This project simulates a real-world job board with admin tools, dashboards, and security features.

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 📦 Prerequisites

- Node.js and npm
- Git


### 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/pinedApple23/Maqhawe-Mashiyi-04
cd job-portal

# Install dependencies
npm install

# Start the app
npm start


---

## 🧩 Features for Contribution

| Feature                          | Description                                           | Status       | Label              |
|----------------------------------|-------------------------------------------------------|--------------|--------------------|
| Implement 404 Not Found Page     | Show a user-friendly error page for invalid routes   | To Do        | `good-first-issue` |
| Implement System Security        | Add security best practices (auth, validation, etc.) | Planned      | `enhancement`       |
| Implement Audit Logs             | Log key admin/recruiter actions for accountability    | Planned      | `enhancement`       |
| Add Form Validations             | Validate fields on all major forms (login, signup)   | To Do        | `good-first-issue` |
| Conduct UAT                      | Perform User Acceptance Testing for all modules      | In Progress  | `good-first-issue` |
| Compliance Personnel Dashboard   | Build dashboard for compliance team users            | Planned      | `enhancement`       |
| System Admin Dashboard           | Build admin tools for user and system control        | In Progress  | `enhancement`       |
| User Authentication (All Types) | Add login/auth for admin, recruiter, and seekers     | In Progress  | `good-first-issue` |
| Testing                          | Write and improve unit/integration tests             | To Do        | `good-first-issue` |


---

## 🛣 Roadmap

See the full ROADMAP.md for a list of completed and upcoming features.

---

## 🤝 Contributing
  
To get started, please read the CONTRIBUTING.md for setup instructions, coding standards, and how to submit a pull request.

Check out issues labeled `good-first-issue` or `feature-request`.

---

## 🛡 License

This project is licensed under the Apache 2.0 License. See the LICENSE file for details.

---

## 🌟 Show Your Support

If you found this project helpful or interesting:
- ⭐ Star this repository  
- 🍴 Fork it to contribute  
- 🗣 Share it with classmates or collaborators!

---

## 👨‍💻 Author

Developed by [pinedApple23]  
For educational use as part of a peer-reviewed open-source collaboration assignment.


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

----------------------------------------------------------------------------------------------------------------------

Stakeholder Identification Roles:
Applicant Role – Explore job vacancies and find relevant posts. Apply to relevant job posts by entering their information including ID, Resume, supporting documents. Receive feedback on their job application via contact details. Utilize Interview Prep page and its resources.

HR Personnel Role - The HR Personnel views the various applications and vets out the necessary/relevant candidates.

Site Administrator Role – The site admin’s main tasks are managing the applications that are on the website. They make sure the vacancies have all the necessary and correct information, and make sure the job posts are not visible past the closing dates. They should also make sure the Interview Prep content stays updated and relevant in order for it to be useful to the applicant.

IT Support IT Support assists with all infrastructure and network issues pertaining to the website.

Systems Developers The System/Software developers will design, develop and maintain the codebase of the portal. All features that need to be developed or updated will be the developers’ responsibility.

Compliance Officer The compliance officer ensures the vetting and hiring of new employees goes according to law and recruitment standards. They ensure laws put in place are being adhered to.

Key Concerns:

Applicant The portal’s user interface needs to be user friendly, comprehensible and intuitive. The applicant should clearly see the listed posts and the relevant information on the vacancy, and be able to enter and submit their data onto the portal. The Interview Preparation section should be comprehensible and concise to the Applicant. All external sources for Interview Prep should be accessible.

Recruitment Agency/HR Personnel The screening process should allow for a shorter vetting process of applications. An ATS (Application Tracking System) tool should be made use of when looking for the perfect candidate, saving time and effort, increasing accuracy.

Site Administrator The site administrator should have ease of access to uploading tools, editing tools and job current jobs vacancies that need to be filled. They should be kept in close communication with the recruiters as to be informed about job-listings.

IT Support IT Support focuses on ensuring system uptime, security, and performance through proactive monitoring and quick troubleshooting. They manage backups, data recovery, and integrations while providing user support. Their priorities include resolving technical issues, maintaining system integrity, and collaborating with administrators and developers to ensure smooth operations.

System Developers System need efficient development tools, clear requirements, and efficient testing environments to build, integrate, and maintain the system. Their priorities include ensuring code quality, optimizing system performance, and implementing new features. They focus on collaboration with other teams and ensuring system scalability and security during development and deployment.

Compliance Officers The Compliance Officer ensures the Job Application and hiring process adheres to legal and regulatory standards, particularly regarding data protection and privacy laws. They prioritize monitoring system practices for compliance with relevant regulations. Their role includes conducting audits, managing risk assessments, and ensuring the organization follows ethical hiring practices.

Pain Points

Applicant Currently, the inserting applicant information to the database is still under construction.

Recruitment Agency/HR Personnel The challenge right now is that the integration of the ATS system is not yet complete.

Site Administrator Content management system integration is not yet done. This will allow easy managing of the job posts, and any other content within the portal.

IT Support Currently there aren’t any IT Support pain points. As the systems scales up, the problems will probably be prevalent and increase.

System Developers The system developers should find robust methods to integrate the Application Tracking System to the website. Also, finding the appropriate system is a challenge.

Compliance Officers At present, there are no pain points for the Compliance Officers, as the project is at inception stages.

Success Metrics

Applicant Success Metrics for the application will be 50% increase in number of applications done in one sitting, a higher job offer rate compared to applications done on other job portals and a better insight, and being highly equipped/prepared for interviews.

Recruitment Agency/HR Personnel 30%+ increase in efficiency in screening applications. Higher accuracy in acquiring relevant and skilled candidates. Less issues and errors related to compliancy.

Site Administrator Average time taken to update or remove job postings that are past the closing date should be small. A high percentage of relevant, updated content available for applicants, with regular review intervals.

IT Support Percentage of time the website is up and running without issues should be high. Positive feedback from users on the quality and helpfulness of technical support provided. The average time it takes to resolve technical issues and implement fixes is minute/quick.

System Developers Positive feedback on overall user experience from users. Less time taken to develop a feature. 30% higher rate in the solving bugs found.

Compliance Officers +-35% higher percentage of HR activities that adhere to the laws, industry standards and best practices. 80% increase in number of successful audits without any findings of non-compliance in the recruitment process.

Functional Requirements The applicant can apply for a job application by uploading their resume and submitting their personal information/details.
Applicants can submit their applications to multiple job vacancies. Applicants will receive responses via email. The applicant is able to view the interview prep tips.

The HR Personnel can view applications, and their detailed information. The ATS will filter applications based on their requirements/criteria. HR can provide feedback to applicants on their outcomes.

The site allows administrators to edit, insert and remove vacancies. They are able to edit and manage the interview prep section.

The portal’s technical issues will be managed by IT Support. Network support, site accessibility, and availability will be implemented by IT Support. Accessibility of the site will lead to higher user satisfaction

The user access, troubleshooting of issues, decreasing system downtime, monitoring site performance will be done by IT Support.

The Developers will maintain the codebase, troubleshoot and debug issues pertaining to the application.

They will write scalable, clean and maintainable code that will not cause problems with regards to application maintenance.

Developers will create features that will better the experience of the user(applicant/admin). They will implement the integration of the site to third party systems.

Compliance personnel will have access to the business specified SRDs and to the system to ensure data privacy and security regulations are adhered to. 3) Non-functional Requirements Usability The applicant can apply for a job application by uploading their resume and submitting their personal information/details. Applicants can submit their applications to multiple job vacancies. Applicants will receive responses via email. The applicant is able to view the interview prep tips. The HR Personnel can view applications, and their detailed information. The site allows administrators to edit, insert, and remove vacancies. They are able to edit and manage the interview prep section.

Deployability The portal’s technical issues will be managed by IT Support. Network support, site accessibility, and availability will be implemented by IT Support. IT Support will monitor site performance.

Maintainability The Developers will maintain the codebase, troubleshoot, and debug issues pertaining to the application. They will write scalable, clean, and maintainable code that will not cause problems with regards to application maintenance. Developers will create features that will better the experience of the user (applicant/admin). They will implement the integration of the site to third-party systems.

Scalability Developers will write scalable code to allow for the growth of users. Developers will implement the integration of the site to third-party systems.

Security Compliance personnel will have access to the business-specified SRDs and the system to ensure data privacy and security regulations are adhered to. HR Personnel will filter applications based on their requirements/criteria.

Performance The user access, troubleshooting of issues, decreasing system downtime, monitoring site performance will be done by IT Support. Accessibility of the site will lead to higher user satisfaction.

Documentation
4.1 Stakeholder Role Key Concerns Pain Points Success Metrics Applicant Explore job vacancies and apply for relevant posts. Submit personal details and receive feedback. User-friendly interface, clear job information, accessible interview prep. Applicant info insertion into database is under consideration. - 50% increase in number of applications per sitting.

Higher job offer rate compared to other job portals.
Better preparedness for interviews. HR Personnel Vet and shortlist candidates based on job applications. Efficient and accurate vetting of applications through ATS. ATS integration with system not yet complete. - 30%+ increase in efficiency of screening applications.
Higher accuracy in selecting relevant candidates.
Fewer issues related to compliance. Site Administrator Manage job vacancies and ensure content is up-to-date. Ease of access to content management tools for job vacancies and interview prep updates. CMS integration not complete. - Quick updates/removals of job postings.
High percentage of relevant, updated content available.
Regular review intervals of content. IT Support Ensure system uptime, security, performance, troubleshooting, and integration of IT systems. System uptime, proactive monitoring, quick resolution of technical issues, and maintaining infrastructure stability. No immediate pain points, but potential challenges as the system scales. - High website uptime.
Positive feedback on support quality.
Quick resolution of technical issues and implementation of fixes. System Developers Design, develop, maintain the codebase, and implement new features for the system. Efficient tools and environment for development, code quality, feature implementation, and system scalability. Need to integrate ATS system. Difficulty finding the appropriate ATS. - Positive user feedback.
Less time to develop new features.
30% higher rate in solving bugs. Compliance Officers Ensure that the recruitment process adheres to legal standards and best practices. Monitoring and ensuring the system adheres to legal, privacy, and recruitment standards. No immediate pain points (project at inception stage). - 35%+ higher compliance with laws and standards.
80% increase in successful audits with no non-compliance findings.
4.2 Systems Requirements Document 4.2.1 Introduction The purpose of this document is to define the system requirements and key roles involved in the development, management, and use of a job application portal. The system will serve applicants, HR personnel, site administrators, IT support, systems developers, and compliance officers. 4.2.2 Roles and Responsibilities Applicant • Role: Explore job vacancies and find relevant posts. Apply to job posts by entering their personal information, including ID, resume, and supporting documents. • Responsibilities: • Browse job vacancies. • Submit applications with necessary details. • Receive feedback on job applications via provided contact details. HR Personnel • Role: Review applications and identify the relevant candidates for each job posting. • Responsibilities: • Vet applicants based on their applications. • Use an Application Tracking System (ATS) to screen candidates effectively. • Communicate with shortlisted candidates. Website Administrator • Role: Manage the applications on the website, ensuring that all vacancies have accurate information and that outdated vacancies are removed. • Responsibilities: • Upload and update job postings. • Ensure that vacancies have complete and accurate information. • Close job posts when they reach their deadline. • Maintain the Interview Preparation section to keep it updated and relevant. IT Support • Role: Provide technical support for the infrastructure and network issues related to the website. • Responsibilities: • Ensure system uptime and performance. • Handle security and backup management. • Troubleshoot issues and resolve them quickly. • Provide user support for technical problems. • Collaborate with other teams to ensure smooth operations. System Developers • Role: Design, develop, and maintain the codebase for the job application portal. • Responsibilities: • Develop and maintain the system based on user and admin requirements. • Implement new features and ensure system updates. • Optimize the codebase for performance and scalability. • Ensure that the system is secure, efficient, and reliable. • Collaborate with IT Support and Site Administrators to ensure system functionality. Compliance Officer • Role: Ensure that the hiring and recruitment processes comply with all relevant laws and regulations. • Responsibilities: • Monitor the hiring process for adherence to legal and regulatory standards. • Ensure data protection and privacy laws are followed. • Conduct audits and manage risk assessments. • Ensure ethical hiring practices are being followed. 4.2.3 Key Concerns Applicant • User Interface (UI): • The portal should be user-friendly, intuitive, and easy to navigate. • Applicants must be able to easily view job vacancies and the relevant information about the jobs. • The application process should allow applicants to submit necessary documents (e.g., resume, ID). • Interview Preparation: • The Interview Preparation section should be clear, concise, and helpful. • All external sources for interview preparation should be easily accessible. HR Personnel • Screening Process: • An efficient vetting process should be in place to help HR personnel quickly identify relevant candidates. • An Application Tracking System (ATS) should be integrated to facilitate better candidate selection, save time, and increase accuracy. Site Administrator • Management Tools: • The site administrator should have easy access to tools for uploading, editing, and managing job postings. • They should be in constant communication with recruiters to stay updated on the availability of job listings. IT Support • System Integrity: • IT support should ensure high system uptime and excellent performance. • They need to maintain security protocols and manage backups, data recovery, and integrations. • The primary concern is resolving technical issues promptly to maintain system functionality. Systems Developer • Development Process: • Developers need access to efficient development tools and clear requirements for building and maintaining the system. • They should be able to perform thorough testing to ensure the system operates optimally. • Collaboration with other teams (e.g., IT support and site administrators) is essential to maintain system reliability, security, and scalability. Compliance Officer • Compliance Management: • The compliance officer should regularly audit the recruitment processes to ensure they follow legal and regulatory standards. • Data protection and privacy must be closely monitored. • Risk assessments should be conducted, and ethical hiring practices should always be enforced. 4.2.4 System Requirements 4.2.4.1 Functional Requirements • Applicant Portal: • Ability for applicants to search, view, and apply for job vacancies. • Form for submitting personal information, resume, and supporting documents. • Ability to receive feedback on job applications. • Access to interview preparation content and resources. • HR Personnel Interface: • Ability to view, sort, and screen applications based on relevant criteria. • ATS integration to streamline candidate selection. • Site Administrator Interface: • Tools to add, edit, and remove job listings. • Ability to set vacancy expiration dates and close posts when necessary. • Access to the Interview Preparation section for updates. • IT Support Tools: • Access to system health and performance monitoring. • Backup and data recovery tools. • System Development Tools: • Secure development environment. • Continuous integration and testing tools. • System versioning and documentation. • Compliance Management Tools: • Monitoring tools for legal compliance and audits. • Data protection and privacy monitoring systems.

4.2.4.2 Non-Functional Requirements • Performance: • The system should be able to handle large volumes of applications without significant delays. • Security: • Data security must be ensured for both applicant information and HR personnel data. • Scalability: • The system should be scalable to accommodate growing numbers of users and job postings. • Availability: • The system must be available 99.9% of the time to ensure uninterrupted access for applicants and administrators. • Usability: • The system must have an intuitive interface that is easy for all user roles to navigate. 4.3 Conclusion This SRD outlines the functional and non-functional requirements of the job application portal, focusing on the key roles, responsibilities, and concerns for each stakeholder. The goal is to create an efficient, user-friendly platform for job applicants, HR personnel, site administrators, IT support, systems developers, and compliance officers to ensure the smooth operation of the recruitment process, and sufficient, relevant interview preparation for applications.
