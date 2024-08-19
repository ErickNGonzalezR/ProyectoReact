function TodoList ({children}){
    return (
        //La propiedad children es la trasformación que se encuentra dentro de un componente
        <ul>
            {children}  
        </ul>
    );
}
export {TodoList};