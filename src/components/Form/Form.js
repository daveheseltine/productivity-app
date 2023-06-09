import React, {useState, useRef} from 'react';
import { Container } from 'react-bootstrap';
import Row from '../../components/Row';
import Col from '../../components/Col';


//Function to create a form component
function Form(props){

    //Uses state to update the name and messages for when the form is submitted
    const[toDoName, setToDoName] = useState('');
    const[toDoMessage, setToDoMessage] = useState('');

    //Gets the date, used https://www.makeuseof.com/react-date-picker/ for understanding of this
    const[date, setDate] = useState('');
    const dateInputRef = useRef(null);

    //Updates the state values every time there is an input change for date, name or message
    function HandleInputChange(event){
        const {target} = event;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType === 'toDoName'){
            setToDoName(inputValue)
        }
        else if (inputType === "toDoMessage"){
            setToDoMessage(inputValue)
        }
        else if (inputType === 'toDoDate'){
            setDate(event.target.value)    
        }

    }

    //Function for form submission, store the values in local storage before resetting them, this will then be used to render the todo list items in an unordered list
    function formSubmit(event){
        event.preventDefault();

        //Form must at least have a name
        if (toDoName !== ''){
            //Get the items from local storage or will create an array for local storage
            let toDoListItems = JSON.parse(window.localStorage.getItem('toDoListItems')) || [];

            let newToDo = {
                //Gets an id for the object by assigning it a random number so it can be mapped later between 0 and 1000
                id: Math.floor(Math.random() * 1000),
                title: toDoName,
                description: toDoMessage,
                date: date
            }
            //Pushes these into local storage
            toDoListItems.push(newToDo)
            window.localStorage.setItem('toDoListItems', JSON.stringify(toDoListItems));

            //Recreates the todolist state in todoList.js
            props.createToDoItems(JSON.parse(localStorage.getItem('toDoListItems')))
        }

        //Resets state so a new input can be added
        setToDoName('');
        setToDoMessage('');
        setDate('');
    }
    
    return(
        <Container >
          <Row>
            <Col className="col-sm-12" size='sm-12' id='form'>
                <form className="contactForm" >
                <div className="form-group">
                <p></p>
                    <label>Title:</label>
                    <input type="text" className="form-control" name="toDoName" value={toDoName} placeholder="Enter name/title" onChange={HandleInputChange}/>
                </div>

                <div className="form-group">
                <p></p>
                    <label>Description:</label>
                    <textarea type="text-area" className="form-control" name="toDoMessage" value={toDoMessage} placeholder="Enter Message..." rows="3" onChange={HandleInputChange}/>
                </div>
                <div>
                <p></p>
                    <p >Date: {date}</p>
                    <input type="date" name="toDoDate" onChange={HandleInputChange} ref={dateInputRef} style={{color: 'black'}} />
                    <div className='formButtonCustom'>
                    <button type="submit" className="btn btn-primary" onClick={formSubmit}>Submit</button>

                </div>
                </div>
                </form>
                </Col>

</Row>
</Container>
    );
}

export default Form