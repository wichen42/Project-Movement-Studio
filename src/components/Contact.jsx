import { useState } from "react";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setNumber('');
        setType('');
    }

    return (
        <div className="contact-container">
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
                onSubmit={handleSubmit}
                >
                    <input type="text" 
                    placeholder='NAME' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                    <input type="text" 
                    placeholder='EMAIL' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" 
                    placeholder='PHONE NUMBER' 
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}/>
                    <select 
                    onChange={(e) => setType(e.target.value)}
                    value={type}>
                        <option value="default"  selected disabled>Which Program are you interested in?</option>
                        <option value="personal">Personal Training</option>
                        <option value="group">Group Training</option>
                    </select>
                    <button>SUBMIT</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;