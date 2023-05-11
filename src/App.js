import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
// import Navbar from './components/navbar/Navbar';
import Landing from './components/hero/Hero';
// import Hero from './components/hero/Hero';
import Signup from './components/signup/Signup';
import Signin from './components/singin/Signin';
// import Siderbar from './components/siderbar/Siderbar';
// import Topbar from './components/topbar/Topbar';
import Dashboard from './components/dashboard/Dashboard';
import Blog from './components/table/Blog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Landing/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/signin' element={<Signin/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/blog' element={<Blog/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
