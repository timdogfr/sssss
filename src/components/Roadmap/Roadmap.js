import React from 'react'
import { FlexContainer, RoadmapImg } from './Roadmap.element'

function Roadmap() {
  return (
    <>
        <RoadmapImg wid={80} src={"config/images/roadmap.png"}></RoadmapImg>
        <RoadmapImg wid={40} src={"config/images/roadmap2.png"}></RoadmapImg>
        
    </>
  )
}

export default Roadmap