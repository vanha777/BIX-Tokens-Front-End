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
            <h2>Department of Research and Development </h2>
            <p>
            Our missions are to accelerate and address users' everyday problems by incorporating SASS and blockchain technology into business operations. We will make it easier for you to sell, manage, or invest.
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
                      Smart Vehicles App Intergrate
                      </a>
                    </h3>
                    <p>
                    Using Mercedes-Benz APIs and SDKs, we create innovative smart home applications with official vehicle-related data. With your smartphone, you can control accessories, turn on heaters and air conditioning, and preset car environments from anywhere.
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
                    Tracking your property investment includes listing price, auction rate, clearance rate, demands and supply, market sentiments, and many bank-integrated finance tools, all in one place.
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
                      Tool for Customer Databases
                      </a>
                    </h3>
                    <p>
                    With a few clicks, you can instantly connect with thousands of customers. Send and receive information, connect on social media, and access a variety of flatform marketing tools.
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
                      <a href='cryptocurrency-details.html'>A Decentralized Payments System</a>
                    </h3>
                    <p>
                    We are collaborating with existing customers to implement SASS software and integrate BIX tokens into their payment systems. to create a decentralized network that benefits both buyers and sellers.
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
