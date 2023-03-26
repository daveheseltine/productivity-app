import './TodoItems.css'
import Modal from '../Modal/Modal'

function TodoItems(props){

    //Function to delete items in the list which takes id as an argument from props.id
    function deleteItem(id){
        
        if (localStorage.getItem("toDoListItems") !== null){
            //Takes each item and checks if the id != the id passed in
            const newItemArray = props.toDoItems.filter(props => props.id !== id)
            //Overwrites the old local storage with the new array
            window.localStorage.setItem('toDoListItems', JSON.stringify(newItemArray));
            //Updates the stateful component in the todo list
            props.createToDoItems(newItemArray);
        }
    }

    
    //JSX code for the todo list items and takes in the function deleteitems and the props.id as its argument
    return(
        <li className="toDoList row text-wrap" id={props.id}>
            <h4 className='toDoItemH4'>{props.name}</h4>
            <div className='todoItemButtonContainer'>
                <button className='toDoItemButton' onClick={() => deleteItem(props.id)}>Delete</button>
            </div>
        </li>
    );
}

export default TodoItems