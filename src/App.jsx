import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

import 'swiper/css';

function App() {

  return (
    <div id='App'>
      <Navbar />
      <Main/>
      <div style={{height:"100vh"}}></div>
    </div>
  )
}

export default App
