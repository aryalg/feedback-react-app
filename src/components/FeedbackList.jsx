


import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion';
import { FeedbackContext } from '../context/FeedbackContext';

const FeedbackList = () => {




  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback</p>
  }



  return (
    <AnimatePresence>

      {feedback.map((item) => (

        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}

        >

          < FeedbackItem key={item.id} item={item} />
        </motion.div>

      ))}


    </AnimatePresence>

  )
}

FeedbackItem.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
}



export default FeedbackList