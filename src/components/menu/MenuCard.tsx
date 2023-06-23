import { useState, useRef } from "react";

export interface MenuItem {
  img: string, 
  foodName: string;
  price: string;
  description: string;
}

// 
export const MenuCard = ({ img, foodName, price, description }: MenuItem) => {
  const key = foodName.toLowerCase().replaceAll(' ', '-');
  const [ readMore , setReadMore ] = useState(false);
  const toggleReadMore = () =>  setReadMore(!readMore); 
  
  const countWords = (text: string) => {
    let nWords = 0, idx = 0; 
    for (let i = 0; i < text.length && nWords <= 6; i++) {
      if (text[i] === ' ') {
        nWords += 1;
        idx = i;  
      }
    }
    return {nWords, idx}; 
  };

  const handleDescriptionWithReadMore = () => {
    const { nWords, idx } = countWords(description);

    if ( nWords >= 7 ) {
      let visibleDescription = description.slice(0, idx);
      return (
        <p className="card-text label-1">
        {visibleDescription}...
        <span className={ !readMore ? 'toggle-description' : ''}>{description.slice(idx+1)}</span>
        <span className='read-button'onClick={toggleReadMore}>{ !readMore ? 'read more' : 'read less'}</span>
        </p>
      );
    } else {
      return (<p className="card-text label-1">{description}</p>);
    }
  }

  return (
    <li key={key}>
      <div className="menu-card">

        <figure className="card-banner">
          <img className= "img-cover" src={img} alt={foodName} />
        </figure>

        <div className="card-text-container">
          <div className="title-wrapper">
            <h3 className="title-3">
              <a href="#" className="card-title">{foodName}</a>
            </h3>
            <span className="span title-2">{price}</span>
          </div>
          {handleDescriptionWithReadMore()}
        </div>
      </div>
    </li>
  )
};