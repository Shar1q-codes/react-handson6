
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Students from './Components/Students';
import Data from './Components/Data'
import AddStudent from './Components/AddStudent';
import Edit from './Components/Edit';


function App() {
  return (
    <Data>
    <div className="App">
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/home' element= {<Home/>}/>
        <Route path = '/students' element = {<Students/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/students/addStudent' element={<AddStudent/>}/>
        <Route path='/students/edit/:id' element={<Edit/>}/>
      </Routes> 
      </BrowserRouter>
    </div>
    </Data>
  );
}

export default App;
