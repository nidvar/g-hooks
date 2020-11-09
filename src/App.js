import React,{useState} from 'react';
import styles from './style.css';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {title:'Pikachu',type:'Electric'},
  {title:'Squirtle',type:'Water'},
  {title:'Mew',type:'Psychic'}
]

const options = [
  {label:'Pikachu',value:'Electric'},
  {label:'Squirtle',value:'Water'},
  {label:'Mew',value:'Psychic'},
  {label:'Charizard',value:'Fire'},
  {label:'Oddish',value:'Grass'},
  {label:'Onix',value:'Rock'}
]

function App() {
  const [selected_option, update_selection] = useState(options[0]);
  return (
    <div className="App">
      {/* <Dropdown options={options} selected_option={selected_option} update_selection = {update_selection} /> */}

      <Translate />
    </div>
  );
}

export default App;