import Form from "../../components/Form/Form";
import TodoItems from "../../components/TodoItems/TodoItems";
import React, {useState} from 'react';
import './todoList.css';

function Todolist(){
    
    //Stores the local storage item in state
    const[toDoItems, createToDoItems] = useState(JSON.parse(localStorage.getItem('toDoListItems')) || []);

    console.log(toDoItems);


    return (
        <div>
            {/* Passes this into form as a prop so it can update the state whenever a form is submitted */}
            <Form createToDoItems={createToDoItems}/>
            <ul className="toDolistContainer container">
                {toDoItems.map((listItems) => (
                    <TodoItems 
                        key={listItems.id}
                        name={listItems.Name}
                        message={listItems.message}
                        date={listItems.Date}
                        id={listItems.id}
                        createToDoItems = {createToDoItems}
                        toDoItems = {toDoItems}
                    />
                )
                )}
            </ul>
        </div>
    );
}


export default Todolist;