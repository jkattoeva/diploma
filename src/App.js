import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Women from "./pages/Women";
import Men from "./pages/Men";
import Teenagers from "./pages/Teenagers";
import Kids from "./pages/Kids";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";

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
        <Route path="/about" element={<About />}/>
        <Route path="/signUp"element={<SignUp />}/>
      </Routes>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
