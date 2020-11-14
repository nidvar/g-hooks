import React, {useState} from 'react';

import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {label:'Hindi',value:'hi'},
    {label:'Afrikaans',value:'af'},
    {label:'Arabic',value:'ar'},
]

const Translate = ()=>{
    const [language, changeLanguage] = useState(options[0])

    const [text, setText] = useState('')

    return(
        <div>
            <h3>Translate</h3>
            <input type='text' value={text} onChange={  (e)=>{setText(e.target.value)}  }/>
            <Dropdown label={'Select Language'} options={options} selected_option={language} update_selection = {changeLanguage} />
            <Convert text = {text} language = {language}/>
        </div>
    )
}

export default Translate