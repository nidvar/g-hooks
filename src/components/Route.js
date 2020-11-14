import React from 'react';

const Route = (props)=>{
    const display = ()=>{
        if(props.path === window.location.pathname){
            return props.children
        }else{
            return null
        }
    }
    return(
        <div>
            {display()}
        </div>
    )
}

export default Route