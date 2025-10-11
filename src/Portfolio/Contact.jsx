import React from 'react'

const Contact = () => {
    return (
        <div className="contact" id='contact'>
            <h2>Contact Me</h2>

            <div className="form-items">
                {/* name and email */}
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Name</label><br />
                        <input type="text" id='name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" id='email' />
                    </div>
                </div>

                {/* dropdown */}
                <div className="reason">
                    <label htmlFor="reason">Contact for</label><br />
                    <select id="reason">
                        <option value="work">Networking</option>
                        <option value="work">Freelance</option>
                        <option value="work">Collaboration</option>
                        <option value="support">Mentorship</option>
                        <option value="feedback">Feedback</option>
                    </select>
                </div>

                <div className="feedback">
                    {/* feedback */}
                    <label htmlFor="message">Message</label><br />
                    <textarea name="" id="message"></textarea>
                </div>
            </div>
        </div>
    )
}

export default Contact