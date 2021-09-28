import './App.css';
import Navigation from './Component/Navbar';
import Footer from './Component/Footer';
import Gallery from './Component/Gallery';
import Highlight from './Component/Highlight';
import Message from './Component/Message';
import Cerosal from './Component/Carousel';
import Contact from './Component/Form';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Cerosal/>     
        <Message/>
        <Highlight/>
        <Gallery/>
        <Contact/>
        <Footer/>
    </div>
  );
}
export default App;
