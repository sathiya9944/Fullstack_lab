#  Development of ElectroMart Website using NodeJS Express Server with Handlebars

## Aim
To develop a dynamic Electronic Shop web application using **Node.js** with the **Express framework**, incorporating **Handlebars** as the templating engine to manage product listings and customer registrations, and storing data using a **JSON file**.

---

## Procedure

1. A new project folder named **Expt2** was created to organize all the files related to the ElectroMart application.

2. The project was initialized using `npm init -y`, and essential packages like **express**, **hbs**, and **body-parser** were installed using npm.

3. A `server.js` file was created to set up the Express server and configure routes, middleware, and view rendering.

4. A `views` folder was created containing three Handlebars files: `home.hbs`, `register.hbs`, and `customers.hbs`.

5. A `public` folder was created to store the `styles.css` file used to style the entire application uniformly.

6. The Express server was configured to render `.hbs` files using Handlebars, serve static files from the public folder, and handle form submissions using body-parser.

7. The `home.hbs` file was designed to display a grid of electronic products such as laptops, smartphones, and headphones using styled product cards.

8. A registration form was added in `register.hbs` to collect customer name, email, and product category, and the submitted data was saved to a `data.json` file.

9. A `customers.hbs` page was created to display all registered customer data by reading from the JSON file.

10. The server was started using the command `node server.js`, and the application was tested by accessing `http://localhost:3000` in the web browser.

## Folder Structure
![Screenshot 2025-07-06 161715](https://github.com/user-attachments/assets/61694726-0d46-4fd1-b318-99d4c5521dcd)

## Screen Shot
![Screenshot (70)](https://github.com/user-attachments/assets/634757db-e332-4289-b65e-eaf803793f79)

![Screenshot (71)](https://github.com/user-attachments/assets/5a79e08e-625f-4ea9-be21-0466fc273816)

![Screenshot 2025-07-06 161724](https://github.com/user-attachments/assets/6f8dc6fb-e0a7-4f8e-99ca-2e71f6a5f974)



