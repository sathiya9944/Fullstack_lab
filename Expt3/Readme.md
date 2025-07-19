#  STUDENT MANAGEMENT SYSTEM USING NODE.JS, EXPRESS, AND MONGODB 

## Aim
To develop a Student Management System using Node.js, Express.js, and MongoDB that allows users to Create, Read, Update, and Delete (CRUD) student details through an HTML form. 

---

## Procedure

1. Initialize a Node.js project using npm init and install the necessary modules: express, mongoose, dotenv, and body-parser using the command npm install.
2. Create a .env file in the project root to store environment variables such as PORT and the MongoDB connection URI (MONGODB_URI).
3. Design a Mongoose schema in Student.js to define the structure of the student data. Include fields like rollNumber, name, email, and course.
4. Create controller functions in studentController.js to handle the logic for adding, reading, updating, and deleting student records from the MongoDB database.
5. Define routes in studentRoutes.js to map HTTP requests (GET, POST) to the appropriate controller functions for CRUD operations.
6. Design a user-friendly HTML form (index.html) to collect student information and a table layout to display all existing student records.
7. Create an additional HTML form (update.html) for editing and updating selected student details using pre-filled form fields.
8. Use Node.js's built-in fs module to read and inject student data dynamically into HTML files without using a templating engine like EJS or Handlebars.
9. Create a CSS file (styles.css) to style the form, table, and buttons, making the interface clean, readable, and user-friendly.
10. Start the Node.js server by running node server.js and open the browser at http://localhost:3000 to test all Create, Read, Update, and Delete functionalities.

## Folder Structure
<img width="500" height="600" alt="image" src="https://github.com/user-attachments/assets/a8bd8109-a056-42c3-a4a5-2b4aaa113e49" />

## Screen Shot
<img width="700" height="500" alt="image" src="https://github.com/user-attachments/assets/c295d459-e609-4262-a7e3-c777a0dbeba6" />

<img width="700" height="500" alt="image" src="https://github.com/user-attachments/assets/c72bb02c-a56e-4336-abb5-d44ea0004fb5" />


<img width="700" height="500" alt="image" src="https://github.com/user-attachments/assets/af4ff10e-50a7-42fd-bdc8-7ec3cd07476e" />
