import React from 'react'
import '../index.css'
import project1 from '../images/projects/pdf-website.png'
import project2 from '../images/projects/todo-list.png'

function ProjectCard({ project }) {
    return (
        <div className="flex flex-col sm:flex-row lg:flex-row ">
            <div className="flex flex-col w-screen lg:w-6/12 items-center justify-start">
                <div className="w-10/12 grow space-y-4">
                    <img
                        src={project.imageName}
                        alt="project hero"
                        className="w-full"
                    />
                    <p className="font-epl text-4xl">{project.displayName}</p>
                    <p className="font-epl text-xl">{project.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
