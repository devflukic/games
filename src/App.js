import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import DialogWrapper from './components/DialogWrapper';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <DialogWrapper />
    </div>
  );
}

export default App;
