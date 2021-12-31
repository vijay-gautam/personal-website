import UnderConstruction from '../Components/UnderConstruction'
import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'

// import { useNavigator } from '../Routing'

function About() {
    // const nav = useNavigator()

    return (
        <Fragment>
            <Helmet>
                <title>about | gautamvijay.in</title>
            </Helmet>
            <UnderConstruction />
        </Fragment>
    )
}

export default withRouter(About)
