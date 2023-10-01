import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useParams } from 'react-router-dom';
import { SearchInput } from '../SearchInput';

export interface GenericTableProps<T> {
  data: T[];
  headers: string[];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const GenericTable: React.FC<GenericTableProps<any>> = ({
  data,
  headers,
  searchQuery,
  setSearchQuery,
}) => {
  const { userId } = useParams();

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SearchInput value={searchQuery} setSearchQuery={setSearchQuery} />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>
                <strong>{header}</strong>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((item) => (
            <TableRow
              key={item.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {headers.map((header) => (
                <TableCell key={header}>
                  {item[header.toLowerCase()]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
