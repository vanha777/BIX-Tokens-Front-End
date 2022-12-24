import { Provider } from 'react-redux';
import { useStore } from '../store';

import '../public/css/animate.min.css';
import '../public/css/bootstrap.min.css';


import '../public/css/boxicons.min.css';

import '../public/css/fontawesome.min.css';
import '../public/css/meanmenu.min.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

import Layout from '../components/Layout/Layout';
import GoTop from '../components/Shared/GoTop';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />

        {/* Go Top Button */}
        <GoTop scrollStepInPx='100' delayInMs='10.50' />
      </Layout>
    </Provider>
  );
}
