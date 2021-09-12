import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

function BounceArrow({ scrollRef }) {
    // Add to code snippets
    const scrollTo = (ref) =>
        window.scrollTo({
            top: ref.current.offsetTop,
            left: 0,
            behavior: 'smooth',
        })

    return (
        <div className="w-screen flex items-center justify-center dark:bg-dark">
            <IoIosArrowDown
                onClick={() => scrollTo(scrollRef)}
                className="dark:text-gray-400 text-4xl cursor-pointer animate-bounce"
            />
        </div>
    )
}

export default BounceArrow
