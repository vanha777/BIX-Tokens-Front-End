import React from 'react';

const FunFact = ({pt100,bgf9f9f9,pb70}) => {
  return (
    <>
      <div className={`funfacts-area ${pt100} ${pb70} ${bgf9f9f9}`}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
              <div className='funfacts-box'>
                <div className='icon'>
                  <img src='/images/icon-bg.png' alt='image' />
                  <div className='main-icon'>
                    <img src='/images/icon/icon8.png' alt='image' />
                  </div>
                </div>
                <h3>Secured by Escrow</h3>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
              <div className='funfacts-box'>
                <div className='icon'>
                  <img src='/images/icon-bg.png' alt='image' />
                  <div className='main-icon'>
                    <img src='/images/icon/icon9.png' alt='image' />
                  </div>
                </div>
                <h3>2.7 Million Happy Users</h3>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
              <div className='funfacts-box'>
                <div className='icon'>
                  <img src='/images/icon-bg.png' alt='image' />
                  <div className='main-icon'>
                    <img src='/images/icon/icon10.png' alt='image' />
                  </div>
                </div>
                <h3>Thousands of Trusted Offers</h3>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
              <div className='funfacts-box'>
                <div className='icon'>
                  <img src='/images/icon-bg.png' alt='image' />
                  <div className='main-icon'>
                    <img src='/images/icon/icon11.png' alt='image' />
                  </div>
                </div>
                <h3>Billions in Global Volume</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFact;
