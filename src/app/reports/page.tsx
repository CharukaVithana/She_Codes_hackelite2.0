"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Reports = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    axios.get('/api/reports') // backend API to fetch report stats
      .then(res => setReportData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reports Dashboard</h1>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Example summary widgets */}
        <div className="bg-white shadow p-4 rounded">Total Proposals: 120</div>
        <div className="bg-white shadow p-4 rounded">Accepted: 80</div>
        <div className="bg-white shadow p-4 rounded">Pending: 40</div>
      </div>

      <div className="bg-white shadow p-4 rounded">
        <h2 className="text-xl mb-2">Proposals Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={reportData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Reports;
