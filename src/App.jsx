import Collections from './components/Collections';
import Features from './components/Features';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <div>
        <Navbar />
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
      </div>
    </>
  );
}

export default App;
