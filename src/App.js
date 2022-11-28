import { Route, Routes } from "react-router-dom";
import './App.css';
import Cities from './components/Cities';
import Quote from './components/Quote';
import Header from "./components/Header";
import Home from "./components/Home";
import Painting from "./components/Painting";
import Works from "./components/Works";
function App() {



  return (
    <div >
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="painting" element={<Painting />} />
          <Route path="works" element={<Works />} />
          <Route path="quote" element={<Quote />} />
          <Route path="cities" element={<Cities />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
