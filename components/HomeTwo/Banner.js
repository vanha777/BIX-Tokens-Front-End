const Banner = () => {
  return (
    <>
      <div className='banner-area'>
        <div className='container'>
          <div className='banner-content'>
            <h1>Buy & Sell Cryptocurrency Easy, Fast and Secure!</h1>
            <div className='cryptocurrency-search-box'>
              <div className='row'>
                <div className='col-lg-5 col-md-5'>
                  <div className='currency-selection'>
                    <label>YOU PAY</label>
                    <input type='text' value='50.00' onChange={(e) => e} />
                    <div className='dropdown'>
                      <button
                        className='dropdown-toggle'
                        type='button'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <img
                          src='/images/cryptocurrency/cryptocurrency1.png'
                          alt='image'
                        />{' '}
                        USD
                      </button>
                      <ul className='dropdown-menu'>
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
                </div>
                <div className='col-lg-5 col-md-5'>
                  <div className='currency-selection'>
                    <label>YOU RECEIVE</label>
                    <input type='text' defaultValue='0.00102130' onChange={(e) => e} />
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
                        BTC
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
                </div>
                <div className='col-lg-2 col-md-5'>
                  <div className='buy-btn'>
                    <button type='submit'>
                      <i className='bx bxs-hand-right'></i> Buy Bitcoin
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='banner-image'>
            <img src='/images/banner/banner-img2.png' alt='image' />
          </div>
        </div>
        <div className='shape1'>
          <img src='/images/shape/shape1.png' alt='image' />
        </div>
        <div className='shape2'>
          <img src='/images/shape/shape2.png' alt='image' />
        </div>
        <div className='shape3'>
          <img src='/images/shape/shape3.png' alt='image' />
        </div>
        <div className='shape4'>
          <img src='/images/shape/shape4.png' alt='image' />
        </div>
      </div>
    </>
  );
};

export default Banner;
