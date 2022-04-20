import React, { useContext, useEffect, useState } from 'react'
import { FeedbackContext } from '../context/FeedbackContext';
import Button from './Button';
import Card from './Card'
import RatingSelect from './RatingSelect';

const FeedbackForm = () => {


    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);


    useEffect(() => {

        if (feedbackEdit.edit === true) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }



    }, [feedbackEdit])

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);

    const handleTextChange = (e) => {

        if (text === '') {
            setBtnDisabled(true);
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null);
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }




            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback);
            }


            setText('');
            setBtnDisabled(true)

        }

    }







    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => {
                    console.log('received rating is', rating);
                    setRating(rating)
                }} />
                <div>
                    <input
                        onChange={handleTextChange}
                        type='text'
                        placeholder='Write a review'
                        value={text}

                    />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>

                    {message && <div className='message'>{message} </div>}
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm