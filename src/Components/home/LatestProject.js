import React from 'react'
import '../../index.css'
import { FaArrowRight } from 'react-icons/fa'
import project1 from '../../images/projects/pdf-website.png'
import project2 from '../../images/projects/todo-list.png'

function LatestProject({ latestProjectRef }) {
    return (
        <div ref={latestProjectRef} className="flex flex-col dark:bg-dark ">
            <div className="w-screen flex flex-row item-center justify-center ">
                <div className="flex flex-row item-center justify-between dark:text-darkText w-9/12 selection:bg-selection selection:text-white">
                    <h1 className="font-epl text-base sm:text-lg  lg:text-5xl p-4 font-extrabold">
                        Latest Projects
                    </h1>
                    <button className="underline-btn">
                        <pre className="font-epl text-base sm:text-lg  lg:text-3xl p-4 font-extrabold">
                            {'See all '}
                        </pre>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className="mt-10 dark:text-darkText selection:bg-selection selection:text-white">
                <div className="flex flex-col sm:flex-row lg:flex-row ">
                    <div className="flex flex-col w-screen lg:w-6/12 items-center justify-start">
                        <div className="w-10/12 grow space-y-4">
                            <img
                                src={project1}
                                alt="project hero"
                                className="w-full"
                            />
                            <p className="font-epl text-4xl">PdfEditor</p>
                            <p className="font-epl text-xl">
                                An application to merge your PDFs.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-screen lg:w-6/12 items-center justify-start">
                        <div className="w-10/12 grow space-y-4">
                            <img
                                src={project2}
                                alt="project hero"
                                className="w-full"
                            />
                            <p className="font-epl text-4xl">To Do List</p>
                            <p className="font-epl text-xl">
                                An application to manage a list of tasks you
                                need to complete, or things that you want to do.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProject
