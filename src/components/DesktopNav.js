import React from 'react'
import styled from 'styled-components' 
import { colors, typeScale } from '../theme'
import { pages } from '../content'
import { Link } from 'react-router-dom'

const Wrapper = styled.ul`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2rem;
`

const NavItem = styled.li`
    color: ${colors.light[300]};
    font-size: ${typeScale.body};
    :first-letter {
        text-transform:capitalize;
    }
`

const NavItems = pages.map(({ name, path }, idx) => {
    return <Link key={idx} to={path}><NavItem>{name}</NavItem></Link>
});

export const DesktopNav = () => { 
    return (
        <Wrapper>
            {NavItems}
        </Wrapper>
    )
}