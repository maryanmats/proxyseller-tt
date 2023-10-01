import React, { useState, useEffect } from 'react';
import { Post } from '../../types/types';
import { useParams } from 'react-router-dom';
import { GenericTable } from '../GenericTable';
import { fetchData } from '../../utils/fetchData';

export const PostsDialog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { userId } = useParams();
  const headers = ['ID', 'TITLE', 'BODY'];

  useEffect(() => {
    fetchData(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((json) => setPosts(json))
      .catch((error) => {
        console.log(error);
      });
  }, [])

  return (
    <GenericTable
      data={posts}
      headers={headers}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
};