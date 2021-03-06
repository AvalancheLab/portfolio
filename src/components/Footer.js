import React from 'react'
import styled from 'styled-components' 
import { SiteLogo } from '../components'
import { colors, typeScale, fonts } from '../theme'
import { useIsMobile } from '../utils/hooks'
import { PageWrapper } from './PageWrapper'
import { pages } from '../content'
import { Link } from 'react-router-dom'

const Background = styled.footer`
    background-color: ${colors.blue[100]};
` 

const NavListDesktop = styled.ul`
    display: grid;
    grid-auto-flow: column;
    width: min-content;
    grid-gap: 2rem;
    margin-top: 1rem;
`

const NavListMobile = styled.ul`
    display: grid;
    grid-auto-flow: row;
    grid-gap: 0.25rem;
    margin-top: 1rem;
`

const NavItem = styled.li`
    color: ${colors.light[300]};
    font-size: ${typeScale.body};
    :first-letter {
        text-transform:capitalize;
    }
    white-space: nowrap;
`

const NavItems = pages.map(({ name, path }, idx) => {
    return <Link key={idx} to={path}><NavItem>{name}</NavItem></Link>
});



export const Footer = () => { 

    const isMobile = useIsMobile();

    const NavList = isMobile ? NavListMobile : NavListDesktop;

    return (
        <Background>
            <PageWrapper>
                <SiteLogo/>
                <NavList>
                    {NavItems}
                </NavList>
            </PageWrapper>
           
        </Background>
    )
}