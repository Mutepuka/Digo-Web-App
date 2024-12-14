"use client";

import React,{useState, useEffect} from 'react';

const ContactForm = () => {

    const initialState = {
        fullname: '',
        email: '',
        subject: '',
        message: '',
        result: ''

    };
    const [text, setText] = useState(initialState);

    //change text functon
    const changeText = e =>{
        const {name, value} = e.target;
        setText({...text, [name]: value, result: ''});

    }

    //handle submit function
    const handleFormSubmit = e=>{
        e.preventDefault();

        //check if the input fields are empty
        if(text.fullname === '' || text.email === '' || text.message === ''){
            setText({...text, result: 'incomplete'});
            return;
        }
        console.log('form submitted')
    }
  return (
    <form role='form' className="contact-form" onSubmit={handleFormSubmit}>
        <div className="row">
            <div className="col-md-6 mb-3">
                <div className="form-group">
                    <input
                    type='text'
                    name='fullname'
                    placeholder='Yourname'
                    value={text.fullname}
                    onChange={changeText}
                    className='form-control form-control-lg form-control-a'
                    />
                </div>
            </div>

            <div className="col-md-6 mb-3">
                <div className="form-group">
                    <input
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={text.email}
                    onChange={changeText}
                    className='form-control form-control-lg form-control-a'
                    />
                </div>
            </div>

            <div className="col-md-12 mb-3">
                <div className="form-group">
                    <input
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    value={text.subject}
                    onChange={changeText}
                    className='form-control form-control-lg form-control-a'
                    />
                </div>
            </div>

            <div className="col-md-12 mb-3">
                <div className="form-group">
                    <textarea
                    name='message'
                    placeholder='message'
                    value={text.message}
                    onChange={changeText}
                    rows='8'
                    cols='45'
                    className='form-control'
                    ></textarea>
                </div>
            </div>

            <div className="col-md-12 my-3">
                <div className="mb-3">
                    <div className="loading">Loading...</div>
                    {text.result === 'incomplete' && (
                        <div className="error-message">
                            PLease fill in all the above details
                        </div>
                    )}
                    <div className="sent-message">
                        Your message has been sent
                    </div>
                </div>
            </div>

            <div className="col-md-12 text-center">
                <button type='submit' className="btn btn-a"> Send Message</button>
            </div>
        </div>

    </form>
  )
}

export default ContactForm