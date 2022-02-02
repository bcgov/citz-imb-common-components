/** @format */

import { UITable } from '@CITZ-IMB/UITable';
import { Box, Toolbar, Typography } from '@mui/material';
import { useData } from '../../hooks';
import './software.module.css';
import { getSoftware } from './getSoftware';
import mockData from './software.mockdata.json'

export interface SoftwareProps {}

export function Software(props: SoftwareProps) {
  const { data, isLoading, isError } = useData('software', getSoftware);
  const { rows, columns } = mockData;

  return (
    <Box sx={{ mt: 6 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Software
        </Typography>
      </Toolbar>
      <UITable rows={rows} columns={columns} isLoading={isLoading} isError={isError} />
    </Box>
  );
}

export default Software;
