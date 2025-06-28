function fetchLogs() {
  fetch('/api/audit-log', {
    headers: {
      'Authorization': 'Bearer NODUS_Trust!SecureKey_4482'
    }
  })
  .then(res => res.json())
  .then(data => document.getElementById('output').textContent = JSON.stringify(data, null, 2))
  .catch(err => console.error(err));
}