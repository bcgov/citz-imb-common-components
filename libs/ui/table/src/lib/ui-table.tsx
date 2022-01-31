/** @format */

import './ui-table.module.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
export interface UITableProps {
  columns: GridColDef[];
  rows: any[];
}

export function UITable(props: UITableProps) {
  const { columns, rows } = props;
  return (
    <div>
      <DataGrid columns={columns} rows={rows} autoHeight={true} loading={false} />
    </div>
  );
}

export default UITable;
