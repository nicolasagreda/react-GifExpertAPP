import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';
import React, { useState } from 'react'
import { colorFondo } from './components/helpers/colorFondo'



const GifExpertAPP = () => {

    const [categories, setCategories] = useState(['One punch']);


    return (
        <>
            <div id="gifExpert">
                <h2>GifExpertAPP</h2>
                <button id="colorFondo" type='button' onClick={colorFondo} >Modo Oscuro</button>
            </div>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => (
                        < GifGrid
                            category={category}
                            key={category}
                        />
                    ))
                }
            </ol>
        </>
    )
};

export default GifExpertAPP;