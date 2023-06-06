import React, { useEffect, useState } from 'react';
import { Preload } from './components/preload/Preload';
import { Topbar} from './components/topbar/Topbar';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Menu } from './components/menu/Menu';
import './App.css';

function App() {
  const [ loading, setLoading ] = useState(true);
  
  useEffect(()=> {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, []);

  return (
    <div className="App">
      {/* { loading && <Preload/> } */}
      <Topbar/>
      <Header/>
      <Hero/>
      <Menu/>
    </div>
  );
}

export default App;
