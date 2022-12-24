import Head from 'next/head';
import { useRouter } from 'next/router';

//top header
import TopHeader from './TopHeader';

//navbar
import Navbar from './Navbar';
import NavbarTwo from './NavbarTwo';

//footer
import Footer from './Footer';

const Layout = ({ children }) => {
  
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Head>
        <title>Bix Tech Project By Eazy Technologies Pty Ltd</title>
        <link rel="icon" href="/favicon.ico" />
      

      </Head>

      {pathname === '/' ? <TopHeader /> :''}
      {pathname === '/index-2' ? <NavbarTwo /> : <Navbar />}

      {children}

      <Footer />
    </>
  );
};

export default Layout;
