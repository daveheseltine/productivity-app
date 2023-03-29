import './TodoItems.css'
import ShowMore from '../ShowMore/ShowMore';
import anime from 'animejs/lib/anime.es.js';

function TodoItems(props){

    //Function to delete items in the list which takes id as an argument from props.id
    function deleteItem(id){
        
        if (localStorage.getItem("toDoListItems") !== null){
            deleteAnimation();
            setTimeout(function() {
                //Takes each item and checks if the id != the id passed in
                const newItemArray = props.toDoItems.filter(props => props.id !== id)
                //Overwrites the old local storage with the new array
                window.localStorage.setItem('toDoListItems', JSON.stringify(newItemArray));
                //Updates the stateful component in the todo list
                props.createToDoItems(newItemArray);
            }, 750)

        }
    }

    function runStartAnimation(){
        anime({
            targets: [document.getElementById(props.id)],
            scale: '1.2'
        })
    }
    function runEndAnimation(){
        anime({
            targets: [document.getElementById(props.id)],
            scale: '1'
        })
    }

    function deleteAnimation(){
        anime({
            targets: document.getElementById(listId),
            keyframes: [
                {scale: 1.1},
                {scale: 0}
            ],
            duration: 750
        })
    }

    //Needed to use as props for the modal
    const name = props.name;
    const message = props.message;
    const date = props.date;

    const listId = Math.floor(Math.random() * 1000)
    
    
    //JSX code for the todo list items and takes in the function deleteitems and the props.id as its argument
    return(
        <li className="toDoList row text-wrap" id={listId}>
            <h5 className='toDoItemH4'>{props.name}</h5>
            <div className='todoItemButtonContainer'>
                <ShowMore
                name={name}
                message={message}
                date={date}
                />
                <button className='toDoItemButton' id={props.id} onClick={() => deleteItem(props.id)} onMouseEnter={() => runStartAnimation()} onMouseLeave={() => runEndAnimation()}>Delete</button>
            </div>
            
        </li>
    );
}

export default TodoItems