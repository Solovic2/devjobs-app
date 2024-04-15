import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300 antialiased">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
