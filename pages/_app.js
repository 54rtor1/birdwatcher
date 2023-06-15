import 'primereact/resources/themes/saga-blue/theme.css';
import '../app/globals.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Header from '../components/Header';
import Home from './index';



function MyApp() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default MyApp;
