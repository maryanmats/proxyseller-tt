import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Album } from '../../types/types';
import { useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import { SearchInput } from '../SearchInput/SearchInput';

export const AlbumsTable: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then(response => response.json())
      .then(json => setAlbums(json))
  }, [])

  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <SearchInput value={searchQuery} setSearchQuery={setSearchQuery} />
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>ID</strong></TableCell>
            <TableCell align="right"><strong>TITLE</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredAlbums.map((album) => (
            <TableRow
              key={album.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {album.id}
              </TableCell>
              <TableCell align="right">{album.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </>
  );
}