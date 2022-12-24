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
            <h2>Future Project Goals And Ideas</h2>
            <p>
            Any research requires at least 15 years to reach the average person. Our goals are to accelerate and tackle people's everyday problems by implementing SASS and blockchain technology into business operations more effectively. Simply put, if you are selling, managing, or investing, we will make it easier for you.
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
                      Automotive Iot
                      </a>
                    </h3>
                    <p>
                    We combine Mercedes-Benz user OAuthentications processes, which grant users access to data from their vehicle, with smart home apps to provide our clients with the ability to request data from the vehicle, control accessories, turn on heaters and air conditioning, and pre-set car environments as easily as turning on their garage light bulbs. without modifying your original Mercedes-Benz.
                    </p>
                    <Link legacyBehavior href='/'/*cryptocurrency-details'*/ className='link-btn'>
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
                      Track Your Property Portfolio
                      </a>
                    </h3>
                    <p>
                    A new SaaS service that helps you keep track of your property investment provides listing price action, auction rate, clearance rate, number of stocks, market sentiments, and combines this with many finance tools such as analysing future trends of areas, cities, and neighbours; all feeds and stats are live from local auction rates and real estate agencies.
                    </p>
                    <Link legacyBehavior href='/'/*cryptocurrency-details'*/ className='link-btn'>
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
                      Know Your Customers
                      </a>
                    </h3>
                    <p>
                    a SaaS software that helps small businesses manage their existing customer database and, more importantly, maximise profits by profiling, connecting, analyzing, and marketing with just a few clicks.
                    </p>
                    <Link legacyBehavior href='/'/*cryptocurrency-details'*/ className='link-btn'>
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
                      <a href='cryptocurrency-details.html'>A Tokenomic System</a>
                    </h3>
                    <p>
                    We intend to scale up and offer payment services using our own cryptocurrency by leveraging our E-commerce, SAS, and future partnerships with existing businesses.
                    </p>
                    <Link legacyBehavior href='/'/*cryptocurrency-details'*/ className='link-btn'>
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
