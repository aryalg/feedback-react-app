import { useState } from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import { v4} from 'uuid';


function App() {

  const [feedback, setFeedback] = useState(FeedbackData) 


    const deleteFeedback = (id) => {
      if (window.confirm('Are you sure you want to delete?')) {
      
        setFeedback(feedback.filter((item) => item.id !== id))
      
    }
    }
  

  const addFeedback = (newFeedback) => {
    newFeedback.id = v4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

    setFeedback([newFeedback, ...feedback]);
  }



  
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <FeedbackForm handleAddFeedback={addFeedback} />
        <FeedbackStats feedback={feedback} />
       <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
      
      

    </div>
  );
}

export default App;
