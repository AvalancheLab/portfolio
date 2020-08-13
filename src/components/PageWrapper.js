import React from 'react'
import styled from 'styled-components' 

const Wrapper = styled.div`
    max-width: 70rem;
    min-width: 20rem;
    width: 100%;
    padding: 4rem 1rem;
    margin: 0 auto;
` 

export const PageWrapper = ({ className, children }) => { 

    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    )
}