import imgchef1 from '../../assets/images/chef.jpg'
import imgchef2 from '../../assets/images/chef-2.jpg'
import imgchef3 from '../../assets/images/chef-3.jpg'
import imgLuogo1 from '../../assets/images/luogo-6.jpg'
import imgLuogo2 from '../../assets/images/luogo-10.jpg'
import imgLuogo3 from '../../assets/images/luogo-13.jpg'


import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import './About.css';

export const About = () => {
  let slideIdx = 1;

  const dataImages = [imgchef1, imgchef2, imgchef3, imgLuogo1, imgLuogo2, imgLuogo3]; 
  
  let slides = document.getElementsByClassName('slide');
  let dots = document.getElementsByClassName('dot');

  const showSlides = (n: number) => {
    let i, idx;   

    for( i = 0; i < slides.length; i++ ) {
      const slide = slides[i] as HTMLElement;
      slide.style.display = 'none'; 
    };
   
    if( n > slides.length ) slideIdx = 1;
    if (n < 1 ) slideIdx = slides.length;
   
    for(i = 0; i < dots.length; i ++)  {
      dots[i].className = dots[i].className.replace(' active-about', ' ');
    }
    
    const element = slides[slideIdx-1] as HTMLElement;
    element.style.display = 'block';
    dots[slideIdx-1].className += ' active-about';
  };

  const textAbout = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


  const controls = (n: number) => showSlides(slideIdx += n);
  const currentSlide = (n: number) => showSlides(slideIdx = n);

  return (
    <section className="about" id='about'>
      <div className="about-content">
        
        <div className="about-text-container">
          <h2 className='headline-1'>Chi Siamo</h2>
          <p>
            {textAbout}
          </p>
        </div>
        
        <div className="about-image-container">
          <div className="slideshow-container">
            
            {/* images */}
            {
              dataImages.map((i, idx) => {
                let element;
                if (idx === 0) element = <div className="slide active-about fade"><img src={i} alt="image-chi-siamo" /></div>;
                else element = <div className="slide fade"><img src={i} alt="" /></div>;
                return element; 
              })
            }

            {/* Next and previous buttons */}
            <a className="prev" onClick={() => controls(-1)} ><SlArrowLeft/></a>
            <a className="next" onClick={() => controls(1)}><SlArrowRight/></a>

            {/* Dots circles */}
            <div className="dots">
              {dataImages.map((i, idx)=> <span className="dot" onClick={()=> currentSlide(idx + 1)}></span>)}
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}