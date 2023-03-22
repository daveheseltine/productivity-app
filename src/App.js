import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Exercices from './pages/exercises/exercises'
import Home from './pages/home/home'
import Todolist from './pages/todoList/todoList'
import Header from './components/header/header'
import FullCalendar from './pages/calendar/fullCalendar'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path='/Home' element={<Home/>} />
        <Route path='/TodoList' element={<Todolist/>} />
        <Route path='/Exercises' element={<Exercices/>} />
        <Route path='/calendar' element={<FullCalendar/>} />
      </Routes>
    </Router>
  );
}

export default App;
