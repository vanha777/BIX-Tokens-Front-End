import React from 'react';

const Banner = () => {
  return (
    <>
      <div className='trade-cryptocurrency-area ptb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='trade-cryptocurrency-content'>
                <h1>
                  <span>Trade Bitcoin</span>
                  <span>for Litecoin</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis egnostrud exercitation ullamco.
                </p>
                <a href='#' className='link-btn'>
                  <i className='fas fa-caret-right'></i> Read More Cryptocurrency
                </a>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='trade-cryptocurrency-box'>
                <div className='currency-selection'>
                  <label>From</label>
                  <input type='text' value='50.00' onChange={e=>e} />
                  <div className='dropdown'>
                    <button
                      className='dropdown-toggle'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <img
                        src='/images/cryptocurrency/cryptocurrency2.png'
                        alt='image'
                      />{' '}
                      Bitcoin
                    </button>
                    <ul className='dropdown-menu'>
                      <li>
                        <div className='dropdown-item'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency1.png'
                            alt='image'
                          />{' '}
                          USD
                        </div>
                      </li>
                      <li>
                        <div className='dropdown-item'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency3.png'
                            alt='image'
                          />{' '}
                          Litecoin
                        </div>
                      </li>
                      <li>
                        <div className='dropdown-item'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency4.png'
                            alt='image'
                          />{' '}
                          XRP
                        </div>
                      </li>
                      <li>
                        <div className='dropdown-item'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency5.png'
                            alt='image'
                          />{' '}
                          Stellar
                        </div>
                      </li>
                      <li>
                        <div className='dropdown-item'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency6.png'
                            alt='image'
                          />{' '}
                          Cardano
                        </div>
                      </li>
                      <li>
                        <div className='dropdown-item'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency7.png'
                            alt='image'
                          />{' '}
                          Groestlcoin
                        </div>
                      </li>
                      <li>
                        <div className='dropdown-item'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency8.png'
                            alt='image'
                          />{' '}
                          Digibyte
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className='features-list'>
                  <li>
                    <div className='d-flex align-items-center'>
                      <span className='first-span'>
                        <i className='fas fa-minus'></i>
                        2.00 USD
                      </span>
                      <span className='second-span'>TOTAL CARD FEES</span>
                    </div>
                  </li>
                  <li>
                    <div className='d-flex align-items-center'>
                      <span className='first-span'>
                        <i className='fas fa-divide'></i>
                        47202
                      </span>
                      <span className='second-span'>CONVERSION RATE</span>
                    </div>
                  </li>
                </ul>
                <div className='currency-selection'>
                  <label>To</label>
                  <input type='text' value='0.00102130' onChange={e=>e}/>
                  <div className='dropdown'>
                    <button
                      className='dropdown-toggle'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <img
                        src='/images/cryptocurrency/cryptocurrency3.png'
                        alt='image'
                      />{' '}
                      Litecoin
                    </button>
                    <ul className='dropdown-menu'>
                      <li>
                        <div className='dropdown-item'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency1.png'
                            alt='image'
                          />{' '}
                          USD
                        </div>
                      </li>
                      <li>
                        <div className='dropdown-item'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency2.png'
                            alt='image'
                          />{' '}
                          Bitcoin
                        </div>
                      </li>
                      <li>
                        <div className='dropdown-item'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency4.png'
                            alt='image'
                          />{' '}
                          XRP
                        </div>
                      </li>
                      <li>
                        <div className='dropdown-item'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency5.png'
                            alt='image'
                          />{' '}
                          Stellar
                        </div>
                      </li>
                      <li>
                        <div className='dropdown-item'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency6.png'
                            alt='image'
                          />{' '}
                          Cardano
                        </div>
                      </li>
                      <li>
                        <div className='dropdown-item'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency7.png'
                            alt='image'
                          />{' '}
                          Groestlcoin
                        </div>
                      </li>
                      <li>
                        <div className='dropdown-item'>
                          <img
                            src='/images/cryptocurrency/cryptocurrency8.png'
                            alt='image'
                          />{' '}
                          Digibyte
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <button type='submit'>
                  <i className='bx bxs-hand-right'></i> Buy Bitcoin
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='lines'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
