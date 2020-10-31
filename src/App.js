import React from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title:'Pikachu',
    type:'Electric'
  },
  {
    title:'Squirtle',
    type:'Water'
  },
  {
    title:'Mew',
    type:'Psychic'
  }
]

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;