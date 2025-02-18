import React from 'react'
import './ContactStyle.css'

function Contact() {
    return (
        <>
            <div className="container-xxl py-5 contact">
                <div className="container">
                    {/* <div className="text-center mx-auto mb-5 " data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                </div> */}
                    <div className="row g-4">
                        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <iframe className="position-relative rounded w-100 h-100"
                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.1279419467037!2d36.32113292518153!3d33.52405904543669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6e892dfeb23%3A0xd533119047981584!2z2LPYp9it2Kkg2KfZhNi52KjYp9iz2YrZitmG!5e0!3m2!1sar!2s!4v1722066699283!5m2!1sar!2s"
                                frameborder="0" style={{ minHeight: '400px', border: '0' }} allowfullscreen="" aria-hidden="false"
                                tabindex="0"></iframe>
                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.5s">
                                <h2 className="mb-3">Contact Us</h2>
                                <p className="mb-4">Ready to find your dream home? Contact us today for personalized service and exclusive listings.</p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label for="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn w-100 text-light py-3" style={{ backgroundColor: '#5468ff' }} type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact