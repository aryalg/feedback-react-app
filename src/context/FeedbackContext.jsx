import { createContext, useState } from 'react';

import { v4 } from 'uuid';

const FeedbackContext = createContext();


const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'Feedback from Context',
            rating: 6
        }

    ])

    const addFeedback = (newFeedback) => {
        newFeedback.id = v4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {

            setFeedback(feedback.filter((item) => item.id !== id))

        }
    }



    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                addFeedback,
                deleteFeedback,
                name: 'Bikram'
            }}

        >

            {children}

        </FeedbackContext.Provider>

    )
}

export { FeedbackProvider, FeedbackContext }