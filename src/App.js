import React from 'react';
import styles from './style.css';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {title:'Pikachu',type:'Electric'},
  {title:'Squirtle',type:'Water'},
  {title:'Mew',type:'Psychic'}
]

const options = [
  {label:'Pikachu',value:'Electric'},
  {label:'Squirtle',value:'Water'},
  {label:'Mew',value:'Psychic'}
]

function App() {
  return (
    <div className="App">
      <Dropdown options={options}/>
    </div>
  );
}

export default App;