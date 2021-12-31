import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import aboutMe from '../../images/unDraw/about_me.svg'
import blogs from '../../images/unDraw/blog_post.svg'
import project from '../../images/unDraw/project.svg'
import stats from '../../images/unDraw/stats.svg'
import sitePlans from '../../images/unDraw/site_plans.svg'

function MyCarousel() {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showArrows={true}
            emulateTouch
            width="100%"
            swipeable
            stopOnHover={true}
            useKeyboardArrows
            showStatus={false}
            showLegends={false}
        >
            <div>
                <h1 className="font-epl text-xl sm:text-lg  lg:text-5xl p-4 font-extrabold">
                    About Gautam
                </h1>
                <img src={aboutMe} alt="about me" />
            </div>
            <div>
                <h1 className="font-epl text-xl sm:text-lg  lg:text-5xl p-4 font-extrabold">
                    Blogs
                </h1>
                <img src={blogs} alt="blog" />
            </div>

            <div>
                <h1 className="font-epl text-xl sm:text-lg  lg:text-5xl p-4 font-extrabold">
                    Projects
                </h1>
                <img src={project} alt="projects" />
            </div>

            <div>
                <h1 className="font-epl text-xl sm:text-lg  lg:text-5xl p-4 font-extrabold">
                    Stats
                </h1>
                <img src={stats} alt="stats" />
            </div>

            <div>
                <h1 className="font-epl text-xl sm:text-lg  lg:text-5xl p-4 font-extrabold">
                    Site Plans
                </h1>
                <img src={sitePlans} alt="site plans" />
            </div>
        </Carousel>
    )
}

export default MyCarousel
