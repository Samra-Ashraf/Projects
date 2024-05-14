//import logo from './logo.svg';
import './App.css';
import { Routes,BrowserRouter, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About';
import Contact from '../src/Pages/Contact';
import Pricing from '../src/Pages/Pricing';
import Navbar from '../src/Components/Navbar';
import Sidebar from '../src/Components/Sidebar';
import Reportedthreats from '../src/Pages/Reportedthreats';
import Chatbot from '../src/Components/Chatbot';




function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Sidebar />
    <Chatbot />
    <Routes>
      
      <Route path='/'element={<Home />}/>
      <Route path='/About'element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/Pricing' element={<Pricing />}/>
      <Route path='/Reportedthreats' element={<Reportedthreats />}/>
   </Routes>
   </BrowserRouter>
  );

}

export default App;
