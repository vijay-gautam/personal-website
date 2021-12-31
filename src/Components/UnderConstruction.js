import React from 'react'
import construction from '../images/unDraw/under_construction.svg'

function UnderConstruction() {
    return (
        <div className="flex flex-col w-screen dark:bg-dark w-screen items-center justify-center p-10 sm:p-12 lg:p-10 dark:text-darkText selection:bg-selection selection:text-white">
            <h1 className="font-epl text-2xl sm:text-2xl text-center  lg:text-5xl p-4 font-extrabold">
                Under Construction....
            </h1>
            <img
                className="w-3/4 h-3/4 lg:w-2/4  lg:w-2/4"
                src={construction}
                alt="hero"
            />
        </div>
    )
}

export default UnderConstruction
