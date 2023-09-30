import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { User } from '../../types/types';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import CollectionsIcon from '@mui/icons-material/Collections';

type Props = {
  users: User[],
  handleOpenAlbums: (userId: number) => void,
  handleOpenPosts: (userId: number) => void,
}

export const UsersTable: React.FC<Props> = ({ users, handleOpenAlbums, handleOpenPosts }) => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>ID</strong></TableCell>
            <TableCell align="right"><strong>NAME</strong></TableCell>
            <TableCell align="right"><strong>USERNAME</strong></TableCell>
            <TableCell align="right"><strong>EMAIL</strong></TableCell>
            <TableCell align="right"><strong>POSTS / ALBUMS</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.username}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{
              <>
              <LocalPostOfficeIcon 
                onClick={() => handleOpenPosts(user.id)}
                style={{ cursor: 'pointer' }} 
              />
              <CollectionsIcon 
                onClick={() => handleOpenAlbums(user.id)} 
                style={{ cursor: 'pointer' }} 
              /></>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}