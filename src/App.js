import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Women from "./pages/Women";
import Men from "./pages/Men";
import Teenagers from "./pages/Teenagers";
import Kids from "./pages/Kids";
import SignUp from "./pages/SignUp";
import Instagram from "./pages/Instagram";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <Routes>
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />}/>
        <Route path="/teenagers" element={<Teenagers />}/>
        <Route path="/kids" element={<Kids />}/>
        <Route path="/signUp"element={<SignUp />}/>
        <Route path="/instagram" element={<Instagram />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
