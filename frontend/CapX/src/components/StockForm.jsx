import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const StockForm = () => {
    const [form, setForm] = useState({
        stockName: '',
        ticker: '',
        quantity: '',
        buyPrice: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        // Add API call or logic to save stock data
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                textAlign: 'center',
            }}
        >
            <TextField
                name="stockName"
                label="Stock Name"
                variant="filled"
                value={form.stockName}
                onChange={handleChange}
                sx={{
                    input: { color: '#fff' },
                    '& .MuiInputLabel-root': { color: '#aaa' },
                    '& .MuiFilledInput-root': { backgroundColor: '#333' },
                }}
            />
            <TextField
                name="ticker"
                label="Ticker"
                variant="filled"
                value={form.ticker}
                onChange={handleChange}
                sx={{
                    input: { color: '#fff' },
                    '& .MuiInputLabel-root': { color: '#aaa' },
                    '& .MuiFilledInput-root': { backgroundColor: '#333' },
                }}
            />
            <TextField
                name="quantity"
                label="Quantity"
                variant="filled"
                value={form.quantity}
                onChange={handleChange}
                sx={{
                    input: { color: '#fff' },
                    '& .MuiInputLabel-root': { color: '#aaa' },
                    '& .MuiFilledInput-root': { backgroundColor: '#333' },
                }}
            />
            <TextField
                name="buyPrice"
                label="Buy Price"
                variant="filled"
                value={form.buyPrice}
                onChange={handleChange}
                sx={{
                    input: { color: '#fff' },
                    '& .MuiInputLabel-root': { color: '#aaa' },
                    '& .MuiFilledInput-root': { backgroundColor: '#333' },
                }}
            />
            <Button
                type="submit"
                variant="contained"
                sx={{
                    backgroundColor: '#6200EE',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#3700B3' },
                    padding: 1.5,
                    fontWeight: 'bold',
                }}
            >
                Add Stock
            </Button>
        </Box>
    );
};

export default StockForm;
