import './NavOpenButton.css';

export const NavOpenButton = () => {
  return (
    <button className="nav-open-btn" aria-label="open menu" data-nav-toggler >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
    </button>
  );
}