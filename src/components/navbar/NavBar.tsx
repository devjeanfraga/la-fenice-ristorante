// import { useEffect } from 'react';
import { SlClose } from 'react-icons/sl';
import { Separator } from '../reused-components/ReusedComponents';
import logo from '../../assets/images/logo-la-fenice-3.webp';
import './NavBar.css';



interface DataNavbar {
  dataNavbar: Data[];
  toggleNavBar?: boolean;
  toggle: any;
}

interface Data {
  name: string;
  ref: string;
}

export const NavBar = ( { dataNavbar, toggleNavBar, toggle}: DataNavbar) => {
  
  return (
    <nav className={`navbar ${toggleNavBar ? 'active': ''}`}>
          
    <button className="close-btn" aria-label="close menu" onClick={toggle}>
      <SlClose aria-hidden="true"/>
    </button>

    <a href="#" className="logo">
      <img src={logo} width="200" height="60" alt="La Fenice - Home"/>
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
      <p className="headline-1 navbar-title">Vi Aspettiamo</p>

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