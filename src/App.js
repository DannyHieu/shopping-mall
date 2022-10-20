import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <div className='app-header'>
        <Header />
      </div>

      <div className='app-container'>
        <Outlet />
      </div>

      <div id='line' />

      <div className='app-footer'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
