import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="container">
          <p className='header__text'>Hi, my name is </p>
          <h1 className='header__heading'>Soliyev To'lqinxon</h1>
          <h2 className='header__heading2'>I build things for the web.</h2>
          <p className='header__biography'>
            I am frontend developer and learner backend side web programming. 
            I want to be a fullstack programmer. Now I am learning how build beautiful and awesome 
            web sites. 
          </p>
          <button className='button'>chek out my projects</button>
      </div>
    </div>
  )
} 

export default Header
