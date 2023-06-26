import './Events.css';
import eventiImg1 from '../../assets/images/eventi-1.png';
import eventiImg2 from '../../assets/images/pasqua.png';
import eventiImg3 from '../../assets/images/halloween.png';

export const Events = () => {
  return (
    <section className="events">
      <div>
        <h2 className="headline-1"> Eventi </h2>
        <ul className="banner-list">
          <li className="card-banner">
            <div  className="card-banner-image">
              <img src={eventiImg1} alt="" />
            </div>
              <p>Tutti i mercoledì</p>
          </li>

          <li className="card-banner">
            <div  className="card-banner-image">
              <img src={eventiImg2} alt="" />
            </div>
              <p>15/04/2024</p>
          </li>

          <li className="card-banner">
            <div  className="card-banner-image">
              <img src={eventiImg3} alt="" />
            </div>
              <p>31/10/2023</p>
          </li>
        </ul>
      </div>
    </section>
  );
};