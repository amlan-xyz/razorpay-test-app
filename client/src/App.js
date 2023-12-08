import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { PaymentFailed, PaymentSuccess } from "./component/Payment";
import { Home } from "./pages/Home/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="payment/success" element={<PaymentSuccess />} />
        <Route path="payment/failed" element={<PaymentFailed />} />
      </Routes>
    </Router>
  );
}

export default App;
