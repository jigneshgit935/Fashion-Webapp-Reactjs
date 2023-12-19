import { Provider } from 'react-redux';
import Collections from './components/Collections';
import Features from './components/Features';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Review from './components/Review';
import Shop from './components/Shop';
import { store } from './redux/store';
import { useState } from 'react';
import Cart from './components/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <div>
        <Provider store={store}>
          <Navbar setShowCart={setShowCart} />

          {showCart && <Cart setShowCart={setShowCart} />}

          <div id="home">
            <Home />
          </div>
          <div id="shop">
            <Shop />
          </div>
          <Collections />
          <div id="features">
            <Features />
          </div>

          <div id="products">
            <Product />
          </div>

          <div id="review">
            <Review />
          </div>
          <Footer />
        </Provider>
      </div>
    </>
  );
}

export default App;
