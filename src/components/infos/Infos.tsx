import './Infos.css';
import { SlLocationPin, SlPhone, SlLogin } from 'react-icons/sl';

export const Infos = () => {
  return (
    <section className="infos" id='infos'>
      <h2 className='headline-1'> Informazione </h2>
      <div className="infos-container">
        <div className="hours">
          <h3> <SlLogin className='info-icons'/> Orari di apertura </h3>
          
          <p>Lunedi<span className="span-hour"> 20:00-23:30 </span></p>
          <p>Martedì<span className="span-hour"> Chiuso </span></p>
          <p>Mercoledì<span className="span-hour"> 20:00-23:30 </span></p>
          <p>Giovedì<span className="span-hour"> 20:00-23:30 </span></p>
          <p>Venerdì<span className="span-hour"> 20:00-23:30 </span></p>    
          <p>Sabato<span className="span-hour"> 12:00-15:00, 20:00-23:30 </span></p>
          <p>Domenica<span className="span-hour"> 12:00-15:30, 20:00-23:30 </span></p>
        </div>

        <div className="location">
          <h3> <SlLocationPin className='info-icons'/> Indicazioni Stradali </h3>
          <a >
            <p>
              Via Tambellina, 46<br/>
              44123 Ferrara FE<br/>
              Italia
            </p>
          </a>
        </div>

        <div className="contact">
          <h3> <SlPhone className='info-icons'/> Contati </h3>
          <a href="">+39(532)338 539 2168</a>
        </div>
      </div>
    </section>   
  );
}