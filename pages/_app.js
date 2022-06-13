import '../styles/globals.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useWindowSize } from '../utils/common';

function MyApp({ Component, pageProps }) {
  let sizeScreen = useWindowSize();

  console.log(sizeScreen);
  return (
    <div>
      <Header />
      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
