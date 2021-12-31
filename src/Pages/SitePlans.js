import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import UnderConstruction from '../Components/UnderConstruction'

function SitePlans() {
    return (
        <Fragment>
            <Helmet>
                <title>plans | gautamvijay.in</title>
            </Helmet>
            <UnderConstruction />
        </Fragment>
    )
}

export default withRouter(SitePlans)
