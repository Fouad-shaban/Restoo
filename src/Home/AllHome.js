import React from 'react'

import About from './About'
import RMenu from './RMenu'
import RReservation from './RReservation'


function AllHome() {
    return (
        <div>
            <RMenu />
            
            <About />
            <RReservation />
        </div>
    )
}

export default AllHome