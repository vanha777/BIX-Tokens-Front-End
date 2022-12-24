
const OurFeature = ({title}) => {
  return (
    <>
      <div className='features-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>{title}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-box'>
                <img src='/images/features/features-img1.png' alt='image' />
                <h3>Security First</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                  eiusmod tempor incididunt ut labore et doee magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-box'>
                <img src='/images/features/features-img2.png' alt='image' />
                <h3>Fast Withdrawals</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                  eiusmod tempor incididunt ut labore et doee magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-box'>
                <img src='/images/features/features-img3.png' alt='image' />
                <h3>24/7 Support</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                  eiusmod tempor incididunt ut labore et doee magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeature;
