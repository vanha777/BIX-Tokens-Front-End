import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  nav: true,
  loop: true,
  margin: 30,
  dots: true,
  center: true,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='bx bx-left-arrow-alt'></i>",
    "<i class='bx bx-right-arrow-alt'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
      center: false,
    },
    992: {
      items: 2,
      center: false,
    },
    1200: {
      items: 2,
      center: true,
    },
  },
};

const Platform = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <div className='cryptocurrency-platform-area'>
        <div className='container-fluid'>
          <div className='section-title'>
            <h2>The Most Trusted Cryptocurrency Platform</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className='cryptocurrency-platform-slides'>
            {display ? (
              <OwlCarousel
                className='cryptocurrency-platform-slides'
                loop
                margin={10}
                nav
                {...options}
              >
                <div className='single-cryptocurrency-platform-box'>
                  <img
                    src='/images/cryptocurrency-platform/cryptocurrency-platform-1.jpg'
                    alt='image'
                  />
                  <div className='content'>
                    <div className='icon'>
                      <img src='/images/icon/icon4.png' alt='image' />
                    </div>
                    <h3>
                      <a href='cryptocurrency-details.html'>
                        Protected by Insurance
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                    <Link legacyBehavior href='/cryptocurrency-details' className='link-btn'>
                      <a className='link-btn'>
                        {' '}
                        View More <i className='bx bx-chevron-right'></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='single-cryptocurrency-platform-box'>
                  <img
                    src='/images/cryptocurrency-platform/cryptocurrency-platform-3.jpg'
                    alt='image'
                  />
                  <div className='content'>
                    <div className='icon'>
                      <img src='/images/icon/icon5.png' alt='image' />
                    </div>
                    <h3>
                      <a href='cryptocurrency-details.html'>
                        Build Your Reputation
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                    <Link legacyBehavior href='/cryptocurrency-details' className='link-btn'>
                      <a className='link-btn'>
                        {' '}
                        View More <i className='bx bx-chevron-right'></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='single-cryptocurrency-platform-box'>
                  <img
                    src='/images/cryptocurrency-platform/cryptocurrency-platform-4.jpg'
                    alt='image'
                  />
                  <div className='content'>
                    <div className='icon'>
                      <img src='/images/icon/icon6.png' alt='image' />
                    </div>
                    <h3>
                      <a href='cryptocurrency-details.html'>
                        Earn Extra Income
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                    <Link legacyBehavior href='/cryptocurrency-details' className='link-btn'>
                      <a className='link-btn'>
                        {' '}
                        View More <i className='bx bx-chevron-right'></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='single-cryptocurrency-platform-box'>
                  <img
                    src='/images/cryptocurrency-platform/cryptocurrency-platform-2.jpg'
                    alt='image'
                  />
                  <div className='content'>
                    <div className='icon'>
                      <img src='/images/icon/icon7.png' alt='image' />
                    </div>
                    <h3>
                      <a href='cryptocurrency-details.html'>Secure Storage</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                    <Link legacyBehavior href='/cryptocurrency-details' className='link-btn'>
                      <a className='link-btn'>
                        {' '}
                        View More <i className='bx bx-chevron-right'></i>
                      </a>
                    </Link>
                  </div>
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

export default Platform;
