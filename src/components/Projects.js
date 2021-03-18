import React from 'react'
import "../styles/Projects.css"
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
      <>
        <div className="projects-container">
          <ProjectCard
              src = "/images/logobeer.png"
              name = "BeerCalc"
              linkToSource = "https://github.com/juliapedrycz/BeerCalc"
              linkToView = "https://play.google.com/store/apps/details?id=cz.pedry.beer"
              text = 'Android application that helps to calculate the IBU index and the alcohol content of homemade beer. It is is written in Java, using Fragments, Shared Preferences, Listeners, and Array Adapter. It is available in Polish and English, with both European and American units.'
          />
          <ProjectCard
              src = "/images/logome.png"
              name = "My Portfolio"
              text = "Website you are currently on, created with React."
              linkToSource = "https://github.com/juliapedrycz/portfolio-website"
          />
          <ProjectCard
              src = "/images/logoasia.png"
              name = "Asia's Portfolio"
              linkToView = "https://asiagrabka.pl/"
              text = "Portfolio website made with WordPress for my friend. It presents her paintings and handmade bags. This website is hosted on Google Cloud."
          />
        </div>
      </>
  )
}
export default Projects;
