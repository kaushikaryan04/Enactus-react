import "../style-project.css"

function Projects(){
    return (
        <>
    <h1 className="projects">PROJECTS</h1>

<div className="container-projects">
    <div className="P1">
        <img src="https://content.imageresizer.com/images/memes/Apni-aukat-dikha-di-meme-85w3mu.jpg" className="img-projects"/>
        <h3 className="heading-projects"> COASTAL CLEANUPS</h3>
        <p className="content-projects"> We organize community beach <br/> 
                            cleanups to clear litter around <br/> 
                            coastlines.
        </p>
    </div>
    <div className="P1-projects">
        <img src="https://wallpaperaccess.com/full/428217.jpg" className="img-projects" />
        <h3 className="heading-projects"> ENVIRONMENTAL LOBBYING</h3>
        <p className="content-projects"> We push for governments <br/>
                            worldwide to protect oceans and <br/>
                            marine life.
        </p>
    </div>
    </div>
    </>

    )
}
export default Projects;