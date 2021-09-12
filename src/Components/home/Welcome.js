import React from 'react'
import MyCarousel from './Carousel'
import { useNavigator } from '../../Routing'

function Welcome({ welcomeRef }) {
    const nav = useNavigator()

    return (
        <div
            className="flex flex-col item-center justify-around sm:flex-row lg:flex-row dark:bg-dark w-screen"
            ref={welcomeRef}
        >
            <div className="flex flex-col items-center text-center justify-center items-center dark:text-darkText lg:w-4/12 selection:bg-selection selection:text-white">
                <h1 className="font-epl text-base sm:text-lg  lg:text-5xl p-4 font-extrabold">
                    Welcome
                </h1>
                <button
                    className="font-epl lg:text-lg lg:max-w-xs p-3 border-2 rounded-xl border-default bg-default text-white hover:opacity-75"
                    onClick={() => nav.navigateToAboutPage()}
                >
                    For skills and experience, click here to head straight to
                    the good stuff
                </button>
                {/* </Link> */}
                <p className="font-epl text-base sm:text-lg  lg:text-lg p-3">
                    The site is a fun project for me to consistently work on and
                    expand as I continue to learn.
                </p>
                <p className="font-epl text-base sm:text-lg  lg:text-lg p-3">
                    Parts of this site are dedicated to selling myself and
                    showing off what I've made and accomplished.
                </p>
                <p className="font-epl text-base sm:text-lg  lg:text-lg p-3">
                    Other parts are just for fun and trying out new things.
                </p>
                <p className="font-epl text-base sm:text-lg  lg:text-lg p-3 ">
                    Have a good look around. If you find any issues or have any
                    suggestions then please{' '}
                    <a
                        className="text-default font-bold underline"
                        href="https://twitter.com/messages/compose?recipient_id=1283026029452365826&text=Topic%3A%20ryangregory.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        let me know
                    </a>
                    .
                </p>
            </div>
            <div className="p-6 dark:text-darkText w-screen lg:w-4/12 cursor-pointer">
                <MyCarousel />
            </div>
        </div>
    )
}

export default Welcome
