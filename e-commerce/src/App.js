import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/components/pages/HomePage';
import Footer from './customer/components/Footer/Footer';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import CheckOut from './customer/components/Checkout/Checkout';
import Product from './customer/components/ProductDetails/Product';
import Order from './customer/components/Order/Order';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      {/* <HomePage></HomePage>
      <ProductDetails/> */}
      {/* <Cart/> */}
      {/* <CheckOut/> */}
      {/* <Product/> */}
      <Order/>
      
      <Footer/>
    </div>
  );
}

export default App;
