import React, { useState } from 'react';

const Home = () => {
    const [isVideoEnded, setVideoEnded] = useState(false);

    return (
        <div style={styles.container}>
            {isVideoEnded ? (
                <img
                    src="/intro.png" // Path to the image in the public folder
                    alt="Intro"
                    style={styles.image}
                />
            ) : (
                <video
                    src="/videos/intro2.mp4" // Path to the video in the public folder
                    autoPlay
                    muted
                    style={styles.video}
                    onEnded={() => setVideoEnded(true)} // Handle video end
                />
            )}
        </div>
    );
};

const styles = {
    container: {
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#000',
    },
    video: {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
    },
    image: {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
    },
};

export default Home;
