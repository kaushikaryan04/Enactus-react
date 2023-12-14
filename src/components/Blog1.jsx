import React, { useEffect } from "react";
// import "../style-home.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Blog(){

useEffect(()=>{
    AOS.init()
} , [])

    return (
        <>
        <div className="heading">
    <h2>BLOGS</h2>
</div>
<div className="row">
    <div className="column">
        <a href="#">
            <div className="card" data-aos="fade-up">
                <div className="fakeimg" style={{height:"200px"}}><img src="images/blog.webp" alt="blog image"/></div>
                <h2 className="blog-h2">TITLE HEADING</h2>
                <p style={{color:"white"}}> Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco.</p>
            </div>
        </a>
    </div>
    <div className="column">
        <a href="#">
            <div className="card" data-aos="fade-up">
                <div className="fakeimg" style={{height:"200px"}}><img src="images/blog.webp" alt="blog image"/></div>
                <h2 className="blog-h2">TITLE HEADING</h2>
                <p style={{color:"white"}}>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
        </a>
    </div>

    <div className="column">
        <a href="#">
            <div className="card" data-aos="fade-up">
                <div className="fakeimg" style={{height:"200px"}}><img src="images/blog.webp" alt="blog image"/></div>
                <h2 className="blog-h2">TITLE HEADING</h2>
                <p style={{color:"white"}}>Sunt in culpa qui officia deserunt mollit anim id est laborum
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
        </a>
    </div>
    <div className="column">
        <a href="#">
            <div className="card" data-aos="fade-up">
                <div className="fakeimg" style={{height:"200px"}}><img src="images/blog.webp" alt="blog image"/></div>
                <h2 className="blog-h2">TITLE HEADING</h2>
                <p style={{color:"white"}}>Sunt in culpa qui officia deserunt mollit anim id est laborum
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
        </a>
    </div>
</div>
        </>
    )
}

export default Blog ;