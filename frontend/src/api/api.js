import axios from 'axios';

// Base API URL (adjust if using a different backend URL)
const API_URL = "http://localhost:5000/contacts";

// Fetch all contacts
export const fetchContacts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    throw error;
  }
};

// Add a new contact
export const createContact = async (contactData) => {
  try {
    const response = await axios.post(API_URL, contactData);
    return response.data;
  } catch (error) {
    console.error("Error creating contact:", error.message);
    throw error;
  }
};

// Update an existing contact
export const updateContact = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating contact:", error.message);
    throw error;
  }
};

// Delete a contact
export const deleteContact = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting contact:", error.message);
    throw error;
  }
};
