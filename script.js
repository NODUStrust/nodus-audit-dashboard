function fetchLogs() {
  fetch('/api/audit-log', {
    headers: {
      'Authorization': 'Bearer NODUS_Trust!SecureKey_4482'
    }
  })
  .then(response => {
    if (!response.ok) throw new Error('Unauthorized or failed');
    return response.json();
  })
  .then(data => {
    document.getElementById('output').textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    document.getElementById('output').textContent = 'Error: ' + error.message;
    console.error('Fetch error:', error);
  });
}