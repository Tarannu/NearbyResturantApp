import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {

    const [feedback, setFeedback] = useState('');

    const inputChangeHandler = (event) => {
        const updatedFeedback = event.target.value;
        setFeedback(updatedFeedback);
        
    }

    const handleSubmitButton = () => {
        window.location.reload();
    }

    return (
        <div>
            <p>We love your feedback</p>
            <div className="Feedback">
                <textarea 
                    className="FeedbackBox" 
                    onChange={inputChangeHandler}
                    placeholder="Share your experience."/>
                <button 
                    className="FeedbackSubmit"
                    onClick={handleSubmitButton}
                    >Submit</button>
            </div>
            <div>
                <p>Rate your experience</p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </div>
        </div>
    )
}

export default Feedback;