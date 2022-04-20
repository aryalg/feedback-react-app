import React, { useContext } from 'react'
import Card from './Card'
import PropTypes from 'prop-types'
import { FaEdit, FaTimes } from 'react-icons/fa';
import { FeedbackContext } from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {


  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display' >{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes />
      </button>

      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple' />
      </button>

      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem