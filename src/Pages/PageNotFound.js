import React, { Fragment } from 'react'
import '../index.css'
import notFound from '../images/unDraw/404_image.svg'
import { Helmet } from 'react-helmet'

function PageNotFound() {
    return (
        <Fragment>
            <Helmet>
                <title>Page not found</title>
            </Helmet>
            <div className="">
                <div className="flex flex-col w-screen dark:bg-dark w-screen items-center justify-center p-10 sm:p-12 lg:p-10">
                    <h1 className="font-epl text-2xl sm:text-2xl  lg:text-3xl p-4 font-extrabold dark:text-darkText selection:bg-selection selection:text-white">
                        Page not found !
                    </h1>
                    <h1 className="font-epl text-xl sm:text-xl  text-center lg:text-2xl p-4 font-extrabold dark:text-darkText selection:bg-selection selection:text-white">
                        The page you’re looking for doesn’t exist.
                    </h1>
                    <img
                        className="w-3/4 h-3/4 lg:w-1/4  lg:w-1/4"
                        src={notFound}
                        alt="hero"
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default PageNotFound
