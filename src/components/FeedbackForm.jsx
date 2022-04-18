import React, { useState } from 'react'
import Card from './Card'

const FeedbackForm = () => {

    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }


    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <div>
                    <input
                        onChange={handleTextChange}
                        type='text'
                        placeholder='Write a review'
                        value={text}

                    />
                    <button type='submit' className='btn btn-primary'>
                        Send
                    </button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm