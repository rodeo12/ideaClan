# EduHub - Learning Management System (LMS)

EduHub is a comprehensive Learning Management System designed to facilitate interactive online learning by connecting instructors (admins) and students through courses and live lectures. The platform emphasizes personalized learning experiences, allowing students to select courses that match their interests and engage deeply with the course content and fellow learners.

## Features

- **Authentication**: Secure user registration and login processes for students and admins. Admins have default credentials for login.
- **Authorization with RBAC**: Role-based access control with clear roles for Admin and Student, each with distinct permissions and access levels.
- **Admin Dashboard**: Admins have access to a dashboard for managing courses, lectures, students, and platform usage analytics.
- **Course Management**: Admins can create, update, and delete courses, as well as schedule lectures.
- **Lecture Access**: Students can view lectures for the courses they've chosen, join live sessions, and engage in discussions.
- **Profile Management**: Students can manage their personal information and track their progress.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing
- dotenv for environment variables

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/eduhub-lms.git
cd eduhub-lms

Install dependencies:
npm install

Set up environment variables:

Create a .env file in the root directory and add the following variables:

PORT=3000
MONGODB_URI=your_mongodb_uri
SECRET_KEY=your_secret_key

Start the server:

node server.js

Access the application:

Open your browser and navigate to http://localhost:3000 to access the application.

Folder Structure
middleware: Contains middleware functions for authentication, error handling, and logging.
admin: Contains routes, controllers, services, and models for admin-related functionality.
course: Contains routes, controllers, services, and models for course-related functionality.
student: Contains routes, controllers, services, and models for student-related functionality.
lecture: Contains routes, controllers, services, and models for lecture-related functionality.
database.js: Handles the Mongoose connection and model definitions.
server.js: Entry point of the application.

