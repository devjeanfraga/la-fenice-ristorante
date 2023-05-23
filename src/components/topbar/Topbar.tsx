import { SlLocationPin, SlClock, SlCallOut, SlEnvolope } from 'react-icons/sl';
import { Separator } from '../reused-components/ReusedComponents';
import './Topbar.css';

export const Topbar = () => {


  return (
    <div className="topbar" id="topbar">
      
      <address className="topbar-item">
        <div className="icon">
          <SlLocationPin  aria-hidden="true"/>
        </div>
        <span className='span'>
          Via Tambellina, 46, 44123 Ferrara FE, Itália
        </span>
      </address>

      <Separator/>

      <div className="topbar-item item-2">
        <div className="icon">
          <SlClock aria-hidden="true"/>
        </div>
        <span className="span"> Daily: 8.00 am to 10.00 pm</span>
      </div>
    
      <Separator/>

      <a href="" className="topbar-item link">
        <div className="icon">
          <SlCallOut/>
        </div>
        <span className="span">+39 22 90808080</span>
      </a>

      <Separator/>

      <a href="" className="topbar-item link">
        <div className="icon">
          <SlEnvolope/>
        </div>
        <span className="span">any@mail.com</span>
      </a>  
    </div>
  );
};