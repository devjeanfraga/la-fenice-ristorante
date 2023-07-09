import React, { useEffect, useState } from 'react';
import { Preload } from './components/preload/Preload';
import { Topbar} from './components/topbar/Topbar';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Menu } from './components/menu/Menu';
import { About } from './components/about/About';
import { Events } from './components/events/Events';
import { Footer } from './components/footer/Footer';
import { Infos } from './components/infos/Infos';
import './App.css';

function App() {

  return (
    <div className="App">
      <Topbar/>
      <Header/>
      <Hero/>
      <About/>
      <Menu/>
      <Events/>
      <Infos/>
      <Footer/>
    </div>
  );
}

export default App;


  






// const [ loading, setLoading ] = useState(true);
  
  // useEffect(()=> {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000);
  // }, []);