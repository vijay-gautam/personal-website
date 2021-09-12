import React from 'react'
import Toggle from '../theme/themeToggleButton'
import nameLight from '../images/title/name-light.svg'
import nameDark from '../images/title/name-dark.svg'
import { ThemeContext } from '../theme/themeContext'
import { useNavigator } from '../Routing'

function Header() {
    const { theme } = React.useContext(ThemeContext)

    const nav = useNavigator()

    return (
        <div className="w-screen flex flex-row justify-center items-center dark:bg-dark">
            <div className="flex flex-row w-9/12 justify-between items-centers mt-3">
                <img
                    className="lg:h-52 lg:w-52 cursor-pointer"
                    src={theme === 'dark' ? nameDark : nameLight}
                    alt="logo"
                    onClick={() => nav.navigateToHomePage()}
                />
                <Toggle />
            </div>
        </div>
    )
}

export default Header
