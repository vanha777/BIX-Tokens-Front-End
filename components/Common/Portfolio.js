import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  items: 1,
  nav: true,
  loop: true,
  margin: 30,
  dots: true,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='bx bx-left-arrow-alt'></i>",
    "<i class='bx bx-right-arrow-alt'></i>",
  ],
};

const Portfolio = ({ bgColor, contentColor, shape }) => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);
  const [showShape, setshowShape] = useState(shape);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <div className={`portfolio-area ${bgColor}`}>
        <div className='container'>
          <div className={`single-portfolio-item ${contentColor}`}>
            <div className='row align-items-center m-0'>
              <div className='col-xl-5 col-lg-6 col-md-12 p-0'>
                <div className='content-slides'>
                  {display ? (
                    <OwlCarousel loop margin={10} nav {...options}>
                      <div className='content'>
                        <h3>Early Access</h3>
                        <p>
                        Be the first to access our private sales, private funding, and crowd funding.
                        </p>
                      </div>
                      <div className='content'>
                        <h3>Our Roadmap </h3>
                        <p>
                        Check out our plans to speed up projects and increase token usability. This includes our exchange listing and initial public offering (IPO).
                        </p>
                      </div>
                      <div className='content'>
                        <h3>Join Our Commuinity</h3>
                        <p>
                        Join our Private Investor Group Chat to stay up to date on changes, discuss our roadmap, and vote on how to implement our tokenomic.
                        </p>
                      </div>
                    </OwlCarousel>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className='col-xl-7 col-lg-6 col-md-12 p-0'>
                <div className='image text-center'>
                  <img src='/images/portfolio/portfolio-img1.png' alt='image' />
                </div>
              </div>
            </div>
          </div>
        </div>
        {shape && (
          <div className='shape11'>
            <img src='/images/shape/shape11.png' alt='image' />
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
