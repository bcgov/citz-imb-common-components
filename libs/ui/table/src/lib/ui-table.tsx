/** @format */

import './ui-table.module.css';
import data from "apps/slam/app/pages/softwaretitle.json";
import Table from '@mui/material/Table';
import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

/* eslint-disable-next-line */
export interface UITableProps {}

export function UITable(props: UITableProps) {
  return (
    <div>
      <h1>Welcome to UITable!</h1>
    </div>
  );
}
console.log("data",data)
export default UITable
