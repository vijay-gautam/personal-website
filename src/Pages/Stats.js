import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import UnderConstruction from '../Components/UnderConstruction'

function Stats() {
    return (
        <Fragment>
            <Helmet>
                <title>stats | gautamvijay.in</title>
            </Helmet>
            <UnderConstruction />
        </Fragment>
    )
}

export default withRouter(Stats)
