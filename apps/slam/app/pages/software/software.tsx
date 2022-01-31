/** @format */

import './software.module.css';
import { UITable } from '@CITZ-IMB/UITable';
import { GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import data from './software.mockdata.json';
import { Box, Toolbar, Typography } from '@mui/material';

export interface SoftwareProps {}

export function Software(props: SoftwareProps) {
  const { columns, rows } = data;

  return (
    <Box sx={{ mt: 6}}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Software
        </Typography>
      </Toolbar>
      <UITable rows={rows} columns={columns} />
    </Box>
  );
}

export default Software;
