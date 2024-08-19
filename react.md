# Props
- Las props son u objeto que tiene propiedades 
- hay varias formas de llamar a las props
    function TodoCounter(props){
        props.total
        return(
            <h1>
            Has completado 3 de 5 TODOS
            </h1>
        );
    }

## o 
    function TodoCounter({Total, Completed}){
        return(
            <h1>
            Has completado 3 de 5 TODOS
            </h1>
        );
    }
