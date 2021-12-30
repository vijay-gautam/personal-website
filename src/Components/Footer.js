import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useNavigator } from '../Routing'

function Footer() {
    const nav = useNavigator()

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div class="bg-white pt-4 sm:pt-10 lg:pt-12 dark:bg-dark w-screen dark:text-darkText selection:bg-selection selection:text-white">
            <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div class="flex flex-col items-center justify-around border-t border-base dark:border-darkText p-6">
                    <div class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6 mb-4">
                        <button
                            onClick={() => nav.navigateToAboutPage()}
                            class="font-epl text-base hover:text-default sm:text-lg  lg:text-lg p-3 transition duration-100"
                        >
                            About
                        </button>
                        <button
                            onClick={() => nav.navigateToBlogPage()}
                            class="font-epl text-base hover:text-default sm:text-lg  lg:text-lg p-3 transition duration-100"
                        >
                            Blogs
                        </button>
                        <button
                            onClick={() => nav.navigateToProjectsPage()}
                            class="font-epl text-base hover:text-default sm:text-lg  lg:text-lg p-3 transition duration-100"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => nav.navigateToSiteStatsPage()}
                            class="font-epl text-base hover:text-default sm:text-lg  lg:text-lg p-3 transition duration-100"
                        >
                            Stats
                        </button>
                        <button
                            onClick={() => nav.navigateToSitePlansPage()}
                            class="font-epl text-base hover:text-default sm:text-lg  lg:text-lg p-3 transition duration-100"
                        >
                            Site Plans
                        </button>
                    </div>

                    <div class="flex gap-4">
                        <FaTwitter
                            onClick={() =>
                                openInNewTab('https://twitter.com/callmegautam')
                            }
                            className="text-twitter dark:text-twitter text-3xl cursor-pointer"
                        />
                        <FaGithub
                            onClick={() =>
                                openInNewTab('https://github.com/vijay-gautam')
                            }
                            className="text-black dark:text-white text-3xl cursor-pointer"
                        />
                        <FaLinkedin
                            onClick={() =>
                                openInNewTab(
                                    'https://www.linkedin.com/in/gautamvijay-07/'
                                )
                            }
                            className="text-linkedin dark:text-linkedin text-3xl cursor-pointer"
                        />
                    </div>
                </div>

                <div class="font-epl text-base text-center sm:text-lg  lg:text-lg p-3">
                    © 2021 - Gautam Vijay. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer
