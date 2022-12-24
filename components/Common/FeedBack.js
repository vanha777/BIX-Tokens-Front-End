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
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
};

const FeedBack = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <div className='fedback-area pt-100 pb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>Trusted by Thousands of Users</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className='feedback-slides'>
            {display ? (
              <OwlCarousel
                className=''
                loop
                margin={10}
                nav
                {...options}
              >
                <div className='single-feedback-item'>
                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                  </div>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame.
                  </p>
                  <div className='client-info'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user/user1.jpg' alt='image' />
                      <div className='title'>
                        <h3>David Malan</h3>
                        <span>Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                  </div>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame.
                  </p>
                  <div className='client-info'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user/user2.jpg' alt='image' />
                      <div className='title'>
                        <h3>Sarah Taylor</h3>
                        <span>Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                  </div>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame.
                  </p>
                  <div className='client-info'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user/user3.jpg' alt='image' />
                      <div className='title'>
                        <h3>Ben Stokes</h3>
                        <span>Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                  </div>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame.
                  </p>
                  <div className='client-info'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user/user4.jpg' alt='image' />
                      <div className='title'>
                        <h3>James Andy</h3>
                        <span>Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                  </div>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame.
                  </p>
                  <div className='client-info'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user/user5.jpg' alt='image' />
                      <div className='title'>
                        <h3>Alina Smith</h3>
                        <span>Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                  </div>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame.
                  </p>
                  <div className='client-info'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user/user6.jpg' alt='image' />
                      <div className='title'>
                        <h3>John Terry</h3>
                        <span>Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                  </div>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame.
                  </p>
                  <div className='client-info'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user/user4.jpg' alt='image' />
                      <div className='title'>
                        <h3>James Andy</h3>
                        <span>Developer</span>
                      </div>
                    </div>
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

export default FeedBack;
