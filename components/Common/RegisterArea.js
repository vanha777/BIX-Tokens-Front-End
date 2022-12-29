import React from 'react';

const RegisterArea = ({bgGradient,blackText,ctaImage}) => {
  return (
    <>
      <div className={`cta-area pt-100 ${bgGradient}`}>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-6 col-md-12'>
              <div className={`cta-content ${blackText}`}>
                <h2>Early stage investors</h2>
                <p>
                It all comes down to valuations when it comes to investing in startups. Many investors are looking for these companies in their early stages. The later you invest, the higher the price of the company.
                </p>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSeE3yG-1BMYCobb0eyyJXOwao3rYHD6UhbknxD3LbnbGQLQ8w/viewform?usp=sf_link' target="_blank" className='default-btn'>
                  <i className='bx bxs-user'></i> Register Now
                </a>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='cta-image'>
                <img src={ctaImage} alt='image' />
              </div>
            </div>
          </div>
        </div>
        <div className='shape6'>
          <img src='/images/shape/shape6.png' alt='image' />
        </div>
        <div className='shape7'>
          <img src='/images/shape/shape7.png' alt='image' />
        </div>
        <div className='shape8'>
          <img src='/images/shape/shape8.png' alt='image' />
        </div>
        <div className='shape9'>
          <img src='/images/shape/shape9.png' alt='image' />
        </div>
        <div className='shape15'>
          <img src='/images/shape/shape15.png' alt='image' />
        </div>
      </div>
    </>
  );
};

export default RegisterArea;
