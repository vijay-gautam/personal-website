import { useHistory } from 'react-router-dom'

export const useNavigator = () => {
    const appHistory = useHistory()
    const navigateToHomePage = () => {
        appHistory.push('/')
    }

    const navigateToAboutPage = () => {
        appHistory.push('/about')
    }

    const navigateToBlogPage = () => {
        appHistory.push('/blogs')
    }

    const navigateToProjectsPage = () => {
        appHistory.push('/projects')
    }

    const navigateToIndividualProjectsPage = (projectname) => {
        appHistory.push(`/projects/${projectname}`)
    }

    const navigateToSiteStatsPage = () => {
        appHistory.push('/stats')
    }

    const navigateToSitePlansPage = () => {
        appHistory.push('/plans')
    }

    return {
        navigateToHomePage,
        navigateToAboutPage,
        navigateToBlogPage,
        navigateToProjectsPage,
        navigateToIndividualProjectsPage,
        navigateToSitePlansPage,
        navigateToSiteStatsPage,
    }
}
