import React from 'react'
import styled from 'styled-components' 
import { FaCodepen as Logo } from 'react-icons/fa'
import { colors, typeScale, fonts } from '../theme'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    color: ${colors.light[300]};
` 

const Name = styled.div`
    margin-left: 0.5rem;
    font-family: ${fonts.header};
    font-size: ${typeScale.h4};
    font-weight: bold;
`

export const SiteLogo = ({ className }) => { 
    return (
        <Wrapper className={className}>
            <Logo size="1.25rem" color={colors.light[300]}/>
            <Name>aidank.dev</Name>
        </Wrapper>
    )
}