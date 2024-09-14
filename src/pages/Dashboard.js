import React, { useState, useEffect } from 'react';
import fetchLogs from '../utils/fetchLogs';
import formatLogs from '../utils/formatLogs';

const Dashboard = () => {
    const [logs, setLogs] = useState([]);
    
    useEffect(() => {
        // Function to load logs from SIEM
        async function loadLogs() {
            const siemEndpoint = process.env.SIEM_API_URL;
            const apiKey = process.env.SIEM_API_KEY;
            const query = 'severity:critical';
            const fetchedLogs = await fetchLogs(siemEndpoint, apiKey, query);
            
            if (fetchedLogs) {
                setLogs(formatLogs(fetchedLogs));
            }
        }

        loadLogs();
    }, []);

    return (
        <div>
            <h1>SIEM Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Timestamp</th>
                        <th>Event</th>
                        <th>Source</th>
                        <th>Severity</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map(log => (
                        <tr key={log.id}>
                            <td>{log.id}</td>
                            <td>{log.timestamp}</td>
                            <td>{log.event}</td>
                            <td>{log.source}</td>
                            <td>{log.severity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
