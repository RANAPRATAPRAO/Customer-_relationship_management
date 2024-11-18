import React, { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import ContactTable from '../components/ContactTable';
import Pagination from '../components/Pagination';
import { fetchContacts, createContact, updateContact, deleteContact } from '../api/api';
import { Snackbar, Alert } from '@mui/material';

const ContactManagement = () => {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(5);
  const [error, setError] = useState(null);

  // Load contacts from API
  const loadContacts = async () => {
    try {
      const data = await fetchContacts();
      setContacts(data);
    } catch (error) {
      setError("Failed to load contacts. Please try again.");
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  // Add new contact
  const handleAddContact = async (contact) => {
    try {
      await createContact(contact);
      loadContacts();
    } catch (error) {
      setError("Failed to add contact. Please try again.");
    }
  };

  // Edit existing contact
  const handleEditContact = async (id, updatedContact) => {
    try {
      await updateContact(id, updatedContact);
      loadContacts();
    } catch (error) {
      setError("Failed to update contact. Please try again.");
    }
  };

  // Delete contact
  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id);
      loadContacts();
    } catch (error) {
      setError("Failed to delete contact. Please try again.");
    }
  };

  // Pagination calculations
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Management</h1>
      <ContactForm onSubmit={handleAddContact} />
      <ContactTable
        contacts={currentContacts}
        onEdit={(contact) => handleEditContact(contact._id, contact)}
        onDelete={handleDeleteContact}
      />
      <Pagination
        totalPages={Math.ceil(contacts.length / contactsPerPage)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setError(null)} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactManagement;
