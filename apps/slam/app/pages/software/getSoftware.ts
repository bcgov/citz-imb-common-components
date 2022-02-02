/** @format */

import { GridColDef } from '@mui/x-data-grid';
import { getData } from '../../api/getData';
import softwareColumns from './software.columns.json';

export const getSoftware = async (): Promise<{ columns: GridColDef[]; rows: unknown[] }> => {
  const columns: GridColDef[] = [...softwareColumns];

  const rows = await getData('software');

  return { columns, rows };
};
