import React, {useState, useRef} from 'react';

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
                //Gets an id for the object by assigning it a random number so it can be mapped later
                id: Math.floor(Math.random() * 1000),
                Name: toDoName,
                Message: toDoMessage,
                Date: date
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
        <div>
            <form className="contactForm">
                <h3 className='toDoh3'>Enter your todo title:</h3>
                <div className="form-group">
                    <label>Your todo name:</label>
                    <input type="text" className="form-control" name="toDoName" value={toDoName} placeholder="Enter name" onChange={HandleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Enter your todo description:</label>
                    <textarea type="text-area" className="form-control" name="toDoMessage" value={toDoMessage} placeholder="Enter Message..." rows="3" onChange={HandleInputChange}/>
                </div>
                <div>
                    <input type="date" name="toDoDate" onChange={HandleInputChange} ref={dateInputRef}/>
                    <p>Selected Date: {date}</p>
                </div>
                <div className='formButtonCustom'>
                    <button type="submit" className="btn btn-primary" onClick={formSubmit}>Submit</button>
                </div>
            </form>   
        </div>
    );
}

export default Form