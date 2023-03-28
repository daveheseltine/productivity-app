import { NavLink, Link} from 'react-router-dom';

const logo = require('../../assets/weights.jpg')

function Header(){
    return(
    <nav className="navbar navbar-expand-lg navbar-dark" style={{fontFamily: 'Georgia', backgroundColor: "#3E83C1"}}>
        {/* <img src={logo} alt="Logo" width="60" height="48" ></img> */}
    <Link className="navbar-brand" to='/Home'>Productivity App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

        <li className="nav-item">
            <NavLink 
            to='/TodoList' 
            end 
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Todo List</NavLink>
        </li>

        <li className="nav-item">
            <NavLink 
            to='/Exercises' 
            end 
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Exercises</NavLink>
        </li>

        <li className="nav-item">
            <NavLink 
            to='/calendar' 
            end 
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Calendar</NavLink>
        </li>

        </ul>
    </div>
    </nav>  
    );
}

export default Header;