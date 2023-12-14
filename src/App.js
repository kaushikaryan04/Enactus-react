import About from "./components/About"
import Blog from "./components/Blog1"
import Contactus from "./components/Contactus"
import Footer from "./components/Footer";
import Header from "./components/Header"
import ProjectsPage from "./pages/ProjectsPage"
import Home from './pages/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage"
import BlogPage from "./pages/BlogPage"
function App() {

  return (
<BrowserRouter>
<Routes>

<Route path = "/" element ={<Home/>}/>
<Route path = "/Projects" element= {<ProjectsPage/>}/>
<Route path = "/about" element = {<AboutPage/>} />
<Route path = "/contact" element = {<ContactUsPage/>}/>
<Route path = "/blog" element = {<BlogPage/>}/>

</Routes>

</BrowserRouter>
  );
}

export default App;
