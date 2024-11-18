import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const ContactTable = ({ contacts, onEdit, onDelete }) => (
  <Table>
    <TableHead>
      <TableRow>
        {['First Name', 'Last Name', 'Email', 'Phone', 'Company', 'Job Title', 'Actions'].map((col) => (
          <TableCell key={col}>{col}</TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {contacts.map((contact) => (
        <TableRow key={contact._id}>
          {Object.values(contact).slice(1, 6).map((value, i) => (
            <TableCell key={i}>{value}</TableCell>
          ))}
          <TableCell>
            <IconButton onClick={() => onEdit(contact)}><Edit /></IconButton>
            <IconButton onClick={() => onDelete(contact._id)}><Delete /></IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default ContactTable;
