import './AnimationButton.css';

interface AnimationButtonProps {
  toggle: any; 
  propClassName: string;
}


export const AnimationButton = ({ toggle, propClassName }: AnimationButtonProps) => {
  return (
    <button 
    className={ `animation-button ${propClassName}`  }
    aria-label="open menu" 
    onClick={toggle}
    >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
    </button>
  );
}