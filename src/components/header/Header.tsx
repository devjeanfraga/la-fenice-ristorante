import { 
  NavBar,
  NavOpenButton, 
  logo 
} from "./headers-protocols";
import './Header.css'
import { useEffect } from "react";

export const Header = () => {

  const header = document.querySelector('.header');
  let lastScrollPos = 0; 

  const hideHeader = () => {
    const isScrollBottom = lastScrollPos < window.scrollY 
    isScrollBottom 
      ? header?.classList.add('hide')
      : header?.classList.remove('hide'); 

    lastScrollPos = window.scrollY; 
  }; 

  const handleHeaderOnScroll = () => {
    const AddAndRemoveActiveClass = () => {
      if(window.scrollY > 50) {
        header?.classList.add('active');
        hideHeader();
      } else {
        header?.classList.remove('active');
      } 
    }; 

    window.addEventListener('scroll', AddAndRemoveActiveClass );
    return () => window.removeEventListener('scroll', AddAndRemoveActiveClass)
  };

  useEffect(() => handleHeaderOnScroll()); 

  const dataNavbar = [
    {name: "Home", ref: "#home"},
    {name: "Menu", ref: "#menu"},
    {name: "Chi siamo", ref: "#chiSiamo"},
    {name: "Il cuoco", ref: "#ilCuoco"},
    {name: "Richiede un preventivo", ref: "#richiedeUnPreventivo"},
    {name: "Contatti", ref: "#contatti"}
  ];

  return (
    <header className="header">
      <div className="container">

        <a href="#" className="logo"><img src={ logo } width="165" height="50" alt="La Fenice - Home"/></a>
        <NavOpenButton/>
        <NavBar dataNavbar={ dataNavbar }/>
        <div className="overlay" data-nav-toggle></div>   

      </div>
    </header>
  );
}