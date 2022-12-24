import React from 'react';

const Features = () => {
  return (
    <>
      <div className='features-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>The Benefit Of Our tokenholders</h2>
            <p>
            BIX Tokens are a governance cryptocurrency that allows token holders to vote on the direction of a blockchain project as well as share profits and revenues.
            </p>
          </div>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='features-box'>
                <div className='icon'>
                  <img src='/images/icon/icon18.png' alt='image' />
                </div>
                <h3>Purposes</h3>
                <p>
                Real-life projects and current business uses include multiple incoming future projects and partnerships.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='features-box'>
                <div className='icon bg-ffefc7'>
                  <img src='/images/icon/icon19.png' alt='image' />
                </div>
                <h3>Secured</h3>
                <p>
                Tokens are deployed on a decentralised blockchain that is not reversible and tamper-proof, similar to how shares are registered with a securities commission but are not controlled or manipulated by any organizations.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='features-box'>
                <div className='icon bg-ffc9c2'>
                  <img src='/images/icon/icon20.png' alt='image' />
                </div>
                <h3>Regulated</h3>
                <p>
                Our tokens are deployed on well-known Binance blockchain platforms, following the BEP-20 contract format pre-set by Binance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
