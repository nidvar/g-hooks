import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

let x;

const Convert = (props)=>{

    const [the_result, translate_result] = useState('');

    const [the_timer, update_the_timer] = useState(0);

    useEffect(()=>{
        const grab_translation = async ()=>{
            const the_data = await Axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: props.text,
                    target: props.language.value,
                    key: API_KEY
                }
            })
            console.log(the_data.data.data.translations[0].translatedText)
            translate_result(the_data.data.data.translations[0].translatedText)
            console.log(props.text)
        }
        
        clearTimeout(x)

        x = setTimeout(()=>{
            grab_translation()
        },1000)


            



    }, [props.language, props.text])


    

    return(
        <div>
            <p>{the_result}</p>
        </div>
    )
}

export default Convert