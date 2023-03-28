import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Exercises from './pages/exercises/exercises'
import Home from './pages/home/home'
import Todolist from './pages/todoList/todoList'
import Header from './components/header/header'
import Calendar from './pages/calendar/calendar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/TodoList' element={<Todolist/>} />
        <Route path='/Exercises' element={<Exercises/>} />
        <Route path='/calendar' element={<Calendar/>} />
      </Routes>
    </Router>
  );
}


export default App;
