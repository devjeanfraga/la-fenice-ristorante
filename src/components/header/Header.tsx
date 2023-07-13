import { useEffect, useState } from "react";
import { 
  NavBar,
  AnimationButton, 
  logo, 
  useToggle
} from "./headers-protocols";

import './Header.css'

export const Header = () => {
  const [ toggleNavBar, setToggleNavBar ] = useToggle();
  const [ scrolled, setScrolled ] = useState(false);

  const handleHeaderOnScroll = () => {

    const AddAndRemoveActiveClass = () => {
      if(window.scrollY > 50) setScrolled(true); 
      else setScrolled(false); 
    }; 

    window.addEventListener('scroll', AddAndRemoveActiveClass );
    return () => window.removeEventListener('scroll', AddAndRemoveActiveClass)
  };

  useEffect(() => handleHeaderOnScroll()); 

  const dataLinks = [
    {name: "Home", ref: "#home"},
    {name: "Menu", ref: "#menu"},
    {name: "Chi siamo", ref: "#about"},
    {name: "Contatti", ref: "#infos"}
  ];

  return (
    <header className={`header ${ scrolled ? 'active': ''}`}>
      <div className="container">
        <a href="#" className="logo"><img src={ logo } width="165" height="50" alt="La Fenice - Home"/></a>
        
        <AnimationButton toggle={setToggleNavBar} propClassName='nav-button' />
        <NavBar dataNavbar={dataLinks} toggleNavBar={toggleNavBar} toggle={setToggleNavBar}/>
        <div className={`overlay ${ toggleNavBar ? 'active' : ''}`}></div>  

        <div className='nav-links'>
          { dataLinks.map( (i) => <div className="link"><a href={i.ref} key={i.name.toLowerCase().replace(' ', '-')}>{i.name}</a></div>) }
        </div> 
      </div>
    </header>
  );
}