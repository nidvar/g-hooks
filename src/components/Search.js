import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = ()=>{
    const [term_state, update_term_state] = useState('');


    const [results_state, update_results_state] = useState([]);



    useEffect(()=>{

        const search_wiki = async ()=>{
            const data = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term_state
                }
            })
            update_results_state(data.data.query.search)
        }

        const x = setTimeout(()=>{
            if(term_state){
                search_wiki();
            }
        }, 500)
        

        return ()=>{
            clearTimeout(x)
        }
        
    }, [term_state])

    const display_results = results_state.map(a=>{
        return (
            <div key={Math.random()}>
                <h3><a href={`https://en.wikipedia.org/wiki/${a.title}`}>{a.title}</a></h3>
                <p>{a.snippet}</p>
            </div>
        )
    })

    document.body.addEventListener('click',()=>{
        console.log('PIKACHU !!!')
    })

    return(
        <div>
            <label>Enter Search: </label>
            <input 
                value={term_state}
                onChange={e=>{update_term_state(e.target.value)}}
            />
            {display_results}
        </div>
    )
}

export default Search