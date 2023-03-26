function TodoItems(props){
    return(
        <li>
            <h4>{props.name}</h4>
            <button>Delete</button>
        </li>
    );
}

export default TodoItems