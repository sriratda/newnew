
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './componets/login'
import Home from './componets/home';
import Deposit from './componets/deposit';
import Transfer from './componets/transfer';
import Withdraw from './componets/withdraw';
import Success from './componets/success';

function App() {
  return (
    <>
      <Router>
        <Routes>

          {/* login */}
          <Route
            exact
            path='/'
            element={<Login/>}
          />

          {/* home */}
          <Route
            path='/home'
            element={<Home />}
          />

          {/* deposit*/}
          <Route
            path='/deposit'
            element={<Deposit/>}
          />
          {/* transfer*/}
          <Route
            path='/transfer'
            element={<Transfer/>}
          />
          {/* withdraw*/}
          <Route
            path='/withdraw'
            element={<Withdraw/>}
          />
          {/* success*/}
          <Route
            path='/success'
            element={<Success/>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
