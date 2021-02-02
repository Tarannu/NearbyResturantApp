import React from 'react';
import './Feedback.css';

const Feedback = () => {
    return (
        <div>
            <p>We love your feedback</p>
            <div className="Feedback">
                <textarea className="FeedbackBox" value="" placeholder="Share your experience."/>
                <button className="FeedbackSubmit">Submit</button>
            </div>
            <div>
                <p>Rate your experience</p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </div>
        </div>
    )
}

export default Feedback;