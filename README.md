# Customer-_relationship_management
Assignment for the Erino

# Contact Management System
This is a small contact management feature for a CRM system. It allows users to add, view, edit, and delete contact details. The goal is to make it easy for users to manage their contacts in one place. The project uses ReactJS for the frontend and Node.js for the backend. For the database, it uses MongoDB.


# Technologies Used
Frontend: ReactJS with Material UI components
Backend: Node.js with Express.js
Database: MongoDB (Cloud-based via MongoDB Atlas)


# Features

Add a New Contact:
Users can add contact details such as name, email, phone number, company, and job title.

View All Contacts:
Contacts are displayed in a table with pagination and sorting options.

Edit a Contact:
Users can update the details of an existing contact.

Delete a Contact:
Old or duplicate contacts can be deleted.



# Challenges Faced

# Pagination Implementation:

I had difficulty calculating the start and end indices for displaying contacts on each page.
After some trial and error, I used a simple formula: (currentPage * contactsPerPage).

# Form Validation:

Adding proper validation for each input field was tricky.
I used the yup library with react-hook-form to make validation easier.

# Error Handling:

Handling API failures and showing user-friendly error messages took extra time.
I added a Snackbar component from Material UI to display errors.

# Connecting to MongoDB Atlas:

I had trouble setting up the network access for my local IP address.
The issue was fixed by allowing connections from 0.0.0.0/0 (all IPs).

# Understanding Material-UI:

As I was new to Material-UI, I spent extra time reading the documentation and understanding how to use its components.



