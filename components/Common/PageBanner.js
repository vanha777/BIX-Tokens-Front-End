import React from 'react';

const PageBanner = ({ pageTitle, pageSubTitle, button }) => {
  const [showBUtton, setShowButton] = React.useState(button);

  return (
    <>
      <div className='page-title-area'>
        <div className='container'>
          <div className='page-title-content'>
            <h1>{pageTitle}</h1>
            <p>{pageSubTitle}</p>
            {showBUtton && (
              <a href='login-register.html' className='default-btn'>
                <i className='bx bxs-user'></i> Become an Affiliate
              </a>
            )}
          </div>
        </div>
        <div className='lines'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
