import './App.css';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';


import AboutPage from './components/AboutPage';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';


const App = () => {


  return (

    <FeedbackProvider>

      <Router>

        <Header />
        <div className='container'>
          <Route exact path='/'>
            {/* Home Page Components */}
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />

          </Route>

          <Route path='/about' component={AboutPage} />

          <AboutIconLink />

        </div>

      </Router>

    </FeedbackProvider>

  );
}

export default App;
