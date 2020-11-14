import React, {useState, useEffect} from 'react';

const Dropdown = (props)=>{
    const [dropdown_state, toggle_dropdown_state] = useState('closed')
    const display_options = props.options.map(a=>{
        if(a.label === props.selected_option.label){
            return null
        }

        return(
            <div 
                key={Math.random()} 
                className='dropdown_box unselected' 
                onClick={()=>{   
                    props.update_selection(a);
                    toggle_dropdown_state('closed');
                }}
            >
                {a.label}
            </div>
        )

    })

    const toggle=()=>{
        if(dropdown_state === 'open'){
            toggle_dropdown_state('closed')
            console.log('toggle closed')
        }else if(dropdown_state === 'closed'){
            toggle_dropdown_state('open')
            console.log('toggle open')
        }
    }

    useEffect(()=>{
        document.body.addEventListener('click',(e)=>{
            const x = document.querySelector('body')
            if(e.target == x){
                toggle_dropdown_state('closed')
            }
        },{capture:true})
    },[])

    return(
        <div className='overseer'>
            <label>{props.label}</label>
            <div className='dropdown'>
                <div className='dropdown_box selected' onClick={ ()=>{toggle()} }>
                    {props.selected_option.label}
                </div>
                {dropdown_state=='open'?display_options:null}
            </div>
        </div>
    )
}

export default Dropdown