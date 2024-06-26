// import Store from './redux/BookStore';
// import BookContainer from './redux/BookContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import HeroComponent from './Shopping/HeroComponent';
import Store from './redux/Store';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        {/* <BookContainer /> */}
        <HeroComponent />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
