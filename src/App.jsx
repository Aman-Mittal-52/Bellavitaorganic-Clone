import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div id='App'>
      <Navbar />
      <Main />
      <div style={{ height: "100vh" }}></div>
      <Footer />
    </div>
  )
}

export default App
