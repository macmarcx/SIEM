// Function to format logs for display
function formatLogs(logs) {
    return logs.map(log => ({
        id: log.id,
        timestamp: new Date(log.timestamp).toLocaleString(),
        event: log.event,
        source: log.source,
        severity: log.severity.toUpperCase()
    }));
}

module.exports = formatLogs;
