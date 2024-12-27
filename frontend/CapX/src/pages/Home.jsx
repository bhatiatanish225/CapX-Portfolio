import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    backgroundColor: '#000',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '70vh',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                {/* Image Slider */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        animation: 'scroll 10s linear infinite',
                    }}
                >
                    <img
                        src="/images/stock1.jpg"
                        alt="Stock 1"
                        style={{ width: '300px', borderRadius: '8px' }}
                    />
                    <img
                        src="/images/stock2.jpg"
                        alt="Stock 2"
                        style={{ width: '300px', borderRadius: '8px' }}
                    />
                    <img
                        src="/images/stock3.jpg"
                        alt="Stock 3"
                        style={{ width: '300px', borderRadius: '8px' }}
                    />
                </Box>

                {/* Overlay */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        Welcome to Portfolio Tracker
                    </Typography>
                </Box>
            </Box>

            {/* About Section */}
            <Container sx={{ my: 5 }}>
                <Typography variant="h4" gutterBottom>
                    About Our Website
                </Typography>
                <Typography variant="body1">
                    Our portfolio tracker helps you manage your investments effectively. 
                    Add, edit, and view your stocks, and track the value of your portfolio dynamically with live updates.
                </Typography>
            </Container>

            {/* Footer */}
            <Box sx={{ backgroundColor: '#333', color: '#fff', py: 3, textAlign: 'center' }}>
                <Typography variant="body2">
                    © 2024 Portfolio Tracker. All rights reserved.
                </Typography>
            </Box>
        </>
    );
};

export default Home;
