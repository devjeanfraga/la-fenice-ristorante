import { MenuCard } from './MenuCard';
import menuData  from '../../data/menu-data';
import toogleList from '../../hooks/useToggle'
import './Menu.css';

export const Menu = () => {
  const [antipasti, setAntipasti] = toogleList(), 
        [primi, setPrimi] = toogleList(),
        [secondi, setSecondi] = toogleList(), 
        menu = menuData();

  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2 className="headline-1">Menu</h2>
        
        <div className="menu-section">
        <h3 className= {`headline-2 section-btn ${ antipasti ? 'active': ''}`} onClick={setAntipasti}>Antipasti</h3>
          <ul className={`grid-list ${antipasti ? 'active': ''}`}>
            
            {menu.antipasti.map(item => <MenuCard {...item}/>)}
          </ul>
        </div>

        <div className="menu-section">
        <h3 className= {`headline-2 section-btn ${ primi ? 'active': ''}`} onClick={setPrimi}>Primi Piatti</h3>
          <ul className={`grid-list ${primi ? 'active': ''}`}>
          
            {menu.primi.map(item => <MenuCard {...item}/>)}
          </ul>
        </div>

        <div className="menu-section">
        <h3 className= {`headline-2 section-btn ${ secondi ? 'active': ''}`} onClick={setSecondi}>Secondi Piatti</h3>
          <ul className={`grid-list ${secondi ? 'active': ''}`}>
            {menu.secondi.map(item => <MenuCard {...item}/>)}
          </ul>
        </div>
      </div>
    </section>
  );
};