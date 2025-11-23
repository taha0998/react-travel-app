import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Post from "./pages/Post";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
