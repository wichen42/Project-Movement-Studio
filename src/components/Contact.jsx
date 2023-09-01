import React from 'react'

const Contact = () => {
  return (
    <div className='contact' id='contact-section'>
        <div className="contact-header">
            <div className='contact-tag'>
                <span className='tag-left'>JOIN NOW </span>
                <span>TO GET IN SHAPE</span>
            </div>
            <span className='contact-text'>Get started on your fitness journey! Drop us a line using the form below or reach us at </span>
            <span className='contact-text'>projectmovementstudio@gmail.com</span>
        </div>
        <form
        target="_blank"
        method="POST"
        action="https://formsubmit.co/projectmovementstudio@gmail.com"
        >
            <input type="text" placeholder='NAME' />
            <input type="text" placeholder='EMAIL' />
            <input type="text" placeholder='PHONE NUMBER' />
            <select>
                <option value="default"  selected disabled>Which Program are you interested in?</option>
                <option value="personal">Personal Training</option>
                <option value="group">Group Training</option>
            </select>
            <button>SUBMIT</button>
        </form>
    </div>
  );
};

export default Contact;