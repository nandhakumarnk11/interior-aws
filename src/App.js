
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./Navibar";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";


function App() {
  return (
   <BrowserRouter>
   <Navibar/>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Blog" element={<Blog />}/>
    <Route path="/Contact" element={<Contact />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
