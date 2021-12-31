import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './Routing/routes'
import Wrapper from './Components/Wrapper'
import { ThemeProvider } from './theme/themeContext'
import PageNotFound from './Pages/PageNotFound'
// const queryClient = new QueryClient();

function App() {
    return (
        <React.Fragment>
            {/* <QueryClientProvider client={queryClient}> */}
            <BrowserRouter>
                <ThemeProvider>
                    <Wrapper>
                        <Switch>
                            {routes.map((route) => (
                                <Route
                                    key={route.map}
                                    exact={route.exact}
                                    path={route.path}
                                    render={() => <route.component />}
                                />
                            ))}
                            <Route component={PageNotFound} />
                        </Switch>
                    </Wrapper>
                </ThemeProvider>
            </BrowserRouter>
            {/* </QueryClientProvider> */}
        </React.Fragment>
    )
}

export default App
