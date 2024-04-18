import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Form from "./pages/Form";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <div className="min-h-[100svh] text-black dark:text-white font-main antialiased ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/:id/apply" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
