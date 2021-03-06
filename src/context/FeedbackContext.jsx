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





    const addFeedback = async (newFeedback) => {
        newFeedback.id = v4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

        const res = await fetch('/feedbacks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await res.json()

        setFeedback([data, ...feedback])
    }

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {

            // CRUD
            // Create - POST
            // Read - GET
            // Delete - DELETE
            // UPDATE - PATCH/PUT


            await fetch(`feedbacks/${id}`, { method: 'DELETE' })

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
    const updateFeedback = async (id, updatedItem) => {

        const res = await fetch(`/feedbacks/${id}`, {
            method: 'PUT', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem),

        })

        const data = await res.json();

        setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...data } : item)));

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