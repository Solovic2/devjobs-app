import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Details from "./pages/Details";
import Form from "./pages/Form";

function App() {
  return (
    <div className="min-h-[100svh] text-black dark:text-white font-main antialiased ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/:id/apply" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
