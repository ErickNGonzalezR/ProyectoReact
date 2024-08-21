import '../componentesCss/TodoItem.css' 
/*
    Para poder cambiar las clases no se colocan className = 'nombreClase' sino que se colocan className = {`nombreClase`}
*/

function TodoItem (props){
    return (
        <li className='TodoItem'>
            <span className={`Icon Icon-check 
                ${props.completed && "Icon-check--active"}  
                /* 
                    Es un if ternario si la propiedad completed es true agrega  la otra className pero si 
                    es false no 
                    Se llama clases dinámicas
                */ 
            `}>
                V 
            </span>
            <p className={`TodoItem-p  
                ${props.completed && "TodoItem-p--complete"}
            `}>
                {props.text}
            </p>
            <span className='Icon Icon-delete'>
                X
            </span>
        </li>
    );
}
export {TodoItem};