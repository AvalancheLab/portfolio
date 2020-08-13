import React from 'react'
import styled from 'styled-components' 
import { colors, fonts, typeScale } from '../theme'
import { fluid } from '../utils/css'
import { PageWrapper } from '../components'
import { flyUp } from '../utils/css'

const img = 'https://images.unsplash.com/photo-1514917860136-ee8b88e8c9c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80';

const Wrapper = styled.div`
    background: url(${img});
    background-size: cover;
    background-position-y: 60%;
    background-repeat: no-repeat;
    color: ${colors.light[300]};
    height: 34rem;
    ${fluid('height', '16rem', '28rem', '20rem', '70rem')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 0;
    position: relative;
` 

const Filter = styled.div`
    background: ${colors.blue[100]};
    opacity: 0.4;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
`

const Title = styled.h1`
    position: relative;
    font-family: ${fonts.header};
    ${fluid('font-size', typeScale.h2, typeScale.h1, '20rem', '70rem')};
    font-weight: bold;
    z-index: 2;
    
`

const Subtitle = styled.h2`
    position: relative;
    margin-top: 1rem;
    ${fluid('font-size', typeScale.body, typeScale.h3, '20rem', '70rem')};
    z-index: 2;
`

export const Hero = () => { 
    return (
        <Wrapper fullWidth="true">
            <Filter/>
            <PageWrapper>
                    <Title>Hi, my name is Aidan.</Title>
                    <Subtitle>I'm a physics graduate looking for front end development work.</Subtitle>
            </PageWrapper>
        </Wrapper>
    )
}