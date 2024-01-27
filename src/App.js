import Header from './components/Header';
import './App.css';
import Home  from './components/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from './components/About';
import Cart from './components/Cart';
import Offer from './components/Offer';
import RestaurantMenu from './components/RestaurantMenu';


function App() {
  return (<BrowserRouter>
  <div className='App'>
    <Routes>
      <Route path="/" element={<><Header/> <Home/><RestaurantMenu/></>}/>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/home' element={ <Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/restaurant/:id' element={<Offer/>} />

    </Routes>
    </div>
    </BrowserRouter>
  );  
}


export default App;
