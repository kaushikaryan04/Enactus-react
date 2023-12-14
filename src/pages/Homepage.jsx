import Header from "../components/Header";
import Contactus from "../components/Contactus";
import Blog from "../components/Blog1";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import About from "../components/About"
import "../style-home.css"

function Home(){
    return (
        <>
        <div className="full-container">
      
      <div className="header-container">
          <Header/>
        </div>
      
      
      <div className="about-section" data-aos="fade-up">
        <div className="about-inner">
          <About/>
        </div>
        <button className="about-btn">More</button>
      </div>
      
      
      
      <div className="blog-container" data-aos="fade-up">
      <Blog/>
      </div>
      
      <div className="contact-us-container">
          <Contactus/>
      </div>
      
          <Footer/>
      </div>

          </>
    )
}

export default Home ;