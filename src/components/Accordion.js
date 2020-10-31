import React, {useState} from 'react';

const Accordion = (props)=>{

    const [the_state, updating_state] = useState('nul')

    const clicking_title = (a, index)=>{
        console.log('clicked on: '+ index);

        updating_state(a)
        console.log(the_state)
    }

    const display_items = props.items.map((a, b)=>{
        return (
            <div key={Math.random()} className='accordion'>
                <h3 onClick={()=>clicking_title(a, b)} >{a.title}</h3>
                <p>{a.type}</p>
            </div>
        )
    })

    return(
        <div>
            <h1>Accordion</h1>
            {display_items}
        </div>
    )
}

export default Accordion