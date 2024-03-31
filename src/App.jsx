import { Route, Routes } from "react-router-dom";
import "./App.css";
import CurrencyList from "./components/CurrencyList";
import CryptoHome from "./pages/CryptoHome";
import CryptoDetail from "./pages/CryptoDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </>
  );
}

export default App;
