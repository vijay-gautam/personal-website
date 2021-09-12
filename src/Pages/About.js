import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
// import { navigateToHomePage } from '../Routing'
import { useNavigator } from '../Routing'

function About() {
    const nav = useNavigator()

    return (
        <Fragment>
            <Helmet>
                <title>about | gautamvijay.dev</title>
            </Helmet>
            <button onClick={() => nav.navigateToHomePage()}>Go Home!</button>
        </Fragment>
    )
}

export default withRouter(About)
