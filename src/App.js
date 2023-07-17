import './assets/scss/main.scss'
import { Route,Routes } from 'react-router-dom'

import Navbar from './components/public/Navbar';
import Main from './components/pages/main/index';
import Media from './components/pages/multy-media/main';
import News from './components/pages/show-news/main'
import Footer from './components/public/Footer';
import "./fontello/css/fontello.css"

function App() {
  return (
    <div>
      <Navbar/>

      {/* <Main/> */}
      <Routes>
      <Route path='/multy-media' element={<Media/>}/>
      <Route path='/news/:id' element={<News/>}/>
      <Route path='/' element={<Main/>}/>

      </Routes>
      <Footer/>
  
    </div>
  );
}

export default App;
