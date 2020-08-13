import React from 'react'
import styled from 'styled-components'
import { colors, GlobalStyling } from './theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, MotionGraphics, Photography, Error404 } from './pages'
import { Header, Footer, BackToTop } from './components'

const SiteWrapper = styled.div`
    background-color: ${colors.light[300]};

    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
`

const PageRoutes = (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/motiongraphics" exact component={MotionGraphics}/>
        <Route path="/photography" exact component={Photography}/>
        <Error404/>
    </Switch>
)

export default function App () { 
    return (
        <Router>
            <GlobalStyling/>
            {/* <a id="top"></a> */}
            <SiteWrapper>
                <Header/>
                <BackToTop/>
                    {PageRoutes}
                <Footer/>
            </SiteWrapper>
        </Router>
    )
}