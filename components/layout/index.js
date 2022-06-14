import React, { useEffect } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { useRouter } from 'next/router';

function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      router.push('/');
    }
  }, []);
  // Make sure we're in the browser

  return (
    <div className="layout">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
