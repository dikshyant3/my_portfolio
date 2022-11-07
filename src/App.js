import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter> */}
      <Header />
    </div>
  );
}

export default App;
