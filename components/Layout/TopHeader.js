import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 0,
  nav: false,
  mouseDrag: false,
  dots: false,
  autoplay: true,
  
  autoplaySpeed: 2000,
  autoplayTimeout: 3100,
  autoplayHoverPause: false,


  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 3,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
};

const TopHeader = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <div className='value-trade-area'>
        <div className='container'>
          <div className='value-trade-slides'>
            {display ? (
              <OwlCarousel
                className='owl-theme owl-carousel'
                loop
                margin={10}
                nav
                {...options}
              >
                <div className='single-value-trade-box'>
                  <p>
                    ETH/BTC <span className='price'>₿0.03150400</span>{' '}
                    <span className='trending up'>
                      <i className='fas fa-caret-up'></i> +4.31%
                    </span>
                  </p>
                </div>
                <div className='single-value-trade-box'>
                  <p>
                    BNB/BTC <span className='price'>$15.0400031</span>{' '}
                    <span className='trending up'>
                      <i className='fas fa-caret-up'></i> +5.21%
                    </span>
                  </p>
                </div>
                <div className='single-value-trade-box'>
                  <p>
                    FIO/BTC <span className='price'>₿0.00000521</span>{' '}
                    <span className='trending down'>
                      <i className='fas fa-caret-down'></i> -22.42%
                    </span>
                  </p>
                </div>
                <div className='single-value-trade-box'>
                  <p>
                    CHZ/BTC <span className='price'>₿1.04000315</span>{' '}
                    <span className='trending up'>
                      <i className='fas fa-caret-up'></i> +2.20%
                    </span>
                  </p>
                </div>
                <div className='single-value-trade-box'>
                  <p>
                    DOT/BTC <span className='price'>₿2.03150400</span>{' '}
                    <span className='trending up'>
                      <i className='fas fa-caret-up'></i> +1.02%
                    </span>
                  </p>
                </div>
                <div className='single-value-trade-box'>
                  <p>
                    ADA/BTC <span className='price'>₿3.04003150</span>{' '}
                    <span className='trending down'>
                      <i className='fas fa-caret-down'></i> -3.32%
                    </span>
                  </p>
                </div>
                <div className='single-value-trade-box'>
                  <p>
                    VET/BTC <span className='price'>₿14.0315040</span>{' '}
                    <span className='trending up'>
                      <i className='fas fa-caret-up'></i> +7.21%
                    </span>
                  </p>
                </div>
                <div className='single-value-trade-box'>
                  <p>
                    TRX/BTC <span className='price'>₿3.04003150</span>{' '}
                    <span className='trending down'>
                      <i className='fas fa-caret-down'></i> -3.32%
                    </span>
                  </p>
                </div>
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
