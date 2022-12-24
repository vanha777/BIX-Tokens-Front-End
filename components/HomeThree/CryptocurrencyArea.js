import Link from 'next/link';

const CryptocurrencyArea = () => {
  return (
    <>
      <div className='cryptocurrency-area ptb-100 bg-fffbf1'>
        <div className='container'>
          <div className='section-title'>
            <h2>Top Cryptocurrencies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className='cryptocurrency-table table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Change (24h)</th>
                  <th scope='col'>Trade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/images/cryptocurrency/bitcoin.png'
                        alt='image'
                      />
                      <h3 className='mb-0'>BITCOIN</h3>
                    </div>
                  </td>
                  <td>USD 55102.7</td>
                  <td>
                    <span className='trending up'>+1.54%</span>
                  </td>
                  <td>
                    <a href='buy.html' className='link-btn'>
                      BUY
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/images/cryptocurrency/ethereum.png'
                        alt='image'
                      />
                      <h3 className='mb-0'>ETHEREUM</h3>
                    </div>
                  </td>
                  <td>USD 45214.3</td>
                  <td>
                    <span className='trending up'>+1.20%</span>
                  </td>
                  <td>
                    <a href='buy.html' className='link-btn'>
                      BUY
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/images/cryptocurrency/lightcoin.png'
                        alt='image'
                      />
                      <h3 className='mb-0'>LITECOIN</h3>
                    </div>
                  </td>
                  <td>USD 874.7</td>
                  <td>
                    <span className='trending down'>-2.49%</span>
                  </td>
                  <td>
                    <a href='buy.html' className='link-btn'>
                      BUY
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/images/cryptocurrency/cardano.png'
                        alt='image'
                      />
                      <h3 className='mb-0'>CARDANO</h3>
                    </div>
                  </td>
                  <td>USD 54124.8</td>
                  <td>
                    <span className='trending up'>+1.07%</span>
                  </td>
                  <td>
                    <a href='buy.html' className='link-btn'>
                      BUY
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img src='/images/cryptocurrency/xrp.png' alt='image' />
                      <h3 className='mb-0'>XRP</h3>
                    </div>
                  </td>
                  <td>USD 45241.7</td>
                  <td>
                    <span className='trending down'>-1.20%</span>
                  </td>
                  <td>
                    <a href='buy.html' className='link-btn'>
                      BUY
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='/images/cryptocurrency/stellar.png'
                        alt='image'
                      />
                      <h3 className='mb-0'>STELLAR</h3>
                    </div>
                  </td>
                  <td>USD 14123.5</td>
                  <td>
                    <span className='trending up'>+0.54%</span>
                  </td>
                  <td>
                    <a href='buy.html' className='link-btn'>
                      BUY
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='more-cryptocurrency-box text-center'>
          <Link legacyBehavior href='/prices'>
              <a className='default-btn'>
                <i className='bx bx-purchase-tag-alt'></i> See More Prices
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptocurrencyArea;
