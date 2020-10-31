import React from 'react';

const Dropdown = (props)=>{
    const display_options = props.options.map(a=>{
        return(
            <div key={Math.random()} className='dropdown_box'>
                {a.label}
            </div>
        )
    })
    return(
        <div>
            <h1>Dropdown</h1>
            {display_options}
        </div>
    )
}

export default Dropdown