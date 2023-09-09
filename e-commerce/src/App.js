import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/components/pages/HomePage';
import Footer from './customer/components/Footer/Footer';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      {/* <HomePage></HomePage> */}
      <ProductDetails/>
      
      <Footer/>
    </div>
  );
}

export default App;
