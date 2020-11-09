import React, {useState} from 'react';

import Dropdown from './Dropdown';

const options = [
    {label:'Hindi',value:'hi'},
    {label:'Afrikaans',value:'af'},
    {label:'Arabic',value:'ar'},
]

const Translate = ()=>{
    const [language, changeLanguage] = useState(options[0])
    return(
        <div>
            <h3>Translate</h3>
            <Dropdown options={options} selected_option={language} update_selection = {changeLanguage} />
        </div>
    )
}

export default Translate