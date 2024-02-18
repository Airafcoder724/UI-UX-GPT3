import './App.css'
import {  Navbar ,Brand , CTA ,   } from "./components";
import {Headers , Features , Blog, Possibility, Footer} from './containers'
import WhatGPT from './containers/whatGpt3/WhatGPT';
function App() {
  return (
   <div className='App'>
    <div className='gradient__bg'>

     <Navbar/>
     <Headers/>
    </div>
     <Brand/>
     <WhatGPT/>
     <Features/>
     <Possibility/>
     <CTA/>
     <Blog/>
     <Footer/>
     
   </div>
  );
}

export default App;
