import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = ({ totalValue, topStock }) => (
    <div className="dashboard">
        <h2>Portfolio Metrics</h2>
        <p><strong>Total Value:</strong> ${totalValue}</p>
        <p><strong>Top Stock:</strong> {topStock}</p>
    </div>
);

export default Dashboard;
