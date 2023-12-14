import Header from "../components/Header";
import Blog from "../components/Blog1";
import Footer from "../components/Footer";

function BlogPage () {
    return (
        <div style={{backgroundColor:"black"}}>
  <div class="full-container">

    <div class="header-container">
        <Header/>
    </div>

    <div class="blog-container">
<Blog/>
    </div>

<Footer/>
  </div>

</div>
    )
}

export default BlogPage;