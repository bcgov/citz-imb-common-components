/** @format */

import './ui-table.module.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Alert, AlertTitle } from '@mui/material';
export interface UITableProps {
  columns: GridColDef[];
  rows: any[];
  isLoading?: boolean;
  isError?: boolean;
  error?: string;
}

export function UITable(props: UITableProps) {
  const { columns, rows, isLoading = false, isError = false } = props;

  if (isError) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        there was an error
      </Alert>
    );
  }

  return (
    <div>
      <DataGrid columns={columns} rows={rows} autoHeight={true} loading={isLoading} />
    </div>
  );
}

export default UITable;
