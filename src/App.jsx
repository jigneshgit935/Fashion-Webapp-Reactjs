import Collections from './components/Collections';
import Home from './components/Home';
import Navbar from './components/Navbar';
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
      </div>
    </>
  );
}

export default App;
