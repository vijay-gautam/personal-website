import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import UnderConstruction from '../Components/UnderConstruction'

function Projects() {
    return (
        <Fragment>
            <Helmet>
                <title>projects | gautamvijay.in</title>
            </Helmet>
            <UnderConstruction />
        </Fragment>
    )
}

export default withRouter(Projects)
