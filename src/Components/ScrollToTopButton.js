import React, { Fragment, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

function ScrollToTopButton() {
    const [visibility, setVisibility] = useState(false)

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    }

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            setVisibility(true)
        } else {
            setVisibility(false)
        }
    }

    function backToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    return (
        <Fragment>
            {visibility ? (
                <button
                    className="rounded-full h-40 w-20  flex justify-center items-center fixed bottom-5 right-5 animate-pulse bg-default"
                    onClick={() => backToTop()}
                >
                    <IoIosArrowUp className="text-white text-3xl" />
                </button>
            ) : null}
        </Fragment>
    )
}

export default ScrollToTopButton
