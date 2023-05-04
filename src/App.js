import './assets/scss/main.scss'
import Navbar from './components/public/Navbar';
import Main from './components/pages/main/index';
import Footer from './components/public/Footer';
import "./fontello/css/fontello.css"

function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Footer/>
  
    </div>
  );
}

export default App;
