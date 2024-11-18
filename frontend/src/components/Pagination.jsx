import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handleChange = (event, page) => {
    onPageChange(page);
  };

  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      onChange={handleChange}
      variant="outlined"
      shape="rounded"
      sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
    />
  );
};

export default Pagination;
