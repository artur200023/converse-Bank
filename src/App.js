import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./pages/error/error";
import Home from "./pages/home/home";
import MainSlider from "./pages/mainSlider/mainSlider";


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="business" element={<MainSlider />} />
        </Route>

        <Route path="/:lang/">
          <Route index element={<Home />} />
          <Route path="business" element={<MainSlider />} />
        </Route>
        <Route path="*" element={<Error/>} />


      </Routes>
    </div>
  );
}

export default App;
