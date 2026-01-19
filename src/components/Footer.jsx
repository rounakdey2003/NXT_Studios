const Footer = () => {
    return (
        <footer className="footer-mini">
            <div className="footer-bottom">
                <span>© 2025 NXT Studio. All rights reserved.</span>
                <span>Created by NXT Studio.</span>
            </div>

            <style>{`
                .footer-mini {
                    background-color: black;
                    color: #555;
                    padding: 40px 60px;
                    font-size: 12px;
                }
                
                @media (max-width: 1024px) {
                    .footer-mini {
                        padding: 40px; /* Aligned with reduced section padding */
                    }
                }

                .footer-bottom {
                    display: flex;
                    justify-content: space-between;
                }

                @media (max-width: 768px) {
                    .footer-mini {
                        padding: 40px 24px;
                    }
                    .footer-bottom {
                        flex-direction: column;
                        gap: 12px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
