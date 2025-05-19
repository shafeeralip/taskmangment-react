


import {BrowserRouter as Router ,Route,Routes, Link} from 'react-router-dom'
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import EditTaskForm from "./components/EditTaskForm";


export default function App(){
  return (
    <Router>
      <nav>
        <Link to="/">List</Link>
        <Link to="/add">Add Task</Link>
      </nav>
      <Routes>
        <Route path='/' element={<TaskList/>} />
        <Route path="/add" element={<TaskForm />} />
        <Route path="/edit/:id" element={<EditTaskForm />} />
      </Routes>
    </Router>

  );
}


