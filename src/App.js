import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Banner from './Components/Banner';
import Details1 from './Components/Details1';
import { Route, Routes } from 'react-router-dom';
import Details2 from './Components/Details2';
import Details3 from './Components/Details3';

function App() {

  return (

    <div>
       <Routes>
       <Route path ="/" element = {<Home/>}/>
       <Route path = "/details1/:id" element = {<Details1/>}/>
       <Route path = "/details2/:id" element = {<Details2/>}/>
       <Route path = "/details3/:id" element = {<Details3/>}/>
       </Routes>
    </div>
    
  );
}

export default App;
