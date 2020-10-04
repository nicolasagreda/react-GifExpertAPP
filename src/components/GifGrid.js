

import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import derecha from '../assets/img/derecha.png'
import izquierda from '../assets/img/izquierda.png'


function GifGrid({ category }) {

    const {data: images, loading } = useFetchGifs( category );
    
    const izq = ()=> document.getElementById( category ).scrollLeft -= 50;
    const der = ()=> document.getElementById( category ).scrollLeft += 50;
        
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>loading</p>}
            <div className="contenedor ">
                <img src={ izquierda } onClick={ izq } alt={'icono-izquierda'} className="img-icon"/>
                <div className="card-grid" id={ category }>
                    {
                        images.map(( img ) =>
                        <GifGridItem
                                key= {img.id}
                                {...img}
                        />
                        
                        )
                    }
                </div>
                <img src={ derecha } onClick={ der } alt='icono-derecha' className="img-icon"/> 
            </div>
        </>
    )
}

export default GifGrid
