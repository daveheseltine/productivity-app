import { NavLink, Link} from 'react-router-dom';

function Header(){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            to='/Calendar' 
            end 
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Calendar</NavLink>
        </li>

        <li className="nav-item">
            <NavLink 
            to='/Exercises' 
            end 
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Exercices</NavLink>
        </li>

        <li className="nav-item">
            <NavLink 
            to='/xcal' 
            end 
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Full Calendar</NavLink>
        </li>

        </ul>
    </div>
    </nav>  
    );
}

export default Header;