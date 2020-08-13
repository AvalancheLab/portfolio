import React from 'react'
import styled from 'styled-components' 
import { Section, PageWrapper } from '../components'
import { FaVideo as Icon} from 'react-icons/fa'
import ReactPlayer from 'react-player'
import { videos } from '../content'
import { colors } from '../theme'

const Gallery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
`

const Video = styled(ReactPlayer)`
    margin: 0 auto;
    box-shadow: 0px 3px 6px ${colors.light[100]};
    background-repeat: no-repeat;
    border: 0.5rem solid ${colors.light[300]};
`

export const MotionGraphics = () => { 

    return (
        <PageWrapper>
            <Section title="Motion Graphics" icon={Icon} description="A selection of some of my motion graphics and video editing work."/>
            <Gallery>
                {videos.map((video, idx) => {
                    return <Video key={idx} width="100%"  url={video.url}/>
                })}
            </Gallery>
        </PageWrapper>
    )
}