const axios = require('axios');

// Function to fetch logs from the SIEM API
async function fetchLogs(siemEndpoint, apiKey, query) {
    try {
        const response = await axios.get(`${siemEndpoint}/logs`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
            params: { query }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching logs from SIEM:", error.message);
        return null;
    }
}

module.exports = fetchLogs;
