import { useState } from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import { v4 } from 'uuid';

import AboutPage from './components/AboutPage';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink';


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

    <Router>

      <Header />
      <div className='container'>


        <Route exact path='/'>
          {/* Home Page Components */}
          <FeedbackForm handleAddFeedback={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />

        </Route>


        <Route path='/about' component={AboutPage} />

        <AboutIconLink />





      </div>

    </Router>


  );
}

export default App;
