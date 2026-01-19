import { ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section-dark">
            <div className="section-header-dark">
                <span className="text-label-mono-light">(006)</span>
                <h2 className="section-title-light">Let&apos;s build together.</h2>
            </div>

            <div className="contact-content">
                <div className="contact-form-col">
                    <form className="dark-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Full Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="name@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Enter your message" rows={4}></textarea>
                        </div>
                        <button type="submit" className="submit-link">
                            Submit <ArrowRight size={16} />
                        </button>
                    </form>
                </div>

                <div className="contact-info-col">
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="info-label">OFFICE</span>
                            <p>Bangalore<br/>Karnataka, India</p>
                        </div>
                        <div className="info-item">
                            <span className="info-label">PHONE</span>
                            <p>+91 9876543210</p>
                        </div>
                        <div className="info-item">
                            <span className="info-label">EMAIL</span>
                            <p>hello@nxtstudio.com</p>
                        </div>
                    </div>

                    <div className="contact-image">
                       <div className="img-placeholder" style={{
                           backgroundImage: 'url(https://framerusercontent.com/images/3fQkBq4u0M6w3y9x2q7e5r8t.jpg)',
                           backgroundSize: 'cover',
                           backgroundPosition: 'center',
                           width: '100%',
                           height: '300px'
                       }}></div>
                    </div>
                </div>
            </div>

            <style>{`
                .contact-section-dark {
                    background-color: black;
                    color: white;
                    padding: var(--padding-section);
                    padding-bottom: 80px;
                }

                .section-header-dark {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 80px;
                    align-items: flex-start;
                }

                .text-label-mono-light {
                    font-family: monospace;
                    font-size: 12px;
                    color: #888;
                }

                .section-title-light {
                    font-size: 32px;
                    font-weight: 500;
                }

                .contact-content {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 120px;
                }

                .dark-form {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .form-group label {
                    font-size: 12px;
                    font-weight: 600;
                    color: white;
                }

                .form-group input, .form-group textarea {
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid rgba(255,255,255,0.2);
                    padding: 12px 0;
                    color: #888;
                    font-family: inherit;
                    font-size: 16px;
                    resize: none;
                }

                .form-group input:focus, .form-group textarea:focus {
                    outline: none;
                    border-bottom-color: white;
                    color: white;
                }

                .submit-link {
                    background: none;
                    border: none;
                    color: white;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 16px;
                    cursor: pointer;
                    padding: 0;
                    border-bottom: 1px solid white;
                    width: fit-content;
                    padding-bottom: 4px;
                }

                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 32px;
                    margin-bottom: 60px;
                }

                .info-label {
                    display: block;
                    font-size: 12px;
                    color: #666;
                    margin-bottom: 8px;
                    letter-spacing: 0.5px;
                }

                .info-item p {
                    font-size: 14px;
                    line-height: 1.5;
                    color: #ccc;
                }

                .contact-image {
                    width: 100%;
                }

                @media (max-width: 1024px) {
                    .contact-content {
                        gap: 60px;
                        grid-template-columns: 1fr; /* Stack earlier on smaller tablets */
                    }
                    .contact-section-dark {
                         padding-bottom: 60px;
                    }
                }

                @media (max-width: 768px) {
                    .contact-content {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .section-header-dark {
                        flex-direction: column;
                        gap: 24px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
