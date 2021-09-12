import React from 'react'
import { Header, Footer } from './index'
import ScrollToTopButton from './ScrollToTopButton'

function Wrapper({ children }) {
    return (
        <React.Fragment>
            <Header />
            {children}
            <ScrollToTopButton />
            <Footer />
        </React.Fragment>
    )
}

export default Wrapper
