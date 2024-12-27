import React from 'react';

const StockTable = ({ stocks, onDelete }) => (
    <table>
        <thead>
            <tr>
                <th>Stock Name</th>
                <th>Ticker</th>
                <th>Quantity</th>
                <th>Buy Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {stocks.map((stock) => (
                <tr key={stock.ticker}>
                    <td>{stock.name}</td>
                    <td>{stock.ticker}</td>
                    <td>{stock.quantity}</td>
                    <td>${stock.buyPrice}</td>
                    <td>
                        <button onClick={() => onDelete(stock.ticker)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default StockTable;
