import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/skills"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Skills" element={<Skills />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
