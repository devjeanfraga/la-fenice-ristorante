import heroSlider  from '../../assets/images/hero-slider-4-light.webp';
import { Button } from '../buttom/Button';
import heroTableIcon  from '../../assets/images/table-icon.webp'
import './Hero.css'; 

export const Hero = () => {
  return (
    <section className="hero text-center" aria-label='home' id='home'>
      
      <ul className="hero-slider">

        <li className="slider-item active">

          <div className="slider-bg">
            <img src={heroSlider} alt="img-cover" width='1880' height='950' className="img-cover" />
          </div>

          <p className="label-2 section-subtitle slider-reveal">Il classico contemporaneo Ferrarese</p>

          <h1 className="display-1 hero-title slider-reveal">
            Piatti Tradizionali <br/> 
            Sapore & Fantasia  
          </h1>
          
          <p className="body-2 hero-text slider-reveal">
            Vieni con la famiglia e prova la gioia del cibo appetitoso
          </p>
{/* 
          <a href="#" className="btn slider-reveal">
            <span className="text text-1">Visualizza il nostro menu </span>

            <span className="text text-2" aria-hidden="true">Visualizza il nostro menu</span>
          </a> */}
          <Button/>
        </li>

      </ul>

      <button className="slider-btn" aria-label="slider to previous">
        {/* some icon */}
      </button>

      <a href="#" className="hero-btn">
          <img src={heroTableIcon} alt=""/>
          <span className="label-2 text-center span">Prenota un tavolo</span>
      </a>

    </section>   
  );
}