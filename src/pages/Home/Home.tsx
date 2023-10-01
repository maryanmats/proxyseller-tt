import React, { useState, useEffect } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { User } from '../../types/types';
import { PostsDialog } from '../../components/PostsTable';
import { AlbumsTable } from '../../components/AlbumsTable';
import { useNavigate } from 'react-router-dom';
import { UsersTable } from '../../components/UsersTable';
import { SearchInput } from '../../components/SearchInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { fetchData } from '../../utils/fetchData';

export const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [openModalPosts, setOpenModalPosts] = useState(false);
  const [openModalAlbums, setOpenModalAlbums] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    fetchData('https://jsonplaceholder.typicode.com/users')
      .then((json) => setUsers(json))
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const handleOpenPosts = (userId: number) => {
    setOpenModalPosts(true);
    navigate(`/posts/${userId}`);
  }

  const handleOpenAlbums = (userId: number) => {
    setOpenModalAlbums(true);
    navigate(`/albums/${userId}`);
  }

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortUsers = (usersToSort: User[]) => {
    if (sortBy === 'asc') {
      return usersToSort.sort((a, b) => a.username.localeCompare(b.username));
    }
    if (sortBy === 'desc') {
      return usersToSort.sort((a, b) => b.username.localeCompare(a.username));
    }

    return usersToSort;
  }

  return (
    <> 
      <SearchInput value={searchQuery} setSearchQuery={setSearchQuery} />
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        sx={{ marginLeft: '12px' }}
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as string)}
      >
        <MenuItem value="all">No Sort</MenuItem>
        <MenuItem value="asc">Sort by ASC</MenuItem>
        <MenuItem value="desc">Sort by DESC</MenuItem>
      </Select>
      <TableContainer component={Paper}>
        {openModalPosts && <PostsDialog /> }
        {openModalAlbums && <AlbumsTable /> }
        {!openModalAlbums && !openModalPosts && (
          <UsersTable users={sortUsers(filteredUsers)} handleOpenPosts={handleOpenPosts} handleOpenAlbums={handleOpenAlbums} />
        )}
      </TableContainer>
    </>
  )
}
