import React,{useState,useEffect} from 'react';
import Link from '../../utils/ActiveLink';

const Navbar = () => {

  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id='navbar' className='navbar-area'>
        <div className='raimo-responsive-nav'>
          <div className='container'>
            <div className='raimo-responsive-menu'>
              <div onClick={() => toggleMenu()} className='hamburger-menu'>
                {showMenu ? (
                  <i className='bx bx-x'></i>
                ) : (
                  <i className='bx bx-menu'></i>
                )}
              </div>
              <div className='logo' >
                <Link legacyBehavior href='/'>
                  <a>
                    <img src='/images/logo.png' alt='logo' />
                  </a>
                </Link>
              </div>


              <div className='responsive-others-option'>
                <div className='d-flex align-items-center'>
                  <div className='option-item'>
                    <Link legacyBehavior href='/authentication' activeClassName='active'>
                      <a className='login-btn'>
                        <i className='bx bx-log-in'></i>
                      </a>
                    </Link>
                  </div>
                 
                  <div className='option-item'>
                    <select className='form-select'>
                      <option value='0'>English</option>
                      <option value='1'>Türkçe</option>
                      <option value='2'>Español</option>
                      <option value='3'>한국어</option>
                      <option value='4'>Italiano</option>
                      <option value='5'>Polski</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className={showMenu? 'show navbar navbar-expand-md navbar-light':'navbar navbar-expand-md navbar-light hide-menu'}>
          <div className='container'>
            <Link legacyBehavior href='/'>
              <a className='navbar-brand'>
                <img src='/images/logo.png' alt='logo' />
              </a>
            </Link>
            <div className='collapse navbar-collapse mean-menu'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link legacyBehavior href='/' activeClassName='active'>
                    <a className=' nav-link'>Home</a>
                  </Link>
                </li>
                  
                <li className='nav-item'>
                  <Link legacyBehavior href='/prices' activeClassName='active'>
                    <a className='nav-link'>Listings</a>
                  </Link>
                </li>
                <li className='nav-item megamenu support'>
                  <Link href='/faq' activeClassName='active'>
                    <a className='dropdown-toggle nav-link'>Contact</a>
                  </Link>
                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link legacyBehavior href='/faq' activeClassName='active'>
                        <a className='nav-link'>
                          <i className='bx bx-info-circle'></i>
                          FAQ
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior href='/guides' activeClassName='active'>
                        <a className='nav-link'>
                          <i className='bx bx-book'></i>
                          Guides
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior href='/wallet' activeClassName='active'>
                        <a className='nav-link'>
                          <i className='bx bx-wallet'></i>
                          Wallets
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior href='/about' activeClassName='active'>
                        <a className='nav-link'>
                          <i className='bx bx-group'></i>
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior href='/contact' activeClassName='active'>
                        <a className='nav-link'>
                          <i className='bx bx-phone-call'></i>
                          Contact Us
                        </a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link legacyBehavior href='/affiliate' activeClassName='active'>
                        <a className='nav-link'>
                          <i className='bx bx-paper-plane'></i>
                          Affiliates
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-item'>
                  <Link legacyBehavior href='/blog' activeClassName='active'>
                    <a className='nav-link'>Projects</a>
                  </Link>
                </li>
              </ul>
              <div className='others-option'>
                <div className='d-flex align-items-center'>
                  <div className='option-item'>
                    <Link legacyBehavior href='/authentication' activeClassName='active'>
                      <a className='login-btn'>
                        <i className='bx bx-log-in'></i> Login
                      </a>
                    </Link>
                  </div>
                  <div className='option-item'>
                    <Link legacyBehavior href='/contact' activeClassName='active'>
                      <a className='default-btn'>
                      <i className='bx bxs-contact'></i> Contact Us
                      </a>
                    </Link>
                  </div>
                  <div className='option-item'>
                    <select className='form-select'>
                      <option value='0'>English</option>
                      <option value='1'>Türkçe</option>
                      <option value='2'>Español</option>
                      <option value='3'>한국어</option>
                      <option value='4'>Italiano</option>
                      <option value='5'>Polski</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
