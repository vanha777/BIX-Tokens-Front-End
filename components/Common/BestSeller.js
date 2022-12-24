import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    nav: true,
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='bx bx-left-arrow-alt'></i>",
        "<i class='bx bx-right-arrow-alt'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 3
        }
    }
};

const BestSeller = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <div className='best-seller-area pt-100'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-4 col-lg-12 col-md-12'>
              <div className='best-seller-image'>
                <img src='/images/women.png' alt='image' />
              </div>
            </div>
            <div className='col-xl-8 col-lg-12 col-md-12'>
              <div className='best-seller-content'>
                <div className='section-title'>
                  <h2>Our BestSellers</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
                <div className='cryptocurrency-slides'>
                  {display ? (
                    <OwlCarousel
                      className='cryptocurrency-slides'
                      loop
                      margin={10}
                      nav
                      {...options}
                    >
                      <div className='single-cryptocurrency-box'>
                        <div className='d-flex align-items-center'>
                          <img src='/images/bitcoin.png' alt='image' />
                          <div className='title'>
                            <h3>Bitcoin</h3>
                            <span className='sub-title'>
                              BTC - <span>€41,905</span>
                            </span>
                          </div>
                        </div>
                        <div className='btn-box'>
                          <a href='buy.html' className='link-btn'>
                            Buy
                          </a>
                          <a href='sell.html' className='link-btn'>
                            Sell
                          </a>
                        </div>
                      </div>
                      <div className='single-cryptocurrency-box'>
                        <div className='d-flex align-items-center'>
                          <img src='/images/ethereum.png' alt='image' />
                          <div className='title'>
                            <h3>Ethereum</h3>
                            <span className='sub-title'>
                              BTC - <span>50,000</span>
                            </span>
                          </div>
                        </div>
                        <div className='btn-box'>
                          <a href='buy.html' className='link-btn'>
                            Buy
                          </a>
                          <a href='sell.html' className='link-btn'>
                            Sell
                          </a>
                        </div>
                      </div>
                      <div className='single-cryptocurrency-box'>
                        <div className='d-flex align-items-center'>
                          <img src='/images/cardano.png' alt='image' />
                          <div className='title'>
                            <h3>Cardano</h3>
                            <span className='sub-title'>
                              BTC - <span>38,541</span>
                            </span>
                          </div>
                        </div>
                        <div className='btn-box'>
                          <a href='buy.html' className='link-btn'>
                            Buy
                          </a>
                          <a href='sell.html' className='link-btn'>
                            Sell
                          </a>
                        </div>
                      </div>
                      <div className='single-cryptocurrency-box'>
                        <div className='d-flex align-items-center'>
                          <img src='/images/peercoin.png' alt='image' />
                          <div className='title'>
                            <h3>Peercoin</h3>
                            <span className='sub-title'>
                              BTC - <span>€12,000</span>
                            </span>
                          </div>
                        </div>
                        <div className='btn-box'>
                          <a href='buy.html' className='link-btn'>
                            Buy
                          </a>
                          <a href='sell.html' className='link-btn'>
                            Sell
                          </a>
                        </div>
                      </div>
                      <div className='single-cryptocurrency-box'>
                        <div className='d-flex align-items-center'>
                          <img src='/images/groestlcoin.png' alt='image' />
                          <div className='title'>
                            <h3>Groestlcoin</h3>
                            <span className='sub-title'>
                              BTC - <span>14,542</span>
                            </span>
                          </div>
                        </div>
                        <div className='btn-box'>
                          <a href='buy.html' className='link-btn'>
                            Buy
                          </a>
                          <a href='sell.html' className='link-btn'>
                            Sell
                          </a>
                        </div>
                      </div>
                      <div className='single-cryptocurrency-box'>
                        <div className='d-flex align-items-center'>
                          <img src='/images/bitconnect.png' alt='image' />
                          <div className='title'>
                            <h3>Bitconnect</h3>
                            <span className='sub-title'>
                              BTC - <span>14,514</span>
                            </span>
                          </div>
                        </div>
                        <div className='btn-box'>
                          <a href='buy.html' className='link-btn'>
                            Buy
                          </a>
                          <a href='sell.html' className='link-btn'>
                            Sell
                          </a>
                        </div>
                      </div>
                      <div className='single-cryptocurrency-box'>
                        <div className='d-flex align-items-center'>
                          <img src='/images/digibyte.png' alt='image' />
                          <div className='title'>
                            <h3>Digibyte</h3>
                            <span className='sub-title'>
                              BTC - <span>41,514</span>
                            </span>
                          </div>
                        </div>
                        <div className='btn-box'>
                          <a href='buy.html' className='link-btn'>
                            Buy
                          </a>
                          <a href='sell.html' className='link-btn'>
                            Sell
                          </a>
                        </div>
                      </div>
                    </OwlCarousel>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='shape14'>
          <img src='/images/shape/shape14.png' alt='image' />
        </div>
      </div>
    </>
  );
};

export default BestSeller;
