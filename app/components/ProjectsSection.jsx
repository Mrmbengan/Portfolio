"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData = [
  {
    id:1,
    title:"React Portfolio Website",
    description:"A portfolio website built with React and Tailwind CSS",
    image:"/images/projects/ReactPortfolio.png",
    link:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    tag: ["All", "Web", "Mobile", "React", "Next.js", "Tailwind"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id:2,
    title:"E-Commerce Application",
    description:"A Webshop built with React",
    image:"/images/projects/React-webshop.png",
    link:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    tag: ["All", "Web", "Mobile", "React",],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id:3,
    title:"LoopStudio LandingPage",
    description:"A Landing Page built Tailwind CSS",
    image:"/images/projects/loopstudioDeskMobile.png",
    link:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    tag: ["All","Web", "Mobile", "Tailwind"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id:4,
    title:"Tailwind Landing",
    description:"Alanding page built Tailwind CSS",
    image:"/images/projects/tailwind-landing.png",
    link:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    tag: ["All","Web", "Mobile", "React", "Next.js", "Tailwind"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id:5,
    title:"Rock, Papers scissors",
    description:"rock, papers scissors game",
    image:"/images/projects/rock-paper-sissors.png",
    link:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    tag: ["All", "Web", "Js"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id:6,
    title:"PHP Wordpress Webshop",
    description:"webshop built with Wordpress and PHP",
    image:"/images/projects/Worpress.png",
    link:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    tag: ["All", "Wordpress", "PHP",],
    gitUrl: "/",
    previewUrl: "/",
  }
]
const ProjectsSection =() => {
  const [tag, setTag] = useState("All")

  const handleTagChange = (newTag) => {
    setTag(newTag)
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
          onClick={handleTagChange} 
          name="All" 
          isSelected={tag === "All"} 
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name="Web" 
          isSelected={tag === "Web"} 
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name="Mobile" 
          isSelected={tag === "Mobile"} 
        />
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        
        {filteredProjects.map((project) => (
        <ProjectCard key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image} 
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        />
        ))}
      </div>
    </>
  )
}

export default ProjectsSection