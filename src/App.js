import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import Calendar from "./Components/Calendar/Calendar";
import Complete from "./Components/Complete/Complete";
import Todo from "./Components/ToDo/Todo";

function App() {
  return (
    <div className="mx-auto max-w-[1500px]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="to-do" element={<Todo />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="complete" element={<Complete />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
