import { createContext, useEffect, useState } from 'react';

import { v4 } from 'uuid';

const FeedbackContext = createContext();


const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([])

    const [isLoading, setIsLoading] = useState(false);




    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })




    useEffect(() => {

        setIsLoading(true);

        // Fetch feedback from json server here
        fetchFeedbacks();

        setIsLoading(false);

    }, [])


    const fetchFeedbacks = async () => {

        const res = await fetch('/feedbacks')


        const data = await res.json()

        setFeedback(data);

    }





    const addFeedback = (newFeedback) => {
        newFeedback.id = v4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {

            setFeedback(feedback.filter((item) => item.id !== id))

        }
    }


    const editFeedback = (item) => {

        console.log(item);

        setFeedbackEdit({
            item,
            edit: true

        })
    }
    const updateFeedback = (id, updatedItem) => {

        setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)));

        setFeedbackEdit({
            item: {},
            edit: false
        })

    }



    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                addFeedback,
                deleteFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback,
                isLoading

            }}

        >

            {children}

        </FeedbackContext.Provider>

    )
}

export { FeedbackProvider, FeedbackContext }