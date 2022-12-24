import React, { useState } from 'react';
import Link from 'next/link';

const Banner = () => {
  const [name, setName] = useState('Usd');
  const [nameTwo, setNameTwo] = useState('Usd');

  const [image, setImage] = useState(
    '/images/cryptocurrency/cryptocurrency1.png'
  );
  const [imageTwo, setImageTwo] = useState(
    '/images/cryptocurrency/cryptocurrency1.png'
  );

  const [clicked, setClicked] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [toggleStateTwo, setToggleStateTwo] = useState(false);

  const category = [
    {
      name: 'Usd',
      image: '/images/cryptocurrency/cryptocurrency1.png',
    },
    {
      name: 'Bitcoin',
      image: '/images/cryptocurrency/cryptocurrency2.png',
    },
    {
      name: 'Litecoin',
      image: '/images/cryptocurrency/cryptocurrency3.png',
    },
    {
      name: 'XRP',
      image: '/images/cryptocurrency/cryptocurrency4.png',
    },
    {
      name: 'Stellar',
      image: '/images/cryptocurrency/cryptocurrency5.png',
    },
    {
      name: 'Cardano',
      image: '/images/cryptocurrency/cryptocurrency6.png',
    },
    {
      name: 'Digibyte',
      image: '/images/cryptocurrency/cryptocurrency7.png',
    },
  ];

  const toggleTabOne = () => {
    setToggleState(!toggleState);
  };

  const toggleTabTwo = () => {
    setToggleStateTwo(!toggleStateTwo);
  };

  const toggleSelected = (cat, index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
    setName(cat.name);
    setImage(cat.image);
  };

  const toggleSelectedTwo = (cat, index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
    setNameTwo(cat.name);
    setImageTwo(cat.image);
  };
  return (
    <>
      <div className='main-banner-area'>
        <div className='container'>
          <div className='main-banner-box'>
            <div className='currency-selection'>
              <label>YOU PAY</label>
              <input type='text' value='50.00' onChange={(e) => e} />
              <div
                className={toggleState ? 'dropdown show' : 'dropdown'}
                onClick={() => toggleTabOne()}
              >
                <button
                  className='dropdown-toggle'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <img src={image} alt='image' />
                  {name}

                  <span>
                    {toggleState ? (
                      <i className='bx bx-chevron-up'></i>
                    ) : (
                      <i className='bx bx-chevron-down'></i>
                    )}
                  </span>
                </button>
                <ul
                  className={
                    toggleState ? 'dropdown-menu show' : 'dropdown-menu'
                  }
                >
                  {category.length > 0 &&
                    category.map((cat, index) => (
                      <li
                        key={index}
                        onClick={(e) => toggleSelected(cat, index)}
                        value='watch'
                        className={
                          clicked === index ? 'option selected focus' : 'option'
                        }
                      >
                        <div className='coin-wrapper'>
                          <img src={cat.image} alt='image' />
                          <span className='coin-name'> {cat.name}</span>
                        </div>
                      </li>
                    ))}
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
              <label>YOU RECEIVE</label>
              <input type='text' value='0.00102130' onChange={(e) => e} />
              <div
                className={toggleStateTwo ? 'dropdown show' : 'dropdown'}
                onClick={() => toggleTabTwo()}
              >
                <button
                  className='dropdown-toggle'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <img src={imageTwo} alt='image' /> {nameTwo}
                  <span>
                    {toggleStateTwo ? (
                      <i className='bx bx-chevron-up'></i>
                    ) : (
                      <i className='bx bx-chevron-down'></i>
                    )}
                  </span>
                </button>
                <ul
                  className={
                    toggleStateTwo ? 'dropdown-menu show' : 'dropdown-menu'
                  }
                >
                  {category.length > 0 &&
                    category.map((cat, index) => (
                      <li
                        key={index}
                        onClick={(e) => toggleSelectedTwo(cat, index)}
                        value='watch'
                        className={
                          clicked === index ? 'option selected focus' : 'option'
                        }
                      >
                        <img src={cat.image} alt='image' />
                        {cat.name}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <button type='submit'>
              <i className='bx bxs-hand-right'></i> Buy With Visa
            </button>
          </div>
          <div className='row align-items-center m-0'>
            <div className='col-xl-6 col-lg-6 col-md-12 p-0'>
              <div className='main-banner-content'>
                <h1>Buy & Sell Cryptocurrency Easy, Fast and Secure!</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link legacyBehavior href='https://www.coinbase.com/signup'>
                  <a className='default-btn'>
                    <i className='bx bxs-user'></i> Register Now
                  </a>
                </Link>
              </div>
            </div>
            <div className='col-xl-4 col-lg-12 col-md-12 p-0'>
              <div className='main-banner-image'>
                <img src='/images/banner/banner-img1.png' alt='image' />
              </div>
            </div>
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
        <div className='shape5'>
          <img src='/images/shape/shape5.png' alt='image' />
        </div>
        <div className='shape9'>
          <img src='/images/shape/shape9.png' alt='image' />
        </div>
      </div>
    </>
  );
};

export default Banner;
