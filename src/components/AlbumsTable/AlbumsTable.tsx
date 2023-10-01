import React, { useState, useEffect } from 'react';
import { Album } from '../../types/types';
import { useParams } from 'react-router-dom';
import { GenericTable } from '../GenericTable';
import { fetchData } from '../../utils/fetchData';

export const AlbumsTable: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { userId } = useParams();

  useEffect(() => {
    fetchData(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then((json) => setAlbums(json))
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const headers = ['ID', 'Title'];

  return (
    <GenericTable
      data={albums}
      headers={headers}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
};