---

# Media Management Application

This is a media management application built with ReactJS for the frontend and Spring Boot for the backend. It allows users to manage and interact with media items such as songs.

## Technologies Used

### Frontend
- ReactJS: A JavaScript library for building user interfaces.
- Redux Toolkit: A library for managing the state of your React application.
- Redux-Saga: A library for managing asynchronous actions and side effects in Redux.
- Emotion: A CSS-in-JS library for styling React components.
- Styled System: A utility library for creating consistent and responsive styled components.

### Backend
- Spring Boot: A framework for building Java applications, providing a streamlined development experience.
- Java: The programming language used for developing the backend.
- MySQL: A relational database management system used to store the media items.

## Prerequisites

Before running the application, make sure you have the following software installed on your machine:

- Node.js: [Download and install Node.js](https://nodejs.org/en/download/)
- Java Development Kit (JDK): [Download and install JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- Apache Maven: [Download and install Maven](https://maven.apache.org/download.cgi)
- MySQL Database: [Download and install MySQL](https://dev.mysql.com/downloads/installer/)

## Frontend Setup

1. Open a terminal and navigate to the `frontend` directory of the project.

2. Install the required dependencies by running the following command:
   ```
   npm install
   ```

   This command will download all the necessary React modules and dependencies specified in the `package.json` file.

3. Once the installation is complete, start the development server:
   ```
   npm start
   ```

4. The React app will be running at `http://localhost:3000`. Open your web browser and visit this URL to access the application.

## Backend Setup

1. Create a MySQL database for the application. You can use a tool like phpMyAdmin or the MySQL command line to create a new database.

2. Open the `application.properties` file located in the `src/main/resources` directory.

3. Update the database configuration in the `application.properties` file with your MySQL database credentials:
   ```
   spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ...othere
   ```

4. Save the changes to the `application.properties` file.

5. Open a terminal and navigate to the root directory of the project.

6. Build the project using Maven:
   ```
   mvn clean install
   ```

7. Once the build is complete, run the Spring Boot application:
   ```
   mvn spring-boot:run
   ```

8. The backend server will start running at `http://localhost:8080`, and it will be connected to the MySQL database.

## Testing the Application

1. Open your web browser and visit `http://localhost:3000` to access the ReactJS app.

2. Use the app to add, update, or delete media items such as songs.

3. The React app will communicate with the Spring Boot backend to perform CRUD operations on the media items stored in the MySQL database.

4. Verify that the changes made in the React app are reflected in the media list and database.

## Conclusion

Congratulations! You have successfully set up and run the Media Management Application. Feel free to explore the features and functionalities of the app. If you encounter any issues or have any questions, please don't hesitate to contact me
https://github.com/gutudanii/
https://www.linkedin.com/in/gutu-daniel/
https://instagram/gutuyeshi
.

---
