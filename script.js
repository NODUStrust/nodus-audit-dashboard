function fetchLogs() {
  fetch('/api/audit-log', {
    headers: {
      'Authorization': 'Bearer NODUS_Trust!SecureKey_4482'
    }
  })
  .then(response => {
    if (!response.ok) {
      return response.text().then(text => {
        throw new Error(`Server responded: ${response.status} ${text}`);
      });
    }
    return response.json();
  })
  .then(data => {
    document.getElementById('output').textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    document.getElementById('output').textContent = 'Error: ' + error.message;
  });
}