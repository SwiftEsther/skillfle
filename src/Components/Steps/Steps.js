import React from 'react';
import './Steps.css';
import steps from '../../assets/ipad-img.jpeg';

const Steps = () => (
    <section className="section-steps" id="works">
            <div className="row">
                <h2>How it works</h2>
            </div>
            <div className="row">
                <div className = "col span_1_of_2 step-img">
                    <img src={steps} />
                </div>
                <div className="col span_1_of_2 steps-box">
                    <div className="works-steps">
                        <div>1</div>
                        <h4>CV/RESUME REVIEW</h4>
                        <p>Upload or fill your current CV/Resume, we review, rate it and list out skills needed to make it a '5 star' Resume based on the role of your discipline.</p>
                    </div>
                    <div className="works-steps">
                        <div>2</div>
                        <h4>LEARN THE SKILLS</h4>
                        <p>Each tutorial is like an interactive textbook featuring prerecorded videos, quizes and pages.</p>
                    </div>
                    <div className="works-steps">
                        <div>3</div>
                        <h4>HELP AND SUPPORT</h4>
                        <p>Connect with thousands of other learners and debate ideas, discuss course materials and get help mastering concepts.</p>
                    </div>
                    <div className="works-steps">
                        <div>4</div>
                        <h4>CERTIFICATES</h4>
                        <p>Earn official recognition for your work and share success with friends, colleagues and potential employers.</p>
                    </div>
                    <div className="works-steps last">
                        <div>5</div>
                        <h4>TALENT HUNT</h4>
                        <p>Comapnies and recruiters get to select Resumes solely based on Skills and not Nepotism.</p>
                    </div>
                </div>
            </div>
        </section>
)

export default Steps;