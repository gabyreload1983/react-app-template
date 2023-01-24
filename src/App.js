import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./components/views/Home";
import View from "./components/views/View";
import Login from "./components/views/Login";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
