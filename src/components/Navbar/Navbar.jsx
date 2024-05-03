import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="container navbar__container">
        <div className='navbar__box-container'>
          <div className='navbar__box-item'></div>
          <div className='navbar__box-item'></div>
          <div className='navbar__box-item'></div>
          <div className='navbar__box-item'>TS</div>
        </div>

        <div className='navbar__features-wrapper'>
          <div className='navbar__features'>
            <a href="#">
              <span>01. </span> About
            </a>
            <a href="#">
              <span>02. </span> Experience
            </a>
            <a href="#">
              <span>03. </span> Work
            </a>
            <a href="#">
              <span>04. </span> Contact
            </a>
            <button className="button">Resume</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
