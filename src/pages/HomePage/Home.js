import React from 'react'
import InfoSection from '../../components/Navbar/InfoSection'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

const Home = () => {
    return (
        <div>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>

        </div>
    )
}

export default Home
