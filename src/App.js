
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import StudentList from './StudentList';
import StudentCreate from './StudentCreate';
import StduentDetails from './StduentDetails';
import StudentEdit from './StudentEdit';
function App() {
  return (
    <div className="App">
      <h1>Student Dashboard</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StudentList />}></Route>
          <Route path='/student/create' element={<StudentCreate />} />
          <Route path='/student/details/:stuid' element={<StduentDetails />} />
          <Route path='/student/edit/:stuid' element={< StudentEdit/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
