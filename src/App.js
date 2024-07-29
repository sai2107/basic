
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom'
import Product1 from './components/Product1/Product1';
import Product2 from './components/Product2/Product2';
import Product3 from './components/Product3/Product3';
import Prebook from './components/Prebook/Prebook';
import Compare from './components/Compare/Compare';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/product1' element={<Product1/>}/>
        <Route path='/product2' element={<Product2/>}/>
        <Route path='/product3' element={<Product3/>}/>
        <Route path='/prebook' element={<Prebook/>}/>
        <Route path='/compare' element={<Compare/>}/>
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
