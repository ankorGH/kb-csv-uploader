import React from 'react';
import {CSVUploader} from './components/CSVUploader'
import {ReviewTable} from './components/ReviewTable'

import './App.css';
import { Container } from '@material-ui/core';

function App() { 
  return (
    <div className="App">
      <Container maxWidth="lg">
        <CSVUploader />
        <ReviewTable />
      </Container>
    </div>
  );
}

export default App;
