import React, { useState, useEffect, useRef, Fragment } from 'react'
import '../index.css'
import feelingproud from '../images/unDraw/feeling_proud.svg'
import Welcome from '../Components/home/Welcome'
import { Helmet } from 'react-helmet'
import BounceArrow from '../Components/BounceArrow'
import LatestProject from '../Components/home/LatestProject'
import { withRouter } from 'react-router-dom'

function Home() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const t1 = new Date(2000, 9, 7, 0, 0, 0, 0)
    const t2 = new Date()
    const dif = t2.getTime() - t1.getTime()
    const ageDate = Math.abs(new Date(dif).getUTCFullYear() - 1970)

    const [secondsAlive, setSecondsAlive] = useState(Math.round(dif / 1000))
    const [yearsAlive, setYearsAlive] = useState(ageDate)

    const welcomeRef = useRef()
    const latestProjectRef = useRef()

    useEffect(() => {
        const getDifference = () => {
            const newT2 = new Date()
            const newDif = Math.round((newT2.getTime() - t1.getTime()) / 1000)
            setSecondsAlive(newDif)
        }

        const calculateAge = () => {
            const newT2 = new Date()
            const newDif = newT2.getTime() - t1.getTime()
            const newAgeDate = new Date(newDif) // miliseconds from epoch
            setYearsAlive(Math.abs(newAgeDate.getUTCFullYear() - 1970))
        }

        const differenceInterval = setInterval(getDifference, 1000)
        const ageInterval = setInterval(calculateAge, 1000)

        return () => {
            clearInterval(differenceInterval)
            clearInterval(ageInterval)
        }
    }, [t1])

    const addCommas = (value) => {
        // Add to code snippets
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    return (
        <Fragment>
            <Helmet>
                <title>home | gautamvijay.dev</title>
            </Helmet>
            <div className="flex flex-col w-screen dark:bg-dark">
                <div className="h-52 w-screen text-center flex items-center justify-center  p-4 sm:p-12 lg:p-10 selection:bg-selection selection:text-white">
                    <p className="font-epl  text-base max-w-xs   sm:max-w-xl sm:text-lg  lg:max-w-xl lg:text-xl dark:text-darkText">
                        Hi there, I'm{' '}
                        <span className="text-default">Gautam</span> from INDIA,
                        this is my little corner of the internet where I can
                        show off some of the things I have done in my{' '}
                        {yearsAlive} years or {addCommas(secondsAlive)} seconds
                        on this rock.
                    </p>
                </div>
                <div className="w-screen flex items-center justify-center p-10 sm:p-12 lg:p-10 ">
                    <img className="grow" src={feelingproud} alt="hero" />
                </div>
            </div>
            <BounceArrow scrollRef={welcomeRef} />
            <Welcome welcomeRef={welcomeRef} />
            <BounceArrow scrollRef={latestProjectRef} />
            <LatestProject latestProjectRef={latestProjectRef} />
            <BounceArrow scrollRef={latestProjectRef} />
        </Fragment>
    )
}

export default withRouter(Home)
