

import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutIconLink = () => {
    return (
        <div className='about-link'>
            <Link to='/about'>

                {/* <FaQuestion /> */}
                <h3>About</h3>
            </Link>
        </div>
    )
}

export default AboutIconLink