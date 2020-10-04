import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories,setidContenedor}) => {

    const [inputValue, setinputValue] = useState('')
    

    const hanldeOnClick = (e) =>{
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log( inputValue )
        if(inputValue.trim().length >2){
            setCategories( (cats) => [inputValue,...cats])
        }
    }

    return (

        <form onSubmit ={ handleSubmit }>
            <input
                type = "search"
                onChange = { hanldeOnClick }
                placeholder = "Busca tu Gif"
            />
        </form>
    )
}

AddCategory.propTypes= {
    
    setCategories: PropTypes.func.isRequired
}

