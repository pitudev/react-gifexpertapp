
import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs.js'

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    
    //const [images, setImages] = useState([]);

    // solo renderizamos la primera vez
    useEffect( () => {

        setTimeout(() => {

            getGifs( category )
            .then( imgs => setState( {
            
                data: imgs,
                loading: false

            } ));
            
        }, 2500);

       
    
    }, [ category ])


    return state;

}
