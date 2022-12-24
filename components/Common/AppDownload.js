
const AppDownload = () => {
  return (
    <>
      <div className='app-download-area bg-f9f9f9'>
        <div className='container'>
          <div className='row align-items-center m-0'>
            <div className='col-lg-6 col-md-12 p-0'>
              <div className='app-download-image'>
                <img src='/images/app.png' alt='image' />
              </div>
            </div>
            <div className='col-lg-6 col-md-12 p-0'>
              <div className='app-download-content'>
                <h2>Trade On The Mobile App</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <div className='btn-box'>
                  <a href='#' className='playstore-btn' target='_blank'>
                    <img src='/images/play-store.png' alt='image' />
                    Get It On
                    <span>Google Play</span>
                  </a>
                  <a href='#' className='applestore-btn' target='_blank'>
                    <img src='/images/apple-store.png' alt='image' />
                    Download on the
                    <span>Apple Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownload;
