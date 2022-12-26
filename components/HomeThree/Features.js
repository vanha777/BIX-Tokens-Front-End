import React from 'react';

const Features = () => {
  return (
    <>
      <div className='features-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>The Benefit Of Our tokenholders</h2>
            <p>
            BIX Tokens are a custom cryptocurrency developed by Bixtech, which uses them to pay for its SaaS services.
            </p>
          </div>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='features-box'>
                <div className='icon'>
                  <img src='/images/icon/icon18.png' alt='image' />
                </div>
                <h3>Driven-Purposes</h3>
                <p>
                Make positive changes by addressing real-life issues in your current business.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='features-box'>
                <div className='icon bg-ffefc7'>
                  <img src='/images/icon/icon19.png' alt='image' />
                </div>
                <h3>Chain-Secured</h3>
                <p>
                Tokens are deployed on a decentralized blockchain that is not reversible, controlled, or manipulable; it is tamper-proof.
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
                BIX tokens used the interfaces of the BEP-20 smart contract and were deployed on Binance's smart chain. All codes are open-source and ready for audits.
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
