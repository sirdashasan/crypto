import { Route, Routes } from "react-router-dom";
import "./App.css";
import CurrencyList from "./components/CurrencyList";
import CryptoHome from "./pages/CryptoHome";
import CryptoDetail from "./pages/CryptoDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </>
  );
}

export default App;
