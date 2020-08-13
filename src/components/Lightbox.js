import React, { useState } from 'react'
import styled from 'styled-components' 
import { colors } from '../theme'
import { MdClose as Close } from 'react-icons/md'

 
const DimBackground = styled.div`
    background: ${colors.blue[100]};
    opacity: 0.8;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    padding: 3rem;
    background-color: ${colors.light[300]};
` 

const CloseButton = styled(Close)`
    
`

const Photo = styled.img`

`

export const Lightbox = ({ photo }) => { 

    return (
        <DimBackground>
            <Wrapper>
                <Photo src=""></Photo>
            </Wrapper>
        </DimBackground>
    )
}