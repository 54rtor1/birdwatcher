import 'primereact/resources/themes/saga-blue/theme.css';
import '../app/globals.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import Home from './index';
import CardDetails from './CardDetails';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  const isHomePage = pathname === '/';

  const ComponentToRender = isHomePage ? Home : CardDetails;

  return (
    <div>
      <Header />
      <ComponentToRender {...pageProps} />
    </div>
  );
}

export default MyApp;
