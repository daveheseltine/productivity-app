import Form from "../../components/Form/Form"
import React, {useState} from 'react';

function Todolist(){
    
    const[toDoItems, createToDoItems] = useState(JSON.parse(localStorage.getItem('toDoListItems')));

    console.log(toDoItems);


    return (
        <div>
            <Form createToDoItems={createToDoItems}/>
        </div>
    );
}


export default Todolist;