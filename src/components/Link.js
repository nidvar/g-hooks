import React from 'react';

const Link = (props)=>{
    const loading=(e)=>{
        e.preventDefault();
    }
    return(
        <a onClick={loading} href={props.href}>{props.children}</a>
    )
}

export default Link