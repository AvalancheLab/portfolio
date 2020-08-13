import React from 'react'
import styled from 'styled-components' 
import { colors } from '../theme'
import { Section, PageWrapper } from '../components'
import { MdCameraAlt as Icon } from 'react-icons/md'
import { zoom } from '../utils/css'

const Gallery = styled.div`
    display: grid;
    grid-gap: 1rem;
    padding: 1rem; 
    border: 1px solid ${colors.light[100]};
`

const Photo = styled.img`
    width: 100%;
    background-size: cover;
    box-shadow: 0px 3px 6px ${colors.light[100]};
    background-repeat: no-repeat;
    border: 0.5rem solid ${colors.light[300]};
`

const photos = importAll(require.context("../assets/photos", false)); 

function importAll(r) {
    return r.keys().map(r);
}

export const Photography = () => { 
    return (
        <>  
            <PageWrapper>
                <Section title="Photography" icon={Icon} description="A selection of some of my photography work."/>
                <Gallery>
                    {photos.map((url, idx) => {
                        console.log(url)
                        return  <Photo key={idx} src={url}/>
                    })}
                </Gallery>
            </PageWrapper>
        </>
    )
}