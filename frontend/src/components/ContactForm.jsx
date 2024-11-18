import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  company: yup.string(),
  jobTitle: yup.string(),
});

const ContactForm = ({ onSubmit }) => {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '',
      jobTitle: '',
    },
  });

  const onSubmitHandler = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmitHandler)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {['firstName', 'lastName', 'email', 'phoneNumber', 'company', 'jobTitle'].map((field) => (
        <Controller
          key={field}
          name={field}
          control={control}
          render={({ field: controllerField, fieldState: { error } }) => (
            <TextField
              {...controllerField}
              label={field.replace(/^\w/, (c) => c.toUpperCase())}
              error={!!error}
              helperText={error?.message}
              required={field !== 'company' && field !== 'jobTitle'}
            />
          )}
        />
      ))}
      <Button type="submit" variant="contained">Add Contact</Button>
    </Box>
  );
};

export default ContactForm;
