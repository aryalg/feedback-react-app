


import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const AboutPage = () => {
    return (
        <Card>
            <div className='about'>
                <h1>This is About Page</h1>
                <p>React Application to leave feedback for a product or service</p>
                <p>Version: 1.0.3</p>

                <p>
                    <Link to='/'>Back to Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage