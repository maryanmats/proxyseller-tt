import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Post } from '../../types/types';
import { useParams } from 'react-router-dom';
import { SearchInput } from '../SearchInput/SearchInput';

export const PostsDialog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <SearchInput value={searchQuery} setSearchQuery={setSearchQuery} />
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>ID</strong></TableCell>
            <TableCell align="right"><strong>TITLE</strong></TableCell>
            <TableCell align="right"><strong>BODY</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow
              key={post.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {post.id}
              </TableCell>
              <TableCell align="right">{post.title}</TableCell>
              <TableCell align="right">{post.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </>
  );
}