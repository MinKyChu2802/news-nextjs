import Layout from '../components/layout';
import '../styles/globals.css';
import { useWindowSize } from '../utils/common';

function MyApp({ Component, pageProps }) {
  let sizeScreen = useWindowSize();

  console.log(sizeScreen);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
