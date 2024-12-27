import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import StockForm from '../components/StockForm';
import AnimatedBackground from '../components/AnimatedBackground'; // Import the dynamic background component

const AddStock = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 4,
                backgroundColor: '#121212',
            }}
        >
            {/* Dynamic Background */}
            <AnimatedBackground />

            <Paper
                elevation={6}
                sx={{
                    position: 'relative',
                    zIndex: 2, // Ensure it's above the background
                    padding: 4,
                    borderRadius: 4,
                    backgroundColor: '#1E1E1E',
                    width: '90%',
                    maxWidth: '600px',
                    textAlign: 'center',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.8)',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: '#fff',
                        fontWeight: 'bold',
                        marginBottom: 2,
                        textShadow: '0px 4px 6px rgba(0, 0, 0, 0.6)',
                    }}
                >
                    Add a New Stock
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ color: '#aaa', marginBottom: 3 }}
                >
                    Fill in the stock details below to add it to your portfolio.
                </Typography>

                {/* StockForm Component */}
                <StockForm />
            </Paper>
        </Box>
    );
};

export default AddStock;
