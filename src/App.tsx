import React from 'react';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { AppContainer } from './components/AppContainer';
import { PostsDialog } from './components/PostsTable';
import { AlbumsTable } from './components/AlbumsTable';

function App() {
  return (
    <div className="App">
      <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:userId" element={<PostsDialog />} />
        <Route path="/albums/:userId" element={<AlbumsTable />} />
      </Routes>
      </AppContainer>
    </div>
  );
}

export default App;
