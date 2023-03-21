import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Calendar from './pages/calendar/calendar'
import Exercices from './pages/exercises/exercises'
import Home from './pages/home/home'
import Todolist from './pages/todoList/todoList'
import Header from './components/header/header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path='/Home' element={<Home/>} />
        <Route path='/Todo-list' element={<Todolist/>} />
        <Route path='/Calendar' element={<Calendar/>} />
        <Route path='/Exercises' element={<Exercices/>} />
      </Routes>
    </Router>
  );
}

export default App;
