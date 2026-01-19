const BigTextVisual = () => {
    return (
        <section className="visual-section">
            <div className="full-visual" style={{
                backgroundImage: `url('https://framerusercontent.com/images/2x3c4v5b6n7m.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="visual-overlay">
                    <h2 className="big-text">XTREME</h2>
                </div>
            </div>

            <style>{`
                .visual-section {
                    height: 30vh;
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                }

                .full-visual {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .visual-overlay {
                }

                .big-text {
                    font-size: 12vw;
                    color: #f8f8f8ff;
                    font-weight: 500;
                    letter-spacing: -2px;
                    white-space: nowrap;
                }
            `}</style>
        </section>
    );
};

export default BigTextVisual;
