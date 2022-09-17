import List from "./Comp/List";
import Menu from "./Comp/Menu";
import Cart from "./Comp/Cart";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Menu/>
        <Routes>
          <Route  path="/" element={<List/>}/>
          <Route  path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </Router>
    </Provider>
    
  );
}

export default App;
