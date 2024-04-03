import { Route, Routes } from "react-router-dom";
import "./App.css";
import CryptoHome from "./pages/CryptoHome";
import CryptoDetail from "./pages/CryptoDetail";
import Navbar from "./components/Navbar";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<CryptoHome />} />
          <Route path="/coin/:id" element={<CryptoDetail />} />
        </Routes>
      </>
    </SearchProvider>
  );
}

export default App;
