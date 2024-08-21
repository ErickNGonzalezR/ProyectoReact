import '../componentesCss/TodoList.css'
function TodoList ({children}){
    return (
        //La propiedad children es la trasformación que se encuentra dentro de un componente
        <ul className='TodoList'>
            {children}  
        </ul>
    );
}
export {TodoList};