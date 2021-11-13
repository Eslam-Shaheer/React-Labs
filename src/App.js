import Home from "./Containers/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Dashboard from "./Containers/Dashboard";
import SelectedPost from "./Containers/selectedPost";
function App() {
  return (
    <div className="w-100">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/single_post/:id" element={<SelectedPost />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
