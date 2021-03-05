
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {

    //const categories = ['Baloncesto', 'Fútbol', 'Padel'];

    const [categories, setCategories] = useState(['Baloncesto'])

    //const handleAdd = (e) =>{
        //setCategories(categories.concat('Formula 1'));
        //setCategories([...categories, 'Formula 1']);
    //}

    return (

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( category => (

                            <GifGrid 
                                key= {category}
                                category={category} 
                            />
                        
                    ))
                }
            </ol>

        </>

       

    )

}

