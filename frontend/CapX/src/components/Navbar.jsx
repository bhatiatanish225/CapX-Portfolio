import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#333', color: '#fff' }}>
            <Toolbar>
                {/* Logo */}
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 1 }}
                >
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Portfolio Tracker
                    </Link>
                </Typography>

                {/* Navigation Buttons */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button component={Link} to="/" color="inherit">
                        Home
                    </Button>
                    <Button component={Link} to="/about" color="inherit">
                        About
                    </Button>
                    <Button component={Link} to="/dashboard" color="inherit">
                        Dashboard
                    </Button>
                    <Button component={Link} to="/add-stock" color="inherit">
                        Add Stock
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
