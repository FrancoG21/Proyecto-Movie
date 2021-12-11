import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Ruta from './config/Ruta';

function App() {
  return (
    <BrowserRouter>
      <Route render={props => (
        <>
          <Header {...props}/>
          <Ruta />
          <Footer />
        </>
      )}>

      </Route>
    </BrowserRouter>
  );
}

export default App;
