import React from 'react';
import '../componentesCss/TodoSearch.css'
function TodoSearch (){
    const [searchValue, setSearchValue]= React.useState(""); // Creación de estados

    //Para probar que funciona lo que el usuario digite
    console.log('Los usuarios Buscan todos de ' + searchValue); 
    return (
        <input placeholder="Cortar cebolla" 
        className='TodoSearch'
        value ={searchValue}
        onChange={(event)=>{                        // Actualizador del estado
            setSearchValue(event.target.value);     // Muestra el estado en el input
        }}
        /> 
    );
}
export {TodoSearch}