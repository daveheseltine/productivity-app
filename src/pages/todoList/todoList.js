import { Container } from 'react-bootstrap';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Form from "../../components/Form/Form";
import TodoItems from "../../components/TodoItems/TodoItems";
import React, {useState} from 'react';
import './todoList.css';

function Todolist(){
    
    //Stores the local storage item in state
    const[toDoItems, createToDoItems] = useState(JSON.parse(localStorage.getItem('toDoListItems')) || []);

    console.log(toDoItems);


    return (
    
    <Container id='formbackground'>
        <Row>
          <Col className="col-sm-6" size='sm-6' >
            <h3 className="card-title">Schedule:</h3>
            <Form  createToDoItems={createToDoItems}/>
          </Col>
        
          <Col className="col-sm-6" size='sm-6' id='todolist'>
            <h3 className="card-title2">To Do List:</h3>
            {/* Passes this into form as a prop so it can update the state whenever a form is submitted */}
                 <ul className="toDolistContainer">
                     {toDoItems.map((listItems) => (
                        <TodoItems 
                            key={listItems.id}
                            name={listItems.title}
                            message={listItems.description}
                            date={listItems.date}
                            id={listItems.id}
                            createToDoItems = {createToDoItems}
                            toDoItems = {toDoItems}
                        />
                    )
                    )}
                </ul>

          </Col>
        </Row>
    </Container>



    );
}


export default Todolist;