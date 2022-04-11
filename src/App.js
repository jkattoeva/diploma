import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Women from "./pages/Women";
import Men from "./pages/Men";
import Teenagers from "./pages/Teenagers";
import Kids from "./pages/Kids";
import SignUp from "./pages/SignUp";
import Instagram from "./pages/Instagram";



function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <Women />
      <Men />
      <Teenagers />
      <Kids />
      <SignUp />
      <Instagram />
      
      <Footer />
    </div>
  );
}

export default App;
