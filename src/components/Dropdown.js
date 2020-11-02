import React, {useState, useEffect} from 'react';

const Dropdown = (props)=>{
    const [dropdown_state, toggle_dropdown_state] = useState('closed')

    useEffect(()=>{
        document.body.addEventListener('click',()=>{
            toggle_dropdown_state('closed'); console.log('body clicked')
        },{capture:true})
    },[])

    const display_options = props.options.map(a=>{
        if(a.label === props.selected_option.label){
            return 
        }

        return(
            <div 
                key={Math.random()} 
                className='dropdown_box unselected' 
                onClick={()=>{   
                    props.update_selection(a);
                    console.log('label clicked')
                }}
            >
                {a.label}
            </div>
        )

    })

    const toggle=()=>{
        if(dropdown_state === 'open'){
            toggle_dropdown_state('closed')
        }else if(dropdown_state === 'closed'){
            toggle_dropdown_state('open')
        }
    }

    return(
        <div>
            <label>Select an option</label>
            <div className='dropdown'>
                <div 
                    className='dropdown_box selected' 
                    onClick={()=>{
                        toggle();
                        console.log('dropdown clicked')
                    }}>

                    {props.selected_option.label}
                    
                </div>
                {dropdown_state=='open'?display_options:null}
            </div>
        </div>
    )
}

export default Dropdown