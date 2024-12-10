import { Route, Routes } from "react-router";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/b" element={<Header />} />
        <Route path="/c" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
