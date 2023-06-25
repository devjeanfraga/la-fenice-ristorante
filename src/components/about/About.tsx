import { useEffect } from 'react';
import imgchef1 from '../../assets/images/chef.jpg'
import imgchef2 from '../../assets/images/chef-2.jpg'
import imgchef3 from '../../assets/images/chef-3.jpg'
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import './About.css';

export const About = () => {
  let slideIdx = 1;
  let idxAuto = 0;
  
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
  
  const showSlidesAuto = () => {
    let i;   

    for(i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      slide.style.display = 'none'; 
    };
    
    idxAuto++;
    if ( idxAuto > slides.length ) idxAuto = 1;
    for(i = 0; i < dots.length; i ++)  {
      dots[i].className = dots[i].className.replace(' active-about', ' ');
    }
    
    const element = slides[idxAuto-1] as HTMLElement;
    element.style.display = 'block';
    dots[idxAuto-1].className += ' active-about';
    
    setTimeout(showSlidesAuto, 4000);
  };

  const textAbout = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  
  useEffect(() => {
    showSlidesAuto();
  }, []);

  const controls = (n: number) => showSlides(slideIdx += n);
  const currentSlide = (n: number) => showSlides(slideIdx = n);

  return (
    <section className="about">
      <h2 className='headline-1'>Il Cuoco</h2>
      <div className="about-content">
        <div className="about-text-container">
          <p>
            {textAbout}
          </p>
        </div>
        
        <div className="about-image-container">
          <div className="slideshow-container">
            
            {/* images */}
            <div className="slide active-about fade"><img src={imgchef1} alt="" /></div>
            <div className="slide fade"><img src={imgchef2} alt="" /></div>
            <div className="slide fade"><img src={imgchef3} alt="" /></div>
            
            {/* Next and previous buttons */}
            <a className="prev" onClick={() => controls(-1)} ><SlArrowLeft/></a>
            <a className="next" onClick={() => controls(1)}><SlArrowRight/></a>

            {/* Dots circles */}
            <div className="dots">
              <span className="dot" onClick={()=> currentSlide(1)}></span>
              <span className="dot" onClick={()=> currentSlide(2)}></span>
              <span className="dot" onClick={()=> currentSlide(3)}></span>
            </div>
          </div>
        
        </div>
      </div>
      

    </section>
  );
}