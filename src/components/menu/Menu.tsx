import { MenuCard, MenuItem } from './MenuCard';
import flanDiZucca from '../../assets/images/item-flan-di-zucca.jpg'
import polenta from '../../assets/images/item-polenta.jpg'
import tagliereRustico from '../../assets/images/item-tagliere-rustico-di-salumi-e-formaggi.png'
import tartareDiManzo from '../../assets/images/item-tartare-di-manzo.jpg'
import './Menu.css';
import toogleList from '../../hooks/useToggle'

const menuData: MenuItem[] = [
  {
    foodName: 'Flan di zucca',
    price: '8,00 €',
    img: flanDiZucca,
    description: 'Deliziosi antipasti autunnali, piccole monoporzioni dal sapore delicato, ideali come aperitivo sfizioso. In contrasto con il gusto dolce della polpa di zucca, abbiamo guarnito i flan con una crema al Gorgonzola, un formaggio erborinato dal sapore deciso.'
  },
  {
    foodName: 'Polenta gratinata con funghi e formaggi',
    price: '8,00 €',
    img: polenta,
    description: 'Piatto rustico, semplicissimo e molto saporito, perfetto per il giorni freddi e piovosi… una gustosa polenta gratinata con funghi e formaggio filante, facile e veloce, ideale anche come piatto unico.'
  },
  {
    foodName: 'Tagliere rustico di salumi e formaggi',
    price: '12,00 €',
    img: tagliereRustico,
    description: 'Un piatto semplice, almeno in apparenza, apprezzato da tutti perché ognuno può scegliere anche solo uno dei prodotti offerti',
  },
  {
    foodName: 'Tartare di manzo',
    price: '14,00 €',
    img: tartareDiManzo,
    description: 'Un piatto fresco profumato e proteico, personalizzato con aromi e verdure croccanti.',
  }
];

export const Menu = () => {
  const [antipasti, setAntipasti] = toogleList(); 
  const [primi, setPrimi] = toogleList(); 
  const [secondi, setSecondi] = toogleList(); 

  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2 className="headline-1">Menu</h2>
        
        <div className="menu-section">
        <h3 className= {`headline-2 section-btn ${ antipasti ? 'active': ''}`} onClick={setAntipasti}>Antipasti</h3>
          <ul className={`grid-list ${antipasti ? 'active': ''}`}>
            
            {menuData.map(item => <MenuCard {...item}/>)}
          </ul>
        </div>

        <div className="menu-section">
        <h3 className= {`headline-2 section-btn ${ primi ? 'active': ''}`} onClick={setPrimi}>Primi Piatti</h3>
          <ul className={`grid-list ${primi ? 'active': ''}`}>
          
            {menuData.map(item => <MenuCard {...item}/>)}
          </ul>
        </div>

        <div className="menu-section">
        <h3 className= {`headline-2 section-btn ${ secondi ? 'active': ''}`} onClick={setSecondi}>Secondi Piatti</h3>
          <ul className={`grid-list ${secondi ? 'active': ''}`}>
            {menuData.map(item => <MenuCard {...item}/>)}
          </ul>
        </div>
      </div>
    </section>
  );
};