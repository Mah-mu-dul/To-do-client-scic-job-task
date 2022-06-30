import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <div className="mx-auto max-w-[1500px]">
      <Header />
      <Home/>
      <Routes>
        <Route path="home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
