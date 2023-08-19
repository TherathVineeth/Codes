import { BrowserRouter as Router , Routes,Route,Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar, { Homepg } from './Components/Homepage/Home';
import Login from './Components/Signin&Signup/Signin';
import Nav from './Components/Navbar/Nav';
import MenuPage from './Components/Menu/Menu';
import AddFoodForm from './Components/Menu/AddFoodForm';
import Restaurant from './Components/Signin&Signup/Signup';

function App() {
  const handleLogin = (username, password) => {
  
    console.log('Logged in with:', username, password);
  };
  return (
    <Router>
      <div className='App'>
        <Nav/>
       
      <Routes>
        <Route path='/' element={<Homepg />} index />
        <Route path='/home' element={<Homepg/>}/>
        <Route path="/add-food" element={<AddFoodForm/>} />
          <Route path='/menu' exact element={<MenuPage/>} />
          <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
          <Route path='/signup' exact element={<Restaurant/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
