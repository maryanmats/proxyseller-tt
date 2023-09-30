import React from 'react';
import { Home } from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { AppContainer } from './components/AppContainer/AppContainer';
import { PostsDialog } from './components/PostsTable/PostsTable';
import { AlbumsTable } from './components/AlbumsTable/AlbumsTable';

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
