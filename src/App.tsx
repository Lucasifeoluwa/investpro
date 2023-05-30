import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Billsplit, Blog, FAQ, WageAdvance } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="billsplit" element={<Billsplit />} />
            <Route path="blog" element={<Blog />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="wageadvance" element={<WageAdvance />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
