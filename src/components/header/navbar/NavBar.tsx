import { useEffect } from 'react';
import { SlClose } from 'react-icons/sl';
import { Separator } from '../../reused-components/ReusedComponents';
import { addEventOnElements, removeEventOnElements } from '../../../helpers/helpers';
import logo from '../../../assets/images/logo-la-fenice-3.webp';
import './NavBar.css';

interface DataNavbar {
  dataNavbar: Data[];
}

interface Data {
  name: string;
  ref: string;
}

export const NavBar = ( { dataNavbar }: DataNavbar ) => {

  const elements = document.querySelectorAll('[data-nav-toggle]') 
  const navbar = document.querySelector('.navbar')
  const overlay = document.querySelector('.overlay')

  const toogleNavBar = () => {
    navbar?.classList.toggle('active');
    overlay?.classList.toggle('active');
    document.body.classList.toggle('nav-active');
  }

  useEffect(() => {
    addEventOnElements(elements, 'click', toogleNavBar);
    return () => removeEventOnElements(elements, 'click', toogleNavBar)
  })
  
  return (
    <nav className="navbar">
          
    <button className="close-btn" aria-label="close menu" data-nav-toggle>
      <SlClose aria-hidden="true"/>
    </button>

    <a href="" className="logo">
      <img src={logo} width="165" height="50" alt="La Fenice - Home"/>
    </a>  

    <ul className="navbar-list">
      {
        dataNavbar.map( i => {
          return (
            <li className="navbar-item">
              <a href={i.ref} className="navbar-link hover-underline">
                <Separator/>
                <span className="span">{i.name}</span>
              </a>
            </li>
          )
        })
      }
    </ul>

    <div className="text-center">
      <p className="headline-1 navbar-title">Veniteci a trovarci</p>

      <address className="body-4">
        Via Tambellina, 46
        44123, Ferrara, FE-Italia
      </address>
      <Separator/>
      <p className="contact-label"> Contatti </p>  
      
      <a href="wa.me/5521998409907" className="body-4 sidebar-link">
        whatsapp
      </a>

      <a href="tel:+5521998409907" className="body-4 sidebar-link">
        Chiama ora: +5521998409907
      </a>
    </div>

  </nav>
  );
}